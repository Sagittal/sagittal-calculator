import { isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { computeNumFromNumParameter, NumTypeParameters } from "../../num"
import { Primes, Smoothness } from "../types"
import { computeRationalDecimalSmoothness, IntegerDecimal } from "./decimal"
import { computeRationalMonzoSmoothness, isSmoothRationalMonzo } from "./monzo"
import {
    computeRationalQuotientFromRationalDecimal,
    computeRationalQuotientSmoothness,
    isSmoothRationalQuotient,
} from "./quotient"
import { Ratio, RatioOrRationalDecimal } from "./types"

const isSmoothRatio = <S extends Primes, T extends NumTypeParameters>(
    ratioOrRationalDecimal: RatioOrRationalDecimal<T>,
    smoothness: S & Smoothness,
): ratioOrRationalDecimal is RatioOrRationalDecimal<T & { smooth: S }> => {
    const ratio = computeNumFromNumParameter(ratioOrRationalDecimal)

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
    ratioOrRationalDecimal: RatioOrRationalDecimal<T>,
): Smoothness => {
    const ratio = computeNumFromNumParameter(ratioOrRationalDecimal)

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
