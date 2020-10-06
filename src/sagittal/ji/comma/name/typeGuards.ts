import { computeSuperPitch, NumericProperties, Pitch, pitchIsHigher } from "../../../../general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

// But not necessarily a Comma, since it isn't necessarily rational.
// I don't like the use of a raw brand outside of a types module.
// Perhaps the brand is just a comma size brand, not a comma brand.
const isCommaSized = <T extends NumericProperties, U extends Pitch<T>>(
    candidateCommaSizedPitch: U,
): candidateCommaSizedPitch is Exclude<U, Pitch> & Pitch<T> & { _CommaBrand: boolean } =>
    pitchIsHigher(MAX_SIZE_CATEGORY_BOUND.pitch, computeSuperPitch(candidateCommaSizedPitch))

export {
    isCommaSized,
}
