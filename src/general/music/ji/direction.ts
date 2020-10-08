import { Direction, isSubMonzo, isSuperMonzo, isUnisonMonzo, NumericProperties } from "../../math"
import { Pitch } from "../pitch"

const isSuperJiPitch = <T extends NumericProperties>(
    candidateSuperJiPitch: Pitch<T & { rational: true }>,
): candidateSuperJiPitch is (Pitch<T & { rational: true } & { direction: Direction.SUPER }>) =>
    isSuperMonzo(candidateSuperJiPitch.monzo)

const isSubJiPitch = <T extends NumericProperties>(
    candidateSubJiPitch: Pitch<T & { rational: true }>,
): candidateSubJiPitch is Pitch<T & { rational: true, direction: Direction.SUB }> =>
    isSubMonzo(candidateSubJiPitch.monzo)

// This is actually not that silly, because non-JI pitches can be unison via a scaler with a 0 numerator while their
// Monzos are not unison.
const isUnisonJiPitch = <T extends NumericProperties>(
    candidateUnisonJiPitch: Pitch<T & { rational: true }>,
): candidateUnisonJiPitch is Pitch<T & { rational: true, direction: Direction.UNISON }> =>
    isUnisonMonzo(candidateUnisonJiPitch.monzo)

export {
    isSuperJiPitch,
    isSubJiPitch,
    isUnisonJiPitch,
}
