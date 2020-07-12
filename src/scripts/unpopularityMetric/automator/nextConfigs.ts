import { computeDeepClone } from "../../../utilities/deepClone"
import { SubmetricConfig } from "../types"
import { DynamicParameter, SamplePoint } from "./samples/types"
import { RESOLUTION } from "./samples/constants"

const computeNextConfigs = (point: SamplePoint, dynamicParameters: DynamicParameter[], submetricConfigs: SubmetricConfig[]) => {
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
