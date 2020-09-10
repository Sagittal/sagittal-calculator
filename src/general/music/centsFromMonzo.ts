import { computeRatioFromMonzo } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"
import { JiPitch } from "./types"

// TODO: COMMA MONZO RATIO JI this can actually support non-JI pitches...
//  but we're not ready for that until Ratio takes NumericTypeParameters

const computeCentsFromJiPitch = (jiPitch: JiPitch) => {
    const ratio = computeRatioFromMonzo(jiPitch.monzo, { disableErrorBecauseExactValueNotRequired: true })

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromJiPitch,
}
