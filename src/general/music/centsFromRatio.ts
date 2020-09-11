import { BASE_2, log, NumericTypeParameters, Power, Ratio } from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computeCentsFromRatio = <T extends NumericTypeParameters>(ratio: Ratio<T>): Cents =>
    log(ratio[ 0 ] / ratio[ 1 ] as Power, BASE_2) * CENTS_PER_OCTAVE as Cents

export {
    computeCentsFromRatio,
}
