import { BASE_2, log } from "../../math"
import { CENTS_PER_OCTAVE } from "../constants"
import { computeIrrationalDecimalFromPitch } from "../nonJi"
import { Cents } from "../types"
import { Pitch } from "./types"

const computeCentsFromPitch = (pitch: Pitch): Cents =>
    log(computeIrrationalDecimalFromPitch(pitch), BASE_2) * CENTS_PER_OCTAVE as Cents

export {
    computeCentsFromPitch,
}
