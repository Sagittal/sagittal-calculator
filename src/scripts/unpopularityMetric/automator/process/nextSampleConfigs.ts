import { computeDeepClone } from "../../../../utilities/deepClone"
import { SubmetricSampleConfig } from "../../types"
import { DynamicParameter, SamplePoint, SampleRange } from "./samples/types"
import { computeResolution } from "./samples/resolution"

const computeNextSampleConfigs = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], submetricSampleConfigs: SubmetricSampleConfig[]) => {
    const nextSampleConfigs = computeDeepClone(submetricSampleConfigs)

    samplePoint.forEach((dynamicParameterValueIndex, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ dynamicParameterValueIndex ]
        const range: SampleRange = unit * (2 / 3) as SampleRange
        const resolution = computeResolution(range)

        nextSampleConfigs[ submetricIndex ][ parameter ] = { center, range, resolution }
    })

    return nextSampleConfigs
}

export {
    computeNextSampleConfigs,
}
