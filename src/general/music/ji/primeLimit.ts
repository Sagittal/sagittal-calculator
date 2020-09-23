import {
    computeIsRoughRational,
    computeIsSmoothRational,
    computeRationalSmoothness,
    Integer,
    Max,
    Min,
    Prime,
    Primes,
    RationalTypeParameters,
    Roughness,
    Smoothness,
} from "../../math"
import { JiPitch } from "./types"

const computeIsWithinPrimeLimit = <S extends Primes, T extends RationalTypeParameters>(
    jiPitch: JiPitch<T>,
    primeLimit: S & Max<Prime>,
): jiPitch is JiPitch<T & { smooth: S }> => {
    return computeIsSmoothRational(jiPitch, primeLimit as S as S & Smoothness)
}

const computeIsWithinPrimeMin = <S extends Primes, T extends RationalTypeParameters>(
    jiPitch: JiPitch<T>,
    primeMin: S & Min<Prime>,
): jiPitch is JiPitch<T & { rough: S }> => {
    return computeIsRoughRational(jiPitch, primeMin as S as S & Roughness)
}

const computePrimeLimit = <S extends Primes, T extends RationalTypeParameters>(
    jiPitch: JiPitch<T>,
): Max<Prime> => {
    return computeRationalSmoothness(jiPitch) as Integer as Max<Prime>
}

export {
    computeIsWithinPrimeLimit,
    computeIsWithinPrimeMin,
    computePrimeLimit,
}
