import { BASE_2, log } from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computeCentsFromNumber = (number: number): Cents =>
    log(number, BASE_2) * CENTS_PER_OCTAVE as Cents

export {
    computeCentsFromNumber,
}
