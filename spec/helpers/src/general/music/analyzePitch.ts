import { computeIrrationalDecimalFromScamon, NumericProperties, Scamon } from "../../../../../src/general/math"
import { computeIrrationalMonzoFromScamon } from "../../../../../src/general/math/irrational/monzo/fromScamon"
import { computeCentsFromPitch } from "../../../../../src/general/music"
import { PitchAnalysis } from "./types"

const analyzePitch = <T extends NumericProperties>(pitch: Scamon<T>): PitchAnalysis<T> =>
    ({
        pitch,
        decimal: computeIrrationalDecimalFromScamon(pitch),
        cents: computeCentsFromPitch(pitch),
        monzo: computeIrrationalMonzoFromScamon(pitch),
    }) as PitchAnalysis<T>

export {
    analyzePitch,
}
