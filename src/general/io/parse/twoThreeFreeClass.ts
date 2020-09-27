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
        throw new Error(`Attempted to parse ${twoThreeFreeClassIo} to a 2,3-free class, but they must be rational`)
    }
    if (isSubRatio(twoThreeFreeRatio)) {
        throw new Error(`Attempted to parse ${twoThreeFreeClassIo} to a 2,3-free class, but they must be sub.`)
    }

    const reducedTwoThreeFreeRatio = computeLowestTermsRatio(twoThreeFreeRatio)

    return {
        monzo: computeMonzoFromRatio(reducedTwoThreeFreeRatio as Ratio<T>),
    } as TwoThreeFreeClass<T>
}

export {
    parse23FreeClass,
}
