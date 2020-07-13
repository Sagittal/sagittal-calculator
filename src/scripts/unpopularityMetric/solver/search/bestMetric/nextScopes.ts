import { computeDeepClone } from "../../../../../utilities/deepClone"
import { DynamicParameterValue, SubmetricScope } from "../../../types"
import { DynamicParameter, SamplePoint } from "../scopeToSamples/types"
import { computeResolution } from "../scopeToSamples/resolution"
import { Span } from "../../../../../utilities/types"

const computeNextScopes = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], submetricScopes: SubmetricScope[]) => {
    const nextScopes = computeDeepClone(submetricScopes)

    samplePoint.forEach((dynamicParameterValueIndex, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ dynamicParameterValueIndex ]
        const span: Span<DynamicParameterValue> = unit * (2 / 3) as Span<DynamicParameterValue>
        const resolution = computeResolution(span)

        nextScopes[ submetricIndex ][ parameter ] = { center, span, resolution }
    })

    return nextScopes
}

export {
    computeNextScopes,
}
