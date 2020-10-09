import { Direction, isMonzoSub, isMonzoSuper, isMonzoUnison, NumericProperties } from "../../math"
import { Pitch } from "../pitch"

const isJiPitchSuper = <T extends NumericProperties>(
    candidateSuperJiPitch: Pitch<T & { rational: true }>,
): candidateSuperJiPitch is (Pitch<T & { rational: true } & { direction: Direction.SUPER }>) =>
    isMonzoSuper(candidateSuperJiPitch.monzo)

const isJiPitchSub = <T extends NumericProperties>(
    candidateSubJiPitch: Pitch<T & { rational: true }>,
): candidateSubJiPitch is Pitch<T & { rational: true, direction: Direction.SUB }> =>
    isMonzoSub(candidateSubJiPitch.monzo)

// This is actually not that silly, because non-JI pitches can be unison via a scaler with a 0 numerator while their
// Monzos are not unison.
const isJiPitchUnison = <T extends NumericProperties>(
    candidateUnisonJiPitch: Pitch<T & { rational: true }>,
): candidateUnisonJiPitch is Pitch<T & { rational: true, direction: Direction.UNISON }> =>
    isMonzoUnison(candidateUnisonJiPitch.monzo)

export {
    isJiPitchSuper,
    isJiPitchSub,
    isJiPitchUnison,
}
