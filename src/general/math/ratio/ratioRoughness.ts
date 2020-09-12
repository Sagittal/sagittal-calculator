import { computeIsRoughInteger, computeRoughInteger } from "../roughness"
import { NumericTypeParameters, Roughness } from "../types"
import { Ratio } from "./types"

const computeRoughRatio = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends NumericTypeParameters>(
    ratio: Ratio<Omit<T, "rough">>,
    roughness: S & Roughness,
): Ratio<T & { rough: S }> => {
    const [numerator, denominator] = ratio

    return [
        computeRoughInteger(numerator, roughness),
        computeRoughInteger(denominator, roughness),
    ] as Ratio<T & { rough: S }>
}

const computeIsRoughRatio = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends NumericTypeParameters>(
    ratio: Ratio<Omit<T, "rough">>,
    roughness: S & Roughness,
): ratio is Ratio<T & { rough: S }> => {
    const [numerator, denominator] = ratio

    return computeIsRoughInteger(numerator, roughness) && computeIsRoughInteger(denominator, roughness)
}

export {
    computeRoughRatio,
    computeIsRoughRatio,
}
