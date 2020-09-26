import { computeSuperNum, Num, numIsHigher, NumTypeParameters } from "../../../../general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

// but not necessarily a Comma, since it isn't necessarily rational.
// I don't like the use of a raw brand outside of a types module.
// perhaps the brand is just a comma size brand, not a comma brand.
const computeIsCommaSized = <T extends NumTypeParameters, U extends Num<T>>(
    candidateCommaSizedNum: U,
): candidateCommaSizedNum is Exclude<U, Num> & Num<T> & { _CommaBrand: boolean } =>
    numIsHigher(MAX_SIZE_CATEGORY_BOUND, computeSuperNum(candidateCommaSizedNum))

export {
    computeIsCommaSized,
}
