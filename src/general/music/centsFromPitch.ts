import { isUndefined } from "../code"
import { computeRatioFromMonzo, Monzo } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"
import { Cents, Pitch } from "./types"

// TODO: whether you go full-blown switch from cents to multiplier yet or not, it would be appropriate if back in math/
//  you did the work of converting monzos or ratios to numbers, and then here just had one thing that converted numbers
//  to cents. on music's end, you could call it a Multiplier<Pitch>
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
