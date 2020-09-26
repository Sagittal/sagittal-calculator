import {
    computeIsRoughRationalNum,
    computeIsSmoothRational,
    computeRationalNumSmoothness,
    Integer,
    Max,
    Min,
    Prime,
    Primes,
    RationalNum,
    RationalNumTypeParameters,
    Roughness,
    Smoothness,
} from "../../math"

// I'm thinking that we don't keep any of the pass-through methods from Pitch to Num
// except for prime limit because we speak about it differently (vs mathematical roughness or smoothness).

const computeIsWithinPrimeLimit = <S extends Primes, T extends RationalNumTypeParameters>(
    jiPitch: RationalNum<T>,
    primeLimit: S & Max<Prime>,
): jiPitch is RationalNum<T & { smooth: S }> => {
    return computeIsSmoothRational(jiPitch, primeLimit as S as S & Smoothness)
}

const computeIsWithinPrimeMin = <S extends Primes, T extends RationalNumTypeParameters>(
    jiPitch: RationalNum<T>,
    primeMin: S & Min<Prime>,
): jiPitch is RationalNum<T & { rough: S }> => {
    return computeIsRoughRationalNum(jiPitch, primeMin as S as S & Roughness)
}

const computePrimeLimit = <S extends Primes, T extends RationalNumTypeParameters>(
    jiPitch: RationalNum<T>,
): Max<Prime> => {
    return computeRationalNumSmoothness(jiPitch) as Integer as Max<Prime>
}

export {
    computeIsWithinPrimeLimit,
    computeIsWithinPrimeMin,
    computePrimeLimit,
}
