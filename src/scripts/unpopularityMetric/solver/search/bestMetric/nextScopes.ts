import { computeDeepClone } from "../../../../../utilities/deepClone"
import { SubmetricScope } from "../../../types"
import { DynamicParameter, SamplePoint, SampleRange } from "../scopeToSamples/types"
import { computeResolution } from "../scopeToSamples/resolution"

const computeNextScopes = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], submetricScopes: SubmetricScope[]) => {
    const nextScopes = computeDeepClone(submetricScopes)

    samplePoint.forEach((dynamicParameterValueIndex, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ dynamicParameterValueIndex ]
        const range: SampleRange = unit * (2 / 3) as SampleRange
        const resolution = computeResolution(range)

        nextScopes[ submetricIndex ][ parameter ] = { center, range, resolution }
    })

    return nextScopes
}

export {
    computeNextScopes,
}
