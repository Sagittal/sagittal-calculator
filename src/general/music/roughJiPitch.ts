import { isUndefined } from "../code"
import { computeIsRoughMonzo, computeIsRoughRatio, NumericTypeParameters, Roughness } from "../math"
import { JiPitch } from "./types"

const computeIsRoughJiPitch = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends NumericTypeParameters>(
    jiPitch: JiPitch<T>,
    roughness: S & Roughness,
): jiPitch is JiPitch<T & { rough: S }> => {
    const { monzo, ratio } = jiPitch

    return (!isUndefined(monzo) && computeIsRoughMonzo(monzo, roughness)) ||
        (!isUndefined(ratio) && computeIsRoughRatio(ratio, roughness))
}

export {
    computeIsRoughJiPitch,
}
