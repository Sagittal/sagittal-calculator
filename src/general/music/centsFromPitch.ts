import { isUndefined } from "../code"
import { computeRatioFromMonzo, Monzo } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"
import { Cents, Pitch } from "./types"

const computeCentsFromPitch = (pitch: Pitch): Cents => {
    if (!isUndefined(pitch.cents)) {
        return pitch.cents
    }

    const ratio = pitch.ratio ||
        computeRatioFromMonzo(pitch.monzo as Monzo, { disableErrorBecauseExactValueNotRequired: true })

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromPitch,
}
