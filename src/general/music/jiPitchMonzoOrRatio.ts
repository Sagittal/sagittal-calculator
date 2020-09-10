import { computeTrimmedArray } from "../code"
import { computeMonzoFromRatio, computeRatioFromMonzo, Monzo, Ratio } from "../math"
import { JiPitch } from "./types"

const computeJiPitchMonzo = (jiPitch: JiPitch): Monzo => {
    return computeTrimmedArray(jiPitch.monzo || computeMonzoFromRatio(jiPitch.ratio as Ratio))
}

const computeJiPitchRatio = (jiPitch: JiPitch): Ratio => {
    return jiPitch.ratio || computeRatioFromMonzo(jiPitch.monzo as Monzo)
}

export {
    computeJiPitchMonzo,
    computeJiPitchRatio,
}
