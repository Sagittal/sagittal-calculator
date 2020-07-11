import { CENTS_PER_OCTAVE } from "../constants"
import { Cents, Ratio } from "../types"

const computeCentsFromRatio = (ratio: Ratio): Cents => {
    return Math.log2(ratio[ 0 ] / ratio[ 1 ]) * CENTS_PER_OCTAVE as Cents
}

export {
    computeCentsFromRatio,
}
