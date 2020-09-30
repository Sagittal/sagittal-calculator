import { computeDecimalFromReal, Real } from "../math"
import { computeCents } from "./cents"
import { Cents } from "./types"

const computeCentsFromPitch = (pitch: Real): Cents => {
    const decimal = computeDecimalFromReal(pitch)

    return computeCents(decimal)
}

export {
    computeCentsFromPitch,
}
