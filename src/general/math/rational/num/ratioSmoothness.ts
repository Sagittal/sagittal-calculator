import { isUndefined } from "../../../code"
import { NumTypeParameters } from "../../num"
import { max } from "../../typedOperations"
import { computeGpf } from "../gpf"
import { Primes, Smoothness } from "../types"
import { IntegerDecimal } from "./decimal"
import { isSmoothRationalMonzo } from "./monzo"
import { computeRationalQuotientFromRationalDecimal, isSmoothRationalQuotient } from "./quotient"
import { Ratio } from "./types"

const isSmoothRatio = <S extends Primes, T extends NumTypeParameters>(
    ratio: Ratio<T>,
    smoothness: S & Smoothness,
): ratio is Ratio<T & { smooth: S }> => {
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
    { monzo, quotient, decimal }: Ratio<T>,
): Smoothness => {
    if (!isUndefined(monzo)) {
        return computeGpf(monzo) as Smoothness
    }

    if (isUndefined(quotient) && !isUndefined(decimal)) {
        quotient = computeRationalQuotientFromRationalDecimal(decimal)
    }

    const [numerator, denominator] = quotient

    return max(computeGpf(numerator), computeGpf(denominator)) as Smoothness
}

export {
    isSmoothRatio,
    computeRatioSmoothness,
}
