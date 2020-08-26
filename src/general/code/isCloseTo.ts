import { abs, round } from "../math"
import { ACCURACY_THRESHOLD } from "./constants"

const computeIsCloseTo = (valueOne: number, valueTwo: number, accuracyThreshold = ACCURACY_THRESHOLD): boolean => {
    const difference = valueOne - valueTwo

    return abs(round(difference, accuracyThreshold)) === 0
}

export {
    computeIsCloseTo,
}
