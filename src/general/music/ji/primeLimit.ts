import {
    computeRatioSmoothness,
    IntegerDecimal,
    isRoughRatio,
    isSmoothRatio,
    Max,
    Min,
    NumTypeParameters,
    Prime,
    Primes,
    Ratio,
    Roughness,
    Smoothness,
} from "../../math"

// I'm thinking that we don't keep any of the pass-through methods from Pitch to Num
// Except for prime limit because we speak about it differently (vs mathematical roughness or smoothness).

const isWithinPrimeLimit = <S extends Primes, T extends NumTypeParameters>(
    candidateJiPitchWithinPrimeLimit: Ratio<T>,
    primeLimit: S & Max<Prime<T>>,
): candidateJiPitchWithinPrimeLimit is Ratio<T & { smooth: S }> => {
    return isSmoothRatio(candidateJiPitchWithinPrimeLimit, primeLimit as S as S & Smoothness)
}

const isWithinPrimeMin = <S extends Primes, T extends NumTypeParameters>(
    candidateJiPitchWithinPrimeMin: Ratio<T>,
    primeMin: S & Min<Prime<T>>,
): candidateJiPitchWithinPrimeMin is Ratio<T & { rough: S }> => {
    return isRoughRatio(candidateJiPitchWithinPrimeMin, primeMin as S as S & Roughness)
}

const computePrimeLimit = <S extends Primes, T extends NumTypeParameters>(
    jiPitch: Ratio<T>,
): Max<Prime<T>> => {
    return computeRatioSmoothness(jiPitch) as IntegerDecimal as Max<Prime<T>>
}

export {
    isWithinPrimeLimit,
    isWithinPrimeMin,
    computePrimeLimit,
}
