import { round } from "./round"
import { ACCURACY_THRESHOLD } from "./constants"

const computeIsCloseTo = <T extends number>(valueOne: T, valueTwo: T, accuracyThreshold = ACCURACY_THRESHOLD) => {
    const difference = valueOne - valueTwo

    return Math.abs(round(difference, accuracyThreshold)) === 0
}

export {
    computeIsCloseTo,
}
