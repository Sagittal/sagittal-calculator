import { computeDecimalFromRationalNum } from "../math"
import { computeCentsFromDecimal } from "./centsFromDecimal"
import { JiPitch } from "./ji"
import { Cents, Pitch } from "./types"

const computeCentsFromPitch = (pitch: Pitch): Cents => {
    const decimal = computeDecimalFromRationalNum(pitch as JiPitch)

    return computeCentsFromDecimal(decimal)
}

export {
    computeCentsFromPitch,
}
