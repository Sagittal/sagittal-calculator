import { abs, round } from "../math"
import { ACCURACY_THRESHOLD } from "./constants"

const isCloseTo = (valueOne: number, valueTwo: number, accuracyThreshold = ACCURACY_THRESHOLD): boolean => {
    const difference = valueOne - valueTwo

    return abs(round(difference, accuracyThreshold)) === 0
}

export {
    isCloseTo,
}
