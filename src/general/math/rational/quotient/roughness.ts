import { NumericProperties, Quotient } from "../../numeric"
import { computeRoughIntegerDecimal, isRoughIntegerDecimal } from "../decimal"
import { Primes, Roughness } from "../types"

const computeRoughRationalQuotient = <S extends Primes, T extends NumericProperties>(
    [numerator, denominator]: Quotient<T & { rational: true }>,
    roughness: S & Roughness,
): Quotient<T & { rational: true, rough: S, direction: undefined }> =>
// @ts-ignore
    ([computeRoughIntegerDecimal(numerator, roughness), computeRoughIntegerDecimal(denominator, roughness)])

const isRoughRationalQuotient = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalQuotient: Quotient<T & { rational: true }>,
    roughness: S & Roughness,
): candidateRoughRationalQuotient is Quotient<T & { rational: true, rough: S }> => {
    const [numerator, denominator] = candidateRoughRationalQuotient

    return isRoughIntegerDecimal(numerator, roughness) && isRoughIntegerDecimal(denominator, roughness)
}

export {
    computeRoughRationalQuotient,
    isRoughRationalQuotient,
}
