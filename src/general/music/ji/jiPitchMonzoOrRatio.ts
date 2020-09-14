import { computeTrimmedArray } from "../../code"
import { computeMonzoFromRatio, computeRatioFromMonzo, IntegerTypeParameters, Monzo, Ratio } from "../../math"
import { JiPitch } from "./types"

const computeJiPitchMonzo = <T extends IntegerTypeParameters>(jiPitch: JiPitch<T>): Monzo<T> => {
    return computeTrimmedArray(jiPitch.monzo || computeMonzoFromRatio(jiPitch.ratio!))
}

const computeJiPitchRatio = <T extends IntegerTypeParameters>(jiPitch: JiPitch<T>): Ratio<T> => {
    return jiPitch.ratio || computeRatioFromMonzo(jiPitch.monzo!)
}

export {
    computeJiPitchMonzo,
    computeJiPitchRatio,
}
