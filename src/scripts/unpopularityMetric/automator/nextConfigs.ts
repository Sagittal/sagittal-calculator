import { computeDeepClone } from "../../../utilities/deepClone"
import { RESOLUTION } from "./constants"
import { SubmetricConfig } from "../types"
import { Combination } from "../../../utilities/types"
import { DynamicParameter, SamplePoint } from "./samples/types"

const computeNextConfigs = (point: SamplePoint, dynamicParameters: DynamicParameter[], submetricConfigs: Combination<SubmetricConfig> ) => {
    const nextConfigs = computeDeepClone(submetricConfigs)

    point.forEach((coordinate, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ coordinate ]
        const range = unit * (2 / 3)
        const resolution = RESOLUTION

        nextConfigs[ submetricIndex ][ parameter ] = { center, range, resolution }
    })

    return nextConfigs
}

export {
    computeNextConfigs,
}
