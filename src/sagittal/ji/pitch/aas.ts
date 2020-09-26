import { abs, Abs, RationalNum } from "../../../general"
import { computeApotomeSlope } from "./apotomeSlope"
import { ApotomeSlope } from "./types"

const computeAas = (jiPitch: RationalNum): Abs<ApotomeSlope> => {
    return abs(computeApotomeSlope(jiPitch))
}

export {
    computeAas,
}
