import { NumericProperties } from "../../../../../src/general/math"
import {
    computeCentsFromPitch,
    computeDecimalFromPitch,
    computeMonzoFromPitch,
    Pitch,
} from "../../../../../src/general/music"
import { PitchAnalysis } from "./types"

const analyzePitch = <T extends NumericProperties>(pitch: Pitch<T>): PitchAnalysis<T> =>
    ({
        pitch,
        decimal: computeDecimalFromPitch(pitch),
        cents: computeCentsFromPitch(pitch),
        monzo: computeMonzoFromPitch(pitch),
    }) as PitchAnalysis<T>

export {
    analyzePitch,
}
