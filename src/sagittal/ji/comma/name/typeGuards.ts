import { computeSuperNum, Num, numIsHigher, NumTypeParameters } from "../../../../general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

const computeIsCommaSized = <T extends NumTypeParameters, U extends Num<T>>(
    pitch: U,
): pitch is Exclude<U, Num> & Num<T> & { _CommaBrand: boolean } =>
    numIsHigher(MAX_SIZE_CATEGORY_BOUND, computeSuperNum(pitch))

export {
    computeIsCommaSized,
}
