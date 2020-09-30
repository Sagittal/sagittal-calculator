import {
    computeRationalSmoothness,
    IntegerDecimal,
    isRoughRational,
    isSmoothRational,
    Max,
    Min,
    NumericProperties,
    Prime,
    Primes,
    Rational,
    Roughness,
    Smoothness,
} from "../../math"

// I'm thinking that we don't keep any of the pass-through methods from Pitch to Real
// Except for prime limit because we speak about it differently (vs mathematical roughness or smoothness).

const isWithinPrimeLimit = <S extends Primes, T extends NumericProperties>(
    candidateJiPitchWithinPrimeLimit: Rational<T>,
    primeLimit: S & Max<Prime<T>>,
): candidateJiPitchWithinPrimeLimit is Rational<T & { smooth: S }> => {
    return isSmoothRational(candidateJiPitchWithinPrimeLimit, primeLimit as S as S & Smoothness)
}

const isWithinPrimeMin = <S extends Primes, T extends NumericProperties>(
    candidateJiPitchWithinPrimeMin: Rational<T>,
    primeMin: S & Min<Prime<T>>,
): candidateJiPitchWithinPrimeMin is Rational<T & { rough: S }> => {
    return isRoughRational(candidateJiPitchWithinPrimeMin, primeMin as S as S & Roughness)
}

const computePrimeLimit = <S extends Primes, T extends NumericProperties>(
    jiPitch: Rational<T>,
): Max<Prime<T>> => {
    return computeRationalSmoothness(jiPitch) as IntegerDecimal as Max<Prime<T>>
}

export {
    isWithinPrimeLimit,
    isWithinPrimeMin,
    computePrimeLimit,
}
