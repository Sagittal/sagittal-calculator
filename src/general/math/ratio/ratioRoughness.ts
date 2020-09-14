import { computeIsRoughInteger, computeRoughInteger } from "../roughness"
import { IntegerTypeParameters, Primes, Roughness } from "../types"
import { Ratio } from "./types"

const computeRoughRatio = <S extends Primes, T extends IntegerTypeParameters>(
    ratio: Ratio<T>,
    roughness: S & Roughness,
): Ratio<T & { rough: S }> => {
    const [numerator, denominator] = ratio

    return [
        computeRoughInteger(numerator, roughness),
        computeRoughInteger(denominator, roughness),
    ] as Ratio<T & { rough: S }>
}

const computeIsRoughRatio = <S extends Primes, T extends IntegerTypeParameters>(
    ratio: Ratio<T>,
    roughness: S & Roughness,
): ratio is Ratio<T & { rough: S }> => {
    const [numerator, denominator] = ratio

    return computeIsRoughInteger(numerator, roughness) && computeIsRoughInteger(denominator, roughness)
}

export {
    computeRoughRatio,
    computeIsRoughRatio,
}
