import { computeDeepClone } from "../../../utilities/deepClone"
import { RESOLUTION } from "./constants"
import { Point } from "./types"
import { MetricConfig, DynamicParameter } from "../types"

const computeNextConfigs = (point: Point, dynamicParameters: DynamicParameter[], config: MetricConfig) => {
    const nextConfigs = computeDeepClone(config)

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
