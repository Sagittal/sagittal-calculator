import { deepClone } from "../../code"
import {
    Direction,
    invertMonzo,
    isSubDecimal,
    isSubMonzo,
    isSuperDecimal,
    isSuperMonzo,
    isUnisonDecimal,
    isUnisonMonzo,
    Monzo,
    NumericProperties,
} from "../../math"
import { isJi } from "../ji"
import { computeDecimalFromPitch } from "./to"
import { Pitch } from "./types"

const isSuperPitch = <T extends NumericProperties, U extends Pitch<T>>(
    candidateSuperPitch: U,
): candidateSuperPitch is U & (Pitch<T & { direction: Direction.SUPER }>) =>
    isJi(candidateSuperPitch) ?
        isSuperMonzo(candidateSuperPitch.monzo) :
        isSuperDecimal(computeDecimalFromPitch(candidateSuperPitch))

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  I got confused for a moment and thought this meant "is this SUB thing REAL?" rather than "is this REAL thing Sub
//  So maybe it should be "isRealSub" when a "SubReal" is not an actual thing?

const isSubPitch = <T extends NumericProperties, U extends Pitch<T>>(
    candidateSubPitch: U,
): candidateSubPitch is U & Pitch<T & { direction: Direction.SUB }> =>
    isJi(candidateSubPitch) ?
        isSubMonzo(candidateSubPitch.monzo) :
        isSubDecimal(computeDecimalFromPitch(candidateSubPitch))

const isUnisonPitch = <T extends NumericProperties, U extends Pitch<T>>(
    candidateUnisonPitch: U,
): candidateUnisonPitch is U & Pitch<T & { direction: Direction.UNISON }> =>
    isJi(candidateUnisonPitch) ?
        isUnisonMonzo(candidateUnisonPitch.monzo) :
        isUnisonDecimal(computeDecimalFromPitch(candidateUnisonPitch))

const computeSuperPitch = <T extends NumericProperties, U extends Pitch<T>>(
    pitch: U,
): U & Pitch<T & { direction: Direction.SUPER, integer: false }> => {
    const superPitch = deepClone(pitch)

    if (isSubPitch(pitch)) {
        superPitch.monzo = invertMonzo(superPitch.monzo) as Monzo<T & { rational: true }>
    }

    return superPitch
}

export {
    isSubPitch,
    isSuperPitch,
    isUnisonPitch,
    computeSuperPitch,
}
