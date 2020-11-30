import {
    computeCentsFromPitch,
    computeIrrationalDecimalFromScamon,
    NumericProperties,
    Scamon,
} from "../../../../../src/general"
import {computeIrrationalMonzoFromScamon} from "../../../../../src/general/math/irrational/monzo"
import {PitchExpectation} from "./types"

const computePitchExpectation = <T extends NumericProperties>(pitch: Scamon<T>): PitchExpectation<T> =>
    ({
        pitch,
        decimal: computeIrrationalDecimalFromScamon(pitch),
        cents: computeCentsFromPitch(pitch),
        monzo: computeIrrationalMonzoFromScamon(pitch),
    }) as PitchExpectation<T>

export {
    computePitchExpectation,
}
