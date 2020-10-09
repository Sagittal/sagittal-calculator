import { MAX_JS_PRECISION, Precision } from "../../code"
import { areDecimalsEqual } from "../../math"
import { Pitch } from "../pitch"
import { computeIrrationalDecimalFromPitch } from "./to"

const areNonJiPitchesEqual = (pitchA: Pitch, pitchB: Pitch, precision: Precision = MAX_JS_PRECISION): boolean =>
    areDecimalsEqual(computeIrrationalDecimalFromPitch(pitchA), computeIrrationalDecimalFromPitch(pitchB), precision)

export {
    areNonJiPitchesEqual,
}
