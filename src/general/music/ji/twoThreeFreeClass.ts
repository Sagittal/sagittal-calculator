import { isUndefined } from "../../code"
import {
    computeDecimalFromQuotient,
    computeRationalQuotientFromRationalDecimal,
    computeRoughRationalMonzo,
    computeRoughRationalQuotient,
    computeSuperMonzo,
    computeSuperQuotient,
    FIVE_ROUGHNESS,
    isInteger,
    NumTypeParameters,
    RationalNum,
} from "../../math"
import { TwoThreeFreeClass } from "./types"

const compute23FreeClass = <T extends NumTypeParameters>(
    { monzo, quotient, decimal }: RationalNum<T>,
): TwoThreeFreeClass<T> => {
    const twoThreeFreeClass = {} as TwoThreeFreeClass

    if (!isUndefined(monzo)) {
        const twoThreeFreeMonzo = computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS)
        twoThreeFreeClass.monzo = computeSuperMonzo(twoThreeFreeMonzo)
    }

    if (!isUndefined(quotient)) {
        const twoThreeFreeQuotient = computeRoughRationalQuotient(quotient, FIVE_ROUGHNESS)
        twoThreeFreeClass.quotient = computeSuperQuotient(twoThreeFreeQuotient)
    }

    if (!isUndefined(decimal)) {
        const quotient = computeRationalQuotientFromRationalDecimal(decimal)
        const twoThreeFreeQuotient = computeRoughRationalQuotient(quotient, FIVE_ROUGHNESS)
        const super23FreeQuotient = computeSuperQuotient(twoThreeFreeQuotient)
        const super23FreeDecimal = computeDecimalFromQuotient(super23FreeQuotient)

        if (!isInteger(super23FreeDecimal)) {
            throw new Error("Cannot safely represent a 2,3-free class (or JI in general) as a decimal which is not an integer.")
        }
        twoThreeFreeClass.decimal = super23FreeDecimal
    }

    return twoThreeFreeClass as TwoThreeFreeClass<T>
}

export {
    compute23FreeClass,
}
