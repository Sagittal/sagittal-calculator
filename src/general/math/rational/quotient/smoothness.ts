import { NumericProperties, Quotient } from "../../numeric"
import { max } from "../../typedOperations"
import { computeIntegerDecimalSmoothness, isSmoothIntegerDecimal } from "../decimal"
import { Primes, Smoothness } from "../types"

const isSmoothRationalQuotient = <S extends Primes, T extends NumericProperties>(
    rationalQuotient: Quotient<T & { rational: true }>,
    smoothness: S & Smoothness,
): rationalQuotient is Quotient<T & { rational: true, smooth: S }> => {
    const [numerator, denominator] = rationalQuotient

    return isSmoothIntegerDecimal(numerator, smoothness) && isSmoothIntegerDecimal(denominator, smoothness)
}

const computeRationalQuotientSmoothness = (rationalQuotient: Quotient<{ rational: true }>): Smoothness => {
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
