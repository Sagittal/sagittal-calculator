import { isUndefined } from "../code"
import {
    computeIsSubMonzo,
    computeIsSubRatio,
    computeIsSuperMonzo,
    computeIsSuperRatio,
    computeIsUnisonMonzo,
    computeIsUnisonRatio,
    Direction,
    NumericTypeParameters,
} from "../math"
import { Pitch } from "./types"

const computeIsSuperPitch = <T extends NumericTypeParameters>(
    pitch: Pitch<T>,
): pitch is Pitch<T & { direction: Direction.SUPER }> => {
    const { monzo, ratio, cents } = pitch

    return (!isUndefined(ratio) && computeIsSuperRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSuperMonzo(monzo)) ||
        (!isUndefined(cents) && cents > 0)
}

const computeIsSubPitch = <T extends NumericTypeParameters>(
    pitch: Pitch<T>,
): pitch is Pitch<T & { direction: Direction.SUB }> => {
    const { monzo, ratio, cents } = pitch

    return (!isUndefined(ratio) && computeIsSubRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSubMonzo(monzo)) ||
        (!isUndefined(cents) && cents < 0)
}

const computeIsUnisonPitch = <T extends NumericTypeParameters>(
    pitch: Pitch<T>
): pitch is Pitch<T & { direction: Direction.UNISON }> => {
    const { monzo, ratio, cents } = pitch

    return (!isUndefined(ratio) && computeIsUnisonRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsUnisonMonzo(monzo)) ||
        (!isUndefined(cents) && cents === 0)
}

export {
    computeIsSubPitch,
    computeIsSuperPitch,
    computeIsUnisonPitch,
}
