import { computeDeepClone } from "../../../utilities/deepClone"
import { RESOLUTION } from "./constants"
import { SubmetricConfig } from "../types"
import { Combination } from "../../../utilities/types"
import { DynamicParameter, Point } from "./samples/types"

const computeNextConfigs = (point: Point, dynamicParameters: DynamicParameter[], submetricConfigs: Combination<SubmetricConfig> ) => {
    const nextConfigs = computeDeepClone(submetricConfigs)

    point.forEach((coordinate, index) => {
        const { submetricIndex, parameter, parameterPoints, unit } = dynamicParameters[ index ]

        const center = parameterPoints[ coordinate ]
        const range = unit * (2 / 3)
        const count = RESOLUTION

        nextConfigs[ submetricIndex ][ parameter ] = { center, range, count }
    })

    return nextConfigs
}

export {
    computeNextConfigs,
}
