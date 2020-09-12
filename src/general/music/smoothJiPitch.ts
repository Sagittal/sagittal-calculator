import { isUndefined } from "../code"
import { computeIsSmoothMonzo, computeIsSmoothRatio, NumericTypeParameters, Smoothness } from "../math"
import { JiPitch } from "./types"

const computeIsSmoothJiPitch = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends NumericTypeParameters>(
    jiPitch: JiPitch<T>,
    smoothness: S & Smoothness
): jiPitch is JiPitch<T & { smooth: S }> => {
    const { monzo, ratio } = jiPitch

    return (!isUndefined(monzo) && computeIsSmoothMonzo(monzo, smoothness)) ||
        (!isUndefined(ratio) && computeIsSmoothRatio(ratio, smoothness))
}

export {
    computeIsSmoothJiPitch,
}
