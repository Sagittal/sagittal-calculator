import { isUndefined } from "../code"
import { computeIsSmoothMonzo, computeIsSmoothRatio, NumericTypeParameters, Primes, Smoothness } from "../math"
import { JiPitch } from "./types"

const computeIsSmoothJiPitch = <S extends Primes, T extends NumericTypeParameters>(
    jiPitch: JiPitch<T>,
    smoothness: S & Smoothness,
): jiPitch is JiPitch<T & { smooth: S }> => {
    const { monzo, ratio } = jiPitch

    return (!isUndefined(monzo) && computeIsSmoothMonzo(monzo, smoothness)) ||
        (!isUndefined(ratio) && computeIsSmoothRatio(ratio, smoothness))
}

export {
    computeIsSmoothJiPitch,
}
