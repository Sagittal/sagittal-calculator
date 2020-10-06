import { abs, Abs, Pitch } from "../../../general"
import { computeApotomeSlope } from "./apotomeSlope"
import { ApotomeSlope } from "./types"

const computeAas = (jiPitch: Pitch<{ rational: true }>): Abs<ApotomeSlope> =>
    abs(computeApotomeSlope(jiPitch))

export {
    computeAas,
}
