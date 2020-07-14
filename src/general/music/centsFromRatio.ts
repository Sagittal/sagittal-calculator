import { Ratio } from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computeCentsFromRatio = (ratio: Ratio): Cents =>
    Math.log2(ratio[ 0 ] / ratio[ 1 ]) * CENTS_PER_OCTAVE as Cents

export {
    computeCentsFromRatio,
}
