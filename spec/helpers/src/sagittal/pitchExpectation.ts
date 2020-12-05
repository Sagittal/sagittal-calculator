import {
    computeCentsFromPitch,
    computeIrrationalDecimalFromScamon,
    computeIrrationalMonzoFromScamon,
    NumericProperties,
    Scamon,
} from "@sagittal/general"
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
