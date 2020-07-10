import {computeDeepClone} from "../../../utilities/deepClone"
import {RESOLUTION} from "./constants"

const computeNextConfigs = (coordinate, dynamicParameters, configs) => {
    const nextConfigs = computeDeepClone(configs)

    coordinate.forEach((coordinateElement, index) => {
        const {submetricIndex, parameter, parameterPoints, unit} = dynamicParameters[index]

        const center = parameterPoints[coordinateElement]
        const range = unit * (2/3)
        const count = RESOLUTION

        nextConfigs[submetricIndex][parameter] = { center, range, count }
    })

    return nextConfigs
}

export {
    computeNextConfigs,
}
