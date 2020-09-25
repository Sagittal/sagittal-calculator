import { deepClone, isUndefined } from "../code"
import { formatPitch } from "../io"
import {
    ADDITIVE_IDENTITY,
    computeIsNum,
    computeIsSubNum,
    computeIsSuperNum,
    computeIsUnisonNum,
    computeSuperNum,
    Direction,
    negative,
    Num,
    NumTypeParameters,
} from "../math"
import { Cents, Pitch } from "./types"

const computeIsSuperPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUPER }> => {
    const { cents } = pitch

    if (!isUndefined(cents)) {
        return cents > ADDITIVE_IDENTITY
    }

    if (!computeIsNum(pitch)) {
        throw new Error(`Attempted to check whether pitch ${formatPitch(pitch as Pitch, { align: false })} was super, however it lacks either cents or any numeric representation (monzo, ratio, or decimal).`)
    }

    return computeIsSuperNum(pitch)
}

const computeIsSubPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.SUB }> => {
    const { cents } = pitch

    if (!isUndefined(cents)) {
       return cents < ADDITIVE_IDENTITY
    }

    if (!computeIsNum(pitch)) {
        throw new Error(`Attempted to check whether pitch ${formatPitch(pitch as Pitch, { align: false })} was sub, however it lacks either cents or any numeric representation (monzo, ratio, or decimal).`)
    }

    return computeIsSubNum(pitch)
}

const computeIsUnisonPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): pitch is Exclude<U, Pitch> & Pitch<T & { direction: Direction.UNISON }> => {
    const { cents } = pitch

    if (!isUndefined(cents)) {
        return cents === ADDITIVE_IDENTITY
    }

    if (!computeIsNum(pitch)) {
        throw new Error(`Attempted to check whether pitch ${formatPitch(pitch as Pitch, { align: false })} was unison, however it lacks either cents or any numeric representation (monzo, ratio, or decimal).`)
    }

    return computeIsUnisonNum(pitch)
}

const computeSuperPitch = <T extends NumTypeParameters, U extends Pitch<T>>(
    pitch: U,
): Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const isSubPitch = computeIsSubPitch(pitch as Pitch)

    let superPitch: Pitch
    if (isSubPitch) {
        superPitch = computeSuperNum(pitch as Num<T>) as Pitch
        const { cents } = pitch
        if (!isUndefined(cents)) superPitch.cents = negative(cents) as Cents
    } else {
        // TODO: yeah I don't know wth is up with these type assertions, but we got a bunch of these "pitch as Pitch"
        //  and I'm pretty sure it has something to do with this "U" type trickery, which was necessary for these
        //  to support branded pitches like Commas and TwoThreeFreeClasses
        //  you can find these elsewhere too, such as in computeIsCommaSized.ts
        superPitch = deepClone(pitch as Pitch)
    }

    return superPitch as Exclude<U, Pitch> & Pitch<Omit<T, "direction"> & { direction: Direction.SUPER }>
}

export {
    computeIsSubPitch,
    computeIsSuperPitch,
    computeIsUnisonPitch,
    computeSuperPitch,
}
