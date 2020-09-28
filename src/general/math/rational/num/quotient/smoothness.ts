import { NumTypeParameters } from "../../../num"
import { max } from "../../../typedOperations"
import { Primes, Smoothness } from "../../types"
import { computeIntegerDecimalSmoothness, isSmoothIntegerDecimal } from "../decimal"
import { RationalQuotient } from "./types"

const isSmoothRationalQuotient = <S extends Primes, T extends NumTypeParameters>(
    rationalQuotient: RationalQuotient<T>,
    smoothness: S & Smoothness,
): rationalQuotient is RationalQuotient<T & { smooth: S }> => {
    const [numerator, denominator] = rationalQuotient

    return isSmoothIntegerDecimal(numerator, smoothness) && isSmoothIntegerDecimal(denominator, smoothness)
}

const computeRationalQuotientSmoothness = (rationalQuotient: RationalQuotient): Smoothness => {
    const [numerator, denominator] = rationalQuotient

    return max(
        computeIntegerDecimalSmoothness(numerator),
        computeIntegerDecimalSmoothness(denominator),
    ) as Smoothness
}

export {
    isSmoothRationalQuotient,
    computeRationalQuotientSmoothness,
}
