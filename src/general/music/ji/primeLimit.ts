import {
    computeRationalMonzoSmoothness,
    Decimal,
    isRoughRationalMonzo,
    isSmoothRationalMonzo,
    Max,
    Min,
    NumericProperties,
    Prime,
    Primes,
    Roughness,
    Smoothness,
} from "../../math"
import { Pitch } from "../pitch"

// I'm thinking that we don't keep any of the pass-through methods from music domain to math domain
// Except for prime (min) limit because we speak about it differently (vs mathematical roughness or smoothness).

const isWithinPrimeLimit = <S extends Primes, T extends NumericProperties>(
    candidateJiPitchWithinPrimeLimit: Pitch<T & { rational: true }>,
    primeLimit: S & Max<Prime<T>>,
): candidateJiPitchWithinPrimeLimit is Pitch<T & { rational: true, smooth: S }> => {
    const { monzo } = candidateJiPitchWithinPrimeLimit

    return isSmoothRationalMonzo(monzo, primeLimit as S & Decimal<{ integer: true }> as S & Smoothness)
}

const isWithinPrimeMin = <S extends Primes, T extends NumericProperties>(
    candidateJiPitchWithinPrimeMin: Pitch<T & { rational: true }>,
    primeMin: S & Min<Prime<T>>,
): candidateJiPitchWithinPrimeMin is Pitch<T & { rational: true, rough: S }> => {
    const { monzo } = candidateJiPitchWithinPrimeMin

    return isRoughRationalMonzo(monzo, primeMin as S & Decimal<{ integer: true }> as S & Roughness)
}

const computePrimeLimit = <S extends Primes, T extends NumericProperties>(
    { monzo }: Pitch<T & { rational: true }>,
): Max<Prime<T>> =>
    computeRationalMonzoSmoothness(monzo) as Decimal<{ integer: true }> as Max<Prime<T>>

export {
    isWithinPrimeLimit,
    isWithinPrimeMin,
    computePrimeLimit,
}
