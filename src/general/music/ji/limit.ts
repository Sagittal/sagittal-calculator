import { isUndefined } from "../../code"
import {
    computeIsRoughMonzo,
    computeIsRoughRatio,
    computeIsSmoothMonzo,
    computeIsSmoothRatio,
    Integer,
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
    limit: S & Max<Prime>,
): jiPitch is JiPitch<T & { smooth: S }> => {
    const { monzo, ratio } = jiPitch

    return (!isUndefined(monzo) && computeIsSmoothMonzo(monzo, limit as S & Integer as S & Smoothness)) ||
        (!isUndefined(ratio) && computeIsSmoothRatio(ratio, limit as S & Integer as S & Smoothness))
}

const computeIsWithinPrimeMin = <S extends Primes, T extends NumericTypeParameters>(
    jiPitch: JiPitch<T>,
    minLimit: S & Min<Prime>,
): jiPitch is JiPitch<T & { rough: S }> => {
    const { monzo, ratio } = jiPitch

    return (!isUndefined(monzo) && computeIsRoughMonzo(monzo, minLimit as S & Integer as S & Roughness)) ||
        (!isUndefined(ratio) && computeIsRoughRatio(ratio, minLimit as S & Integer as S & Roughness))
}

export {
    computeIsWithinPrimeLimit,
    computeIsWithinPrimeMin,
}
