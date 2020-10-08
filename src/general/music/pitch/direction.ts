import { deepClone } from "../../code"
import {
    Direction,
    invertMonzo,
    isSubDecimal,
    isSuperDecimal,
    isUnisonDecimal, isUnisonMonzo,
    Monzo,
    NumericProperties,
} from "../../math"
import { computeIrrationalDecimalFromPitch } from "../nonJi"
import { Pitch } from "./types"

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  I got confused for a moment and thought this meant "is this SUB thing REAL?" rather than "is this REAL thing Sub
//  So maybe it should be "isRealSub" when a "SubReal" is not an actual thing?

const isSuperPitch = <T extends NumericProperties>(
    candidateSuperPitch: Pitch<T>,
): candidateSuperPitch is (Pitch<T & { direction: Direction.SUPER }>) =>
    isSuperDecimal(computeIrrationalDecimalFromPitch(candidateSuperPitch))

const isSubPitch = <T extends NumericProperties>(
    candidateSubPitch: Pitch<T>,
): candidateSubPitch is Pitch<T & { direction: Direction.SUB }> =>
    isSubDecimal(computeIrrationalDecimalFromPitch(candidateSubPitch))

const isUnisonPitch = <T extends NumericProperties>(
    candidateUnisonPitch: Pitch<T>,
): candidateUnisonPitch is Pitch<T & { direction: Direction.UNISON }> =>
    isUnisonDecimal(computeIrrationalDecimalFromPitch(candidateUnisonPitch))

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
    isSuperPitch(pitch) ?
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
    isSubPitch(pitch) ?
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
    isSubPitch,
    isSuperPitch,
    isUnisonPitch,
    computeSuperPitch,
    computeSubPitch,
    invertPitch,
}
