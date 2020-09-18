import { isUndefined } from "../../code"
import {
    computeGpf,
    computeIsRoughMonzo,
    computeIsRoughRatio,
    computeIsSmoothMonzo,
    computeIsSmoothRatio,
    Integer,
    max,
    Max,
    Min,
    NumericTypeParameters,
    Prime,
    Primes,
    Roughness,
    Smoothness,
} from "../../math"
import { JiPitch } from "./types"

const computeIsWithinPrimeLimit = <S extends Primes, T extends NumericTypeParameters>(
    jiPitch: JiPitch<T>,
    primeLimit: S & Max<Prime>,
): jiPitch is JiPitch<T & { smooth: S }> => {
    const { monzo, ratio } = jiPitch

    return (!isUndefined(monzo) && computeIsSmoothMonzo(monzo, primeLimit as S & Integer as S & Smoothness)) ||
        (!isUndefined(ratio) && computeIsSmoothRatio(ratio, primeLimit as S & Integer as S & Smoothness))
}

const computeIsWithinPrimeMin = <S extends Primes, T extends NumericTypeParameters>(
    jiPitch: JiPitch<T>,
    primeMin: S & Min<Prime>,
): jiPitch is JiPitch<T & { rough: S }> => {
    const { monzo, ratio } = jiPitch

    return (!isUndefined(monzo) && computeIsRoughMonzo(monzo, primeMin as S & Integer as S & Roughness)) ||
        (!isUndefined(ratio) && computeIsRoughRatio(ratio, primeMin as S & Integer as S & Roughness))
}

// todo: test
const computePrimeLimit = <S extends Primes, T extends NumericTypeParameters>(
    { monzo, ratio }: JiPitch<T>,
): Max<Prime> => {
    if (!isUndefined(monzo)) {
        return computeGpf(monzo) as Max<Prime>
    }

    const [numerator, denominator] = ratio

    return max(computeGpf(numerator), computeGpf(denominator)) as Max<Prime>
}

export {
    computeIsWithinPrimeLimit,
    computeIsWithinPrimeMin,
    computePrimeLimit,
}
