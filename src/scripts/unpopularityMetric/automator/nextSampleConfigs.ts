import { computeDeepClone } from "../../../utilities/deepClone"
import { SubmetricSampleConfig } from "../types"
import { DynamicParameter, SamplePoint } from "./samples/types"
import { RESOLUTION } from "./samples/constants"

const computeNextSampleConfigs = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], submetricSampleConfigs: SubmetricSampleConfig[]) => {
    const nextSampleConfigs = computeDeepClone(submetricSampleConfigs)

    samplePoint.forEach((dynamicParameterValueIndex, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ dynamicParameterValueIndex ]
        const range = unit * (2 / 3)
        const resolution = RESOLUTION

        nextSampleConfigs[ submetricIndex ][ parameter ] = { center, range, resolution }
    })

    return nextSampleConfigs
}

export {
    computeNextSampleConfigs,
}
