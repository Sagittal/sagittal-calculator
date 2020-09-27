import { NumTypeParameters, Ratio } from "../../../num"
import { computeRoughInteger, isRoughInteger } from "../../roughness"
import { Primes, Roughness } from "../../types"

const computeRoughRatio = <S extends Primes, T extends NumTypeParameters>(
    ratio: Ratio<T>,
    roughness: S & Roughness,
): Ratio<T & { rough: S }> => {
    const [numerator, denominator] = ratio

    return [
        computeRoughInteger(numerator, roughness),
        computeRoughInteger(denominator, roughness),
    ] as Ratio<T & { rough: S }>
}

const isRoughRatio = <S extends Primes, T extends NumTypeParameters>(
    ratio: Ratio<T>,
    roughness: S & Roughness,
): ratio is Ratio<T & { rough: S }> => {
    const [numerator, denominator] = ratio

    return isRoughInteger(numerator, roughness) && isRoughInteger(denominator, roughness)
}

export {
    computeRoughRatio,
    isRoughRatio,
}
