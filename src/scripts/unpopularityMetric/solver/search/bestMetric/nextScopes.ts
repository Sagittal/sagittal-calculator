import { computeDeepClone, Span } from "../../../../../general"
import { ParameterValue } from "../../../types"
import { SubmetricScope } from "../../types"
import { computeResolution, DynamicParameter } from "../scopeToSamples"
import { SamplePoint } from "../types"

const computeNextScopes = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], submetricScopes: SubmetricScope[]) => {
    const nextScopes = computeDeepClone(submetricScopes)

    samplePoint.forEach((dynamicParameterValueIndex, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ dynamicParameterValueIndex ]
        const span: Span<ParameterValue> = unit * (2 / 3) as Span<ParameterValue>
        const resolution = computeResolution(span)

        nextScopes[ submetricIndex ][ parameter ] = { center, span, resolution }
    })

    return nextScopes
}

export {
    computeNextScopes,
}
