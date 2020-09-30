import { abs, Abs, Rational } from "../../../general"
import { computeApotomeSlope } from "./apotomeSlope"
import { ApotomeSlope } from "./types"

const computeAas = (jiPitch: Rational): Abs<ApotomeSlope> => {
    return abs(computeApotomeSlope(jiPitch))
}

export {
    computeAas,
}
