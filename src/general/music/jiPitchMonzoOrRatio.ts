import { computeTrimmedArray } from "../code"
import { computeMonzoFromRatio, computeRatioFromMonzo, Monzo, NumericTypeParameters, Ratio } from "../math"
import { JiPitch } from "./types"

const computeJiPitchMonzo = <T extends NumericTypeParameters & { irrational: false }>(
    jiPitch: JiPitch<T>,
): Monzo<T> => {
    return computeTrimmedArray(jiPitch.monzo || computeMonzoFromRatio(jiPitch.ratio!))
}

// TODO: perhaps we need a type to extend that is just for the JiPitch
const computeJiPitchRatio = <T extends NumericTypeParameters & { irrational: false }>(
    jiPitch: JiPitch<T>,
): Ratio<T> => {
    return jiPitch.ratio || computeRatioFromMonzo(jiPitch.monzo!)
}

export {
    computeJiPitchMonzo,
    computeJiPitchRatio,
}
