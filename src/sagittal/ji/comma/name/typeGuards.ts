import { computeSuperNum, Num, numIsHigher, NumTypeParameters } from "../../../../general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

// But not necessarily a Comma, since it isn't necessarily rational.
// I don't like the use of a raw brand outside of a types module.
// Perhaps the brand is just a comma size brand, not a comma brand.
const isCommaSized = <T extends NumTypeParameters, U extends Num<T>>(
    candidateCommaSizedPitch: U,
): candidateCommaSizedPitch is Exclude<U, Num> & Num<T> & { _CommaBrand: boolean } =>
    numIsHigher(MAX_SIZE_CATEGORY_BOUND, computeSuperNum(candidateCommaSizedPitch))

export {
    isCommaSized,
}
