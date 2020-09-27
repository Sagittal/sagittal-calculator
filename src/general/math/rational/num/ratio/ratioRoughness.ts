import { NumTypeParameters } from "../../../num"
import { computeRoughInteger, isRoughInteger } from "../../roughness"
import { Primes, Roughness } from "../../types"
import { RationalRatio } from "./types"

const computeRoughRationalRatio = <S extends Primes, T extends NumTypeParameters>(
    rationalRatio: RationalRatio<T>,
    roughness: S & Roughness,
): RationalRatio<T & { rough: S }> => {
    const [numerator, denominator] = rationalRatio

    return [
        computeRoughInteger(numerator, roughness),
        computeRoughInteger(denominator, roughness),
    ] as RationalRatio<T & { rough: S }>
}

const isRoughRationalRatio = <S extends Primes, T extends NumTypeParameters>(
    candidateRoughRationalRatio: RationalRatio<T>,
    roughness: S & Roughness,
): candidateRoughRationalRatio is RationalRatio<T & { rough: S }> => {
    const [numerator, denominator] = candidateRoughRationalRatio

    return isRoughInteger(numerator, roughness) && isRoughInteger(denominator, roughness)
}

export {
    computeRoughRationalRatio,
    isRoughRationalRatio,
}
