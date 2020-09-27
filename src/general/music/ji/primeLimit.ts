import {
    computeRationalNumSmoothness,
    Integer,
    isRoughRationalNum,
    isSmoothRationalNum,
    Max,
    Min,
    NumTypeParameters,
    Prime,
    Primes,
    RationalNum,
    Roughness,
    Smoothness,
} from "../../math"

// I'm thinking that we don't keep any of the pass-through methods from Pitch to Num
// Except for prime limit because we speak about it differently (vs mathematical roughness or smoothness).

const isWithinPrimeLimit = <S extends Primes, T extends NumTypeParameters>(
    candidateJiPitchWithinPrimeLimit: RationalNum<T>,
    primeLimit: S & Max<Prime>,
): candidateJiPitchWithinPrimeLimit is RationalNum<T & { smooth: S }> => {
    return isSmoothRationalNum(candidateJiPitchWithinPrimeLimit, primeLimit as S as S & Smoothness)
}

const isWithinPrimeMin = <S extends Primes, T extends NumTypeParameters>(
    candidateJiPitchWithinPrimeMin: RationalNum<T>,
    primeMin: S & Min<Prime>,
): candidateJiPitchWithinPrimeMin is RationalNum<T & { rough: S }> => {
    return isRoughRationalNum(candidateJiPitchWithinPrimeMin, primeMin as S as S & Roughness)
}

const computePrimeLimit = <S extends Primes, T extends NumTypeParameters>(
    jiPitch: RationalNum<T>,
): Max<Prime> => {
    return computeRationalNumSmoothness(jiPitch) as Integer as Max<Prime>
}

export {
    isWithinPrimeLimit,
    isWithinPrimeMin,
    computePrimeLimit,
}
