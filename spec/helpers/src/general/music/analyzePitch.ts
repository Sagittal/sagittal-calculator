import { NumericProperties } from "../../../../../src/general/math"
import { computeCentsFromPitch, Pitch } from "../../../../../src/general/music"
import {
    computeIrrationalDecimalFromPitch,
    computeIrrationalMonzoFromPitch,
} from "../../../../../src/general/music/irrational"
import { PitchAnalysis } from "./types"

const analyzePitch = <T extends NumericProperties>(pitch: Pitch<T>): PitchAnalysis<T> =>
    ({
        pitch,
        decimal: computeIrrationalDecimalFromPitch(pitch),
        cents: computeCentsFromPitch(pitch),
        monzo: computeIrrationalMonzoFromPitch(pitch),
    }) as PitchAnalysis<T>

export {
    analyzePitch,
}
