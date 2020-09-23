import { isUndefined } from "../code"
import { computeNumberFromRational } from "../math"
import { computeCentsFromNumber } from "./centsFromNumber"
import { JiPitch } from "./ji"
import { Cents, Pitch } from "./types"

const computeCentsFromPitch = (pitch: Pitch): Cents => {
    if (!isUndefined(pitch.cents)) {
        return pitch.cents
    }

    const number = computeNumberFromRational(pitch as JiPitch)

    return computeCentsFromNumber(number as number)
}

export {
    computeCentsFromPitch,
}
