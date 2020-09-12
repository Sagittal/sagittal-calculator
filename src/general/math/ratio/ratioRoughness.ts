import { computeIsRoughInteger, computeRoughInteger } from "../roughness"
import { NumericTypeParameters, Roughness } from "../types"
import { Ratio } from "./types"

const computeIsRoughRatio = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends NumericTypeParameters>(
    // TODO: so this one can NOT be irrational, right, but I feel just as much a need to communicate that
    //  as I do in the other places to communicate that they potentially are. so should I just make an alias type
    //  that as it turns out can be the same thing as Ratio ?
    ratio: Ratio<T>,
    roughness: S & Roughness,
): ratio is Ratio<T & { rough: S }> => {
    const [numerator, denominator] = ratio

    return computeIsRoughInteger(numerator, roughness) && computeIsRoughInteger(denominator, roughness)
}

const computeRoughRatio = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends NumericTypeParameters>(
    ratio: Ratio<T>,
    roughness: S & Roughness,
): Ratio<T & { rough: S }> => {
    const [numerator, denominator] = ratio

    return [
        computeRoughInteger(numerator, roughness),
        computeRoughInteger(denominator, roughness),
    ] as Ratio<T & { rough: S }>
}

export {
    computeIsRoughRatio,
    computeRoughRatio,
}
