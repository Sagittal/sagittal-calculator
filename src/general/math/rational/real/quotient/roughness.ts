import { NumericProperties } from "../../../real"
import { Primes, Roughness } from "../../types"
import { computeRoughIntegerDecimal, isRoughIntegerDecimal } from "../decimal"
import { RationalQuotient } from "./types"

const computeRoughRationalQuotient = <S extends Primes, T extends NumericProperties>(
    rationalQuotient: RationalQuotient<T>,
    roughness: S & Roughness,
): RationalQuotient<T & { rough: S }> => {
    const [numerator, denominator] = rationalQuotient

    return [
        computeRoughIntegerDecimal(numerator, roughness),
        computeRoughIntegerDecimal(denominator, roughness),
    ] as RationalQuotient<T & { rough: S }>
}

const isRoughRationalQuotient = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalQuotient: RationalQuotient<T>,
    roughness: S & Roughness,
): candidateRoughRationalQuotient is RationalQuotient<T & { rough: S }> => {
    const [numerator, denominator] = candidateRoughRationalQuotient

    return isRoughIntegerDecimal(numerator, roughness) && isRoughIntegerDecimal(denominator, roughness)
}

export {
    computeRoughRationalQuotient,
    isRoughRationalQuotient,
}
