import { abs, Abs, JiPitch } from "../../../general"
import { computeApotomeSlope } from "./apotomeSlope"
import { ApotomeSlope } from "./types"

const computeAas = (jiPitch: JiPitch): Abs<ApotomeSlope> => {
    return abs(computeApotomeSlope(jiPitch))
}

export {
    computeAas,
}
