import { computeTrimmedArray } from "../../code"
import { computeMonzoFromRatio, computeRatioFromMonzo, Monzo, Ratio, RationalTypeParameters } from "../../math"
import { JiPitch } from "./types"

const computeJiPitchMonzo = <T extends RationalTypeParameters>(jiPitch: JiPitch<T>): Monzo<T> => {
    return computeTrimmedArray(jiPitch.monzo || computeMonzoFromRatio(jiPitch.ratio!))
}

const computeJiPitchRatio = <T extends RationalTypeParameters>(jiPitch: JiPitch<T>): Ratio<T> => {
    return jiPitch.ratio || computeRatioFromMonzo(jiPitch.monzo!)
}

export {
    computeJiPitchMonzo,
    computeJiPitchRatio,
}
