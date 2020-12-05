import {abs, Abs, Scamon} from "@sagittal/general"
import {computeApotomeSlope} from "./apotomeSlope"
import {ApotomeSlope} from "./types"

const computeAas = (jiPitch: Scamon<{rational: true}>): Abs<ApotomeSlope> =>
    abs(computeApotomeSlope(jiPitch))

export {
    computeAas,
}
