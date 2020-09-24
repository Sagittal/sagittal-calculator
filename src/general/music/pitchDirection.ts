import { deepClone, isUndefined } from "../code"
import {
    ADDITIVE_IDENTITY,
    computeIsSubNum,
    computeIsSuperNum,
    computeIsUnisonNum,
    computeSuperNum,
    Direction,
    negative,
    NumTypeParameters,
} from "../math"
import { Pitch } from "./types"

const computeIsSuperPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUPER }> => {
    const { cents } = pitch

    if (!isUndefined(cents) && cents > ADDITIVE_IDENTITY) return true

    return computeIsSuperNum(pitch)
}

const computeIsSubPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUB }> => {
    const { cents } = pitch

    if (!isUndefined(cents) && cents < ADDITIVE_IDENTITY) return true

    return computeIsSubNum(pitch)
}

const computeIsUnisonPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.UNISON }> => {
    const { cents } = pitch

    if (!isUndefined(cents) && cents === ADDITIVE_IDENTITY) return true

    return computeIsUnisonNum(pitch)
}

const computeSuperPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const isSubPitch = computeIsSubPitch(pitch)

    let superPitch: Pitch
    if (isSubPitch) {
        superPitch = computeSuperNum(pitch)
        const { cents } = pitch
        if (!isUndefined(cents)) superPitch.cents = negative(cents)
    } else {
        superPitch = deepClone(pitch)
    }

    return superPitch as Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }>
}

export {
    computeIsSubPitch,
    computeIsSuperPitch,
    computeIsUnisonPitch,
    computeSuperPitch,
}
