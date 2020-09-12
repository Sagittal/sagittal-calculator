import { isUndefined } from "../code"
import { computeIsRoughMonzo, computeIsRoughRatio, NumericTypeParameters, Primes, Roughness } from "../math"
import { JiPitch } from "./types"

const computeIsRoughJiPitch = <S extends Primes, T extends NumericTypeParameters>(
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
