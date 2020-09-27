import { computeDecimalFromNum, Num } from "../math"
import { computeCents } from "./cents"
import { Cents } from "./types"

const computeCentsFromPitch = (pitch: Num): Cents => {
    const decimal = computeDecimalFromNum(pitch)

    return computeCents(decimal)
}

export {
    computeCentsFromPitch,
}
