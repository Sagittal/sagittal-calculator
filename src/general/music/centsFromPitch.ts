import { computeRealDecimalFromReal, Real } from "../math"
import { computeCents } from "./cents"
import { Cents } from "./types"

const computeCentsFromPitch = (pitch: Real): Cents => {
    const realDecimal = computeRealDecimalFromReal(pitch)

    return computeCents(realDecimal)
}

export {
    computeCentsFromPitch,
}
