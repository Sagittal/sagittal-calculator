import { deepClone } from "../../code"
import {
    Direction,
    invertMonzo,
    isDecimalSub,
    isDecimalSuper,
    isDecimalUnison,
    Monzo,
    NumericProperties,
} from "../../math"
import { computeIrrationalDecimalFromPitch } from "../irrational"
import { Pitch } from "./types"

const isPitchSuper = <T extends NumericProperties>(
    candidateSuperPitch: Pitch<T>,
): candidateSuperPitch is (Pitch<T & { direction: Direction.SUPER }>) =>
    isDecimalSuper(computeIrrationalDecimalFromPitch(candidateSuperPitch))

const isPitchSub = <T extends NumericProperties>(
    candidateSubPitch: Pitch<T>,
): candidateSubPitch is Pitch<T & { direction: Direction.SUB }> =>
    isDecimalSub(computeIrrationalDecimalFromPitch(candidateSubPitch))

const isPitchUnison = <T extends NumericProperties>(
    candidateUnisonPitch: Pitch<T>,
): candidateUnisonPitch is Pitch<T & { direction: Direction.UNISON }> =>
    isDecimalUnison(computeIrrationalDecimalFromPitch(candidateUnisonPitch))

const computeSuperPitch: {
    <T extends NumericProperties>(
        pitch: Pitch<T & { direction: Direction.UNISON }>,
    ): Pitch<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        pitch: Pitch<T>,
    ): Pitch<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumericProperties>(
    pitch: Pitch<T>,
): Pitch<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.UNISON }> =>
    isPitchSuper(pitch) ?
        pitch as Pitch<Omit<T, "direction">> :
        invertPitch(pitch) as Pitch<Omit<T, "direction">>

const computeSubPitch: {
    <T extends NumericProperties>(
        pitch: Pitch<T & { direction: Direction.UNISON }>,
    ): Pitch<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        pitch: Pitch<T>,
    ): Pitch<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
} = <T extends NumericProperties>(
    pitch: Pitch<T>,
): Pitch<Omit<T, "direction"> & { direction: Direction.SUB & Direction.UNISON }> =>
    isPitchSub(pitch) ?
        pitch as Pitch<Omit<T, "direction">> :
        invertPitch(pitch) as Pitch<Omit<T, "direction">>

const invertPitch: {
    <T extends NumericProperties>(
        pitch: Pitch<T & { direction: Direction.SUPER }>,
    ): Pitch<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties>(
        pitch: Pitch<T & { direction: Direction.SUB }>,
    ): Pitch<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        pitch: Pitch<T & { direction: Direction.UNISON }>,
    ): Pitch<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        pitch: Pitch<T>,
    ): Pitch<Omit<T, "direction"> & { integer: false }>,
} = <T extends NumericProperties>(
    pitch: Pitch<T>,
): Pitch<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB & Direction.UNISON }> => {
    const invertedPitch = deepClone(pitch)

    invertedPitch.monzo = invertMonzo(invertedPitch.monzo) as Monzo<T & { rational: true }>

    return invertedPitch as Pitch<Omit<T, "direction">>
}

export {
    isPitchSub,
    isPitchSuper,
    isPitchUnison,
    computeSuperPitch,
    computeSubPitch,
    invertPitch,
}
