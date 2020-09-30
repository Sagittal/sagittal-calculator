import { isUndefined } from "../../../code"
import { formatReal } from "../../../io"
import { computeRealFromRealOrDecimal, NumericProperties } from "../../real"
import { Primes, Smoothness } from "../types"
import { computeRationalDecimalSmoothness, IntegerDecimal, RationalDecimal } from "./decimal"
import { computeRationalMonzoSmoothness, isSmoothRationalMonzo } from "./monzo"
import {
    computeRationalQuotientFromRationalDecimal,
    computeRationalQuotientSmoothness,
    isSmoothRationalQuotient,
} from "./quotient"
import { Rational } from "./types"

const isSmoothRational = <S extends Primes, T extends NumericProperties>(
    rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
    smoothness: S & Smoothness,
): rationalOrRationalDecimal is Rational<T & { smooth: S }> | RationalDecimal<T & { smooth: S }> => {
    const { monzo, quotient, decimal } = computeRealFromRealOrDecimal(rationalOrRationalDecimal)
    
    if (isUndefined(monzo) && isUndefined(quotient) && !isUndefined(decimal)) {
        return isSmoothRationalQuotient(
            computeRationalQuotientFromRationalDecimal(decimal),
            smoothness as S & IntegerDecimal as S & Smoothness,
        )
    }

    return (
            !isUndefined(monzo) &&
            isSmoothRationalMonzo(monzo, smoothness as S & IntegerDecimal as S & Smoothness)
        ) ||
        (
            !isUndefined(quotient) &&
            isSmoothRationalQuotient(quotient, smoothness as S & IntegerDecimal as S & Smoothness)
        )
}

const computeRationalSmoothness = <S extends Primes, T extends NumericProperties>(
    rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
): Smoothness => {
    const { monzo, quotient, decimal } = computeRealFromRealOrDecimal(rationalOrRationalDecimal)
    
    if (!isUndefined(monzo)) {
        return computeRationalMonzoSmoothness(monzo)
    } else if (!isUndefined(quotient)) {
        return computeRationalQuotientSmoothness(quotient)
    } else if (!isUndefined(decimal)) {
        return computeRationalDecimalSmoothness(decimal)
    } else {
        throw new Error(`Tried to check smoothness of rational ${formatReal(rationalOrRationalDecimal)} but the latter lacked any numeric representations.`)
    }
}

export {
    isSmoothRational,
    computeRationalSmoothness,
}
