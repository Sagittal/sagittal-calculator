import { abs, Integer, round } from "../math"
import { ACCURACY_THRESHOLD } from "./constants"
import { isUndefined } from "./typeGuards"
import { Maybe } from "./types"

const isCloseTo = (
    valueOne: Maybe<number>,
    valueTwo: Maybe<number>,
    accuracyThreshold: Integer = ACCURACY_THRESHOLD,
): boolean => {
    if (isUndefined(valueOne) || isUndefined(valueTwo)) {
        return isUndefined(valueOne) && isUndefined(valueTwo)
    }

    const difference = valueOne - valueTwo

    return abs(round(difference, accuracyThreshold)) === 0
}

export {
    isCloseTo,
}
