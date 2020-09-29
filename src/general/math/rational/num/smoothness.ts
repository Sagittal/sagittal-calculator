import { isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { computeNumFromNumOrDecimal, NumTypeParameters } from "../../num"
import { Primes, Smoothness } from "../types"
import { computeRationalDecimalSmoothness, IntegerDecimal, RationalDecimal } from "./decimal"
import { computeRationalMonzoSmoothness, isSmoothRationalMonzo } from "./monzo"
import {
    computeRationalQuotientFromRationalDecimal,
    computeRationalQuotientSmoothness,
    isSmoothRationalQuotient,
} from "./quotient"
import { Ratio } from "./types"

const isSmoothRatio = <S extends Primes, T extends NumTypeParameters>(
    ratioOrRationalDecimal: Ratio<T> | RationalDecimal<T>,
    smoothness: S & Smoothness,
): ratioOrRationalDecimal is Ratio<T & { smooth: S }> | RationalDecimal<T & { smooth: S }> => {
    const ratio = computeNumFromNumOrDecimal(ratioOrRationalDecimal)

    let { monzo, quotient, decimal } = ratio

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

const computeRatioSmoothness = <S extends Primes, T extends NumTypeParameters>(
    ratioOrRationalDecimal: Ratio<T> | RationalDecimal<T>,
): Smoothness => {
    const ratio = computeNumFromNumOrDecimal(ratioOrRationalDecimal)

    const { monzo, quotient, decimal } = ratio

    if (!isUndefined(monzo)) {
        return computeRationalMonzoSmoothness(monzo)
    } else if (!isUndefined(quotient)) {
        return computeRationalQuotientSmoothness(quotient)
    } else if (!isUndefined(decimal)) {
        return computeRationalDecimalSmoothness(decimal)
    } else {
        throw new Error(`Tried to check smoothness of ratio ${formatNum(ratio)} and ${formatNum(ratio)} but the latter lacked any numeric representations.`)
    }
}

export {
    isSmoothRatio,
    computeRatioSmoothness,
}
