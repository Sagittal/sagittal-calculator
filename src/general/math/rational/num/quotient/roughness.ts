import { NumTypeParameters } from "../../../num"
import { Primes, Roughness } from "../../types"
import { computeRoughIntegerDecimal, isRoughIntegerDecimal } from "../decimal"
import { RationalQuotient } from "./types"

const computeRoughRationalQuotient = <S extends Primes, T extends NumTypeParameters>(
    rationalQuotient: RationalQuotient<T>,
    roughness: S & Roughness,
): RationalQuotient<T & { rough: S }> => {
    const [numerator, denominator] = rationalQuotient

    return [
        computeRoughIntegerDecimal(numerator, roughness),
        computeRoughIntegerDecimal(denominator, roughness),
    ] as RationalQuotient<T & { rough: S }>
}

const isRoughRationalQuotient = <S extends Primes, T extends NumTypeParameters>(
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
