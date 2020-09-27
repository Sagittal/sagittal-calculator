import {
    computeLowestTermsRatio,
    computeMonzoFromRatio,
    isRationalRatio,
    isSubRatio,
    NumTypeParameters,
    Ratio,
} from "../../math"
import { TwoThreeFreeClass } from "../../music"
import { Io } from "../types"
import { parseRatio } from "./ratio"

const parse23FreeClass = <T extends NumTypeParameters>(twoThreeFreeClassIo: Io): TwoThreeFreeClass<T> => {
    const twoThreeFreeRatio = parseRatio(twoThreeFreeClassIo)

    if (!isRationalRatio(twoThreeFreeRatio)) {
        throw new Error(`2,3-free classes must be rational. Attempted to parse ratio to ${twoThreeFreeRatio}`)
    }
    // TODO: completely different ordering in "ratio is rational" and "is super ratio"; standardize
    if (isSubRatio(twoThreeFreeRatio)) {
        throw new Error(`2,3-free classes cannot be sub. Attempted to parse ratio to ${twoThreeFreeRatio}`)
    }

    const reducedTwoThreeFreeRatio = computeLowestTermsRatio(twoThreeFreeRatio)

    return {
        monzo: computeMonzoFromRatio(reducedTwoThreeFreeRatio as Ratio<T>),
    } as TwoThreeFreeClass<T>
}

export {
    parse23FreeClass,
}
