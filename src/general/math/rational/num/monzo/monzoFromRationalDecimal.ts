import { NumTypeParameters } from "../../../num"
import { RationalDecimal } from "../decimal"
import { computeRationalQuotientFromRationalDecimal } from "../quotient"
import { computeRationalMonzoFromRationalQuotient } from "./monzoFromQuotient"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: RationalDecimal<T>,
): RationalMonzo<T> => {
    const quotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalMonzoFromRationalQuotient(quotient) as RationalMonzo<T>
}

export {
    computeRationalMonzoFromRationalDecimal,
}
