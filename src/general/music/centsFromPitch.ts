import { isUndefined } from "../code"
import { computeDecimalFromRationalNum } from "../math"
import { computeCentsFromDecimal } from "./centsFromDecimal"
import { JiPitch } from "./ji"
import { Cents, Pitch } from "./types"

const computeCentsFromPitch = (pitch: Pitch): Cents => {
    if (!isUndefined(pitch.cents)) {
        return pitch.cents
    }

    const decimal = computeDecimalFromRationalNum(pitch as JiPitch)

    return computeCentsFromDecimal(decimal)
}

export {
    computeCentsFromPitch,
}
