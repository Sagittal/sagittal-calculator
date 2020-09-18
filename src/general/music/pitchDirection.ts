import { isUndefined } from "../code"
import {
    computeIsSubMonzo,
    computeIsSubRatio,
    computeIsSuperMonzo,
    computeIsSuperRatio,
    computeIsUnisonMonzo,
    computeIsUnisonRatio,
    computeSuperMonzo,
    computeSuperRatio,
    Direction,
    negative,
    NumericTypeParameters,
} from "../math"
import { Pitch } from "./types"

const computeIsSuperPitch = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUPER }> => {
    const { monzo, ratio, cents } = pitch

    return (!isUndefined(ratio) && computeIsSuperRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSuperMonzo(monzo)) ||
        (!isUndefined(cents) && cents > 0)
}

const computeIsSubPitch = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUB }> => {
    const { monzo, ratio, cents } = pitch

    return (!isUndefined(ratio) && computeIsSubRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSubMonzo(monzo)) ||
        (!isUndefined(cents) && cents < 0)
}

const computeIsUnisonPitch = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.UNISON }> => {
    const { monzo, ratio, cents } = pitch

    return (!isUndefined(ratio) && computeIsUnisonRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsUnisonMonzo(monzo)) ||
        (!isUndefined(cents) && cents === 0)
}

const computeSuperPitch = <T extends NumericTypeParameters, U extends Pitch<T>>(
    pitch: U,
): Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const isSubPitch = computeIsSubPitch(pitch)

    let superPitch: Pitch = {} as Pitch
    if (isSubPitch) {
        const { monzo, ratio, cents, name } = pitch
        if (!isUndefined(ratio)) superPitch.ratio = computeSuperRatio(ratio)
        if (!isUndefined(monzo)) superPitch.monzo = computeSuperMonzo(monzo)
        if (!isUndefined(cents)) superPitch.cents = negative(cents)
        if (!isUndefined(name)) {
            throw new Error(`Pitch was named ${name} but was sub and taken the super of. Name should change.`)
        }
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
