import { computeSuperReal, NumericProperties, Real, realIsHigher } from "../../../../general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

// But not necessarily a Comma, since it isn't necessarily rational.
// I don't like the use of a raw brand outside of a types module.
// Perhaps the brand is just a comma size brand, not a comma brand.
const isCommaSized = <T extends NumericProperties, U extends Real<T>>(
    candidateCommaSizedPitch: U,
): candidateCommaSizedPitch is Exclude<U, Real> & Real<T> & { _CommaBrand: boolean } =>
    realIsHigher(MAX_SIZE_CATEGORY_BOUND, computeSuperReal(candidateCommaSizedPitch))

export {
    isCommaSized,
}
