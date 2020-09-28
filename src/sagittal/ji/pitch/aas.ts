import { abs, Abs, Ratio } from "../../../general"
import { computeApotomeSlope } from "./apotomeSlope"
import { ApotomeSlope } from "./types"

const computeAas = (jiPitch: Ratio): Abs<ApotomeSlope> => {
    return abs(computeApotomeSlope(jiPitch))
}

export {
    computeAas,
}
