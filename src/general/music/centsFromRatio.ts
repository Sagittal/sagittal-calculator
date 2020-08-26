import { BASE_2, log, Power, Ratio } from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computeCentsFromRatio = (ratio: Ratio): Cents =>
    log(ratio[ 0 ] / ratio[ 1 ] as Power, BASE_2) * CENTS_PER_OCTAVE as Cents

export {
    computeCentsFromRatio,
}
