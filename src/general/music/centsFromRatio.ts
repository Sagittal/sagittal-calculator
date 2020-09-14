import { BASE_2, log, NumericTypeParameters, PotentiallyNonintegerRatioParameter, Power } from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computeCentsFromRatio = <T extends NumericTypeParameters>(ratio: PotentiallyNonintegerRatioParameter<T>): Cents =>
    log(ratio[ 0 ] / ratio[ 1 ] as Power, BASE_2) * CENTS_PER_OCTAVE as Cents

export {
    computeCentsFromRatio,
}
