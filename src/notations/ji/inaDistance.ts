import {INA_SIZES} from "./intervals"

const computeInaDistance = (distance, level) => {
    return distance / INA_SIZES[level]
}

export {
    computeInaDistance,
}
