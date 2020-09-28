import { NumTypeParameters } from "../../../num"
import { computeRoughInteger, isRoughInteger } from "../../roughness"
import { Primes, Roughness } from "../../types"
import { RationalQuotient } from "./types"

const computeRoughRationalQuotient = <S extends Primes, T extends NumTypeParameters>(
    rationalQuotient: RationalQuotient<T>,
    roughness: S & Roughness,
): RationalQuotient<T & { rough: S }> => {
    const [numerator, denominator] = rationalQuotient

    return [
        computeRoughInteger(numerator, roughness),
        computeRoughInteger(denominator, roughness),
    ] as RationalQuotient<T & { rough: S }>
}

const isRoughRationalQuotient = <S extends Primes, T extends NumTypeParameters>(
    candidateRoughRationalQuotient: RationalQuotient<T>,
    roughness: S & Roughness,
): candidateRoughRationalQuotient is RationalQuotient<T & { rough: S }> => {
    const [numerator, denominator] = candidateRoughRationalQuotient

    return isRoughInteger(numerator, roughness) && isRoughInteger(denominator, roughness)
}

export {
    computeRoughRationalQuotient,
    isRoughRationalQuotient,
}
