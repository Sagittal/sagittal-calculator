import { NumTypeParameters } from "../../../num"
import { RationalDecimal } from "../decimal"
import { computeRationalQuotientFromRationalDecimal } from "../quotient"
import { computeRationalMonzoFromRationalQuotient } from "./monzoFromQuotient"
import { RationalMonzo } from "./types"

// TODO: I want to better understand why we have both this and the IntegerDecimal one...
//  Okay, I think I get it, but maybe we should house both of them in the same module
const computeRationalMonzoFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: RationalDecimal<T>,
): RationalMonzo<T> => {
    const quotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalMonzoFromRationalQuotient(quotient) as RationalMonzo<T>
}

export {
    computeRationalMonzoFromRationalDecimal,
}
