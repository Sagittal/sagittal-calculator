import { isUndefined } from "../code"
import {
    ADDITIVE_IDENTITY,
    computeIsSubNumber,
    computeIsSuperNumber,
    computeIsUnisonNumber,
    computeSuperNumber,
    Direction,
    negative,
    NumericTypeParameters,
} from "../math"
import { Pitch } from "./types"

const computeIsSuperPitch = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUPER }> => {
    const { cents } = pitch

    if (!isUndefined(cents) && cents > ADDITIVE_IDENTITY) return true

    return computeIsSuperNumber(pitch)
}

const computeIsSubPitch = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUB }> => {
    const { cents } = pitch

    if (!isUndefined(cents) && cents < ADDITIVE_IDENTITY) return true

    return computeIsSubNumber(pitch)
}

const computeIsUnisonPitch = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.UNISON }> => {
    const { cents } = pitch

    if (!isUndefined(cents) && cents === ADDITIVE_IDENTITY) return true

    return computeIsUnisonNumber(pitch)
}

const computeSuperPitch = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const isSubPitch = computeIsSubPitch(pitch)

    let superPitch: Pitch
    if (isSubPitch) {
        superPitch = computeSuperNumber(pitch)
        const { cents } = pitch
        if (!isUndefined(cents)) superPitch.cents = negative(cents)
    } else {
        superPitch = pitch
    }

    return superPitch as Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }>
}

export {
    computeIsSubPitch,
    computeIsSuperPitch,
    computeIsUnisonPitch,
    computeSuperPitch,
}
