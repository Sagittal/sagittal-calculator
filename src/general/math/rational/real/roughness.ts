import { isUndefined } from "../../../code"
import { computeRealFromRealOrDecimal, NumericProperties } from "../../real"
import { Primes, Roughness } from "../types"
import { IntegerDecimal, RationalDecimal } from "./decimal"
import { isRoughRationalMonzo } from "./monzo"
import { computeRationalQuotientFromRationalDecimal, isRoughRationalQuotient } from "./quotient"
import { Rational } from "./types"

const isRoughRational = <S extends Primes, T extends NumericProperties>(
    rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
    roughness: S & Roughness,
): rationalOrRationalDecimal is Rational<T & { rough: S }> | RationalDecimal<T & { rough: S }> => {
    const { monzo, quotient, decimal } = computeRealFromRealOrDecimal(rationalOrRationalDecimal)

    if (isUndefined(monzo) && isUndefined(quotient) && !isUndefined(decimal)) {
        return isRoughRationalQuotient(
            computeRationalQuotientFromRationalDecimal(decimal),
            roughness as S & IntegerDecimal as S & Roughness,
        )
    }

    return (!isUndefined(monzo) && isRoughRationalMonzo(monzo, roughness as S & IntegerDecimal as S & Roughness)) ||
        (!isUndefined(quotient) && isRoughRationalQuotient(quotient, roughness as S & IntegerDecimal as S & Roughness))
}

export {
    isRoughRational,
}
