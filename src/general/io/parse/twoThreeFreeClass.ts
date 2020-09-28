import {
    computeLowestTermsRationalQuotient,
    computeRationalMonzoFromRationalQuotient,
    isRationalQuotient,
    isSubQuotient,
    NumTypeParameters,
} from "../../math"
import { TwoThreeFreeClass } from "../../music"
import { Io } from "../types"
import { parseQuotient } from "./quotient"

const parse23FreeClass = <T extends NumTypeParameters>(twoThreeFreeClassIo: Io): TwoThreeFreeClass<T> => {
    const twoThreeFreeQuotient = parseQuotient(twoThreeFreeClassIo)

    if (!isRationalQuotient(twoThreeFreeQuotient)) {
        throw new Error(`Attempted to parse ${twoThreeFreeClassIo} to a 2,3-free class, but they must be rational`)
    }
    if (isSubQuotient(twoThreeFreeQuotient)) {
        throw new Error(`Attempted to parse ${twoThreeFreeClassIo} to a 2,3-free class, but they must be sub.`)
    }

    const reducedTwoThreeFreeQuotient = computeLowestTermsRationalQuotient(twoThreeFreeQuotient)

    return {
        monzo: computeRationalMonzoFromRationalQuotient(reducedTwoThreeFreeQuotient),
    } as TwoThreeFreeClass<T>
}

export {
    parse23FreeClass,
}
