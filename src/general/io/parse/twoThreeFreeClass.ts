import {
    computeLowestTermsRationalRatio,
    computeRationalMonzoFromRationalRatio,
    isRationalRatio,
    isSubRatio,
    NumTypeParameters,
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

    const reducedTwoThreeFreeRatio = computeLowestTermsRationalRatio(twoThreeFreeRatio)

    return {
        monzo: computeRationalMonzoFromRationalRatio(reducedTwoThreeFreeRatio),
    } as TwoThreeFreeClass<T>
}

export {
    parse23FreeClass,
}
