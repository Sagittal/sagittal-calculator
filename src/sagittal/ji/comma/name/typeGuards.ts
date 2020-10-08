import { computeSuperPitch, isPitchHigher, NumericProperties, Pitch } from "../../../../general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

// But not necessarily a Comma, since it isn't necessarily rational.
// I don't like the use of a raw brand outside of a types module.
// Perhaps the brand is just a comma size brand, not a comma brand.
const isCommaSized = <T extends NumericProperties>(
    candidateCommaSizedPitch: Pitch<T>,
): candidateCommaSizedPitch is Pitch<T> & { _CommaBrand: boolean } =>
    isPitchHigher(MAX_SIZE_CATEGORY_BOUND.pitch, computeSuperPitch(candidateCommaSizedPitch))

export {
    isCommaSized,
}
