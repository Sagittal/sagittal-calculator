import {
    computeLowestTermsRationalQuotient,
    computeRationalMonzoFromRationalQuotient,
    isRationalQuotient,
    isSubQuotient,
    NumericProperties,
} from "../../math"
import { Two3FreeClass } from "../../music"
import { Io } from "../types"
import { parseQuotient } from "./quotient"

const parse23FreeClass = <T extends NumericProperties>(two3FreeClassIo: Io): Two3FreeClass<T> => {
    const two3FreeQuotient = parseQuotient(two3FreeClassIo)

    if (!isRationalQuotient(two3FreeQuotient)) {
        throw new Error(`Attempted to parse ${two3FreeClassIo} to a 2,3-free class, but they must be rational`)
    }
    if (isSubQuotient(two3FreeQuotient)) {
        throw new Error(`Attempted to parse ${two3FreeClassIo} to a 2,3-free class, but they must be sub.`)
    }

    const reducedTwo3FreeQuotient = computeLowestTermsRationalQuotient(two3FreeQuotient)

    return {
        monzo: computeRationalMonzoFromRationalQuotient(reducedTwo3FreeQuotient),
    } as Two3FreeClass<T>
}

export {
    parse23FreeClass,
}
