import { computeDecimalFromNum } from "../math"
import { computeCentsFromDecimal } from "./centsFromDecimal"
import { Cents, Pitch } from "./types"

const computeCentsFromPitch = (pitch: Pitch): Cents => {
    const decimal = computeDecimalFromNum(pitch)

    return computeCentsFromDecimal(decimal)
}

export {
    computeCentsFromPitch,
}
