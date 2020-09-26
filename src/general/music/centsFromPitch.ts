import { computeDecimalFromNum, Num } from "../math"
import { computeCentsFromDecimal } from "./centsFromDecimal"
import { Cents } from "./types"

const computeCentsFromPitch = (pitch: Num): Cents => {
    const decimal = computeDecimalFromNum(pitch)

    return computeCentsFromDecimal(decimal)
}

export {
    computeCentsFromPitch,
}
