import { ACCURACY_THRESHOLD, Precision } from "../code"
import { computeDecimalFromNum, equalNums } from "../math"
import { Pitch } from "./types"

// TODO: you may want to check to see if in fact you're now calling format w/ align false

// TODO: perhaps system of throwing and catching to make sure you get the correct error? and test-drive it out
//  i.e. it's weird if some errors when checking pitches equal are to do with nums, others with cents, others w/
//  pitch... it should just, if you're calling the lower-level fn directly, tell you that, otherwise capture it
//  and transform the message for the appropriate level you're calling from originally

const equalPitches = (pitchA: Pitch, pitchB: Pitch, precision: Precision = ACCURACY_THRESHOLD): boolean =>
    equalNums(pitchA, pitchB, precision)

const pitchIsHigher = (pitch: Pitch, otherPitch: Pitch, precision: Precision = ACCURACY_THRESHOLD): boolean =>
    !equalPitches(pitch, otherPitch, precision) && computeDecimalFromNum(pitch) > computeDecimalFromNum(otherPitch)

const pitchIsLower = (pitch: Pitch, otherPitch: Pitch, precision: Precision = ACCURACY_THRESHOLD): boolean =>
    !equalPitches(pitch, otherPitch, precision) && computeDecimalFromNum(pitch) < computeDecimalFromNum(otherPitch)

const pitchIsHigherOrEqual = (pitch: Pitch, otherPitch: Pitch, precision: Precision = ACCURACY_THRESHOLD): boolean =>
    equalPitches(pitch, otherPitch, precision) || pitchIsHigher(pitch, otherPitch, precision)

const pitchIsLowerOrEqual = (pitch: Pitch, otherPitch: Pitch, precision: Precision = ACCURACY_THRESHOLD): boolean =>
    equalPitches(pitch, otherPitch, precision) || pitchIsLower(pitch, otherPitch, precision)

export {
    pitchIsHigher,
    pitchIsLower,
    pitchIsHigherOrEqual,
    pitchIsLowerOrEqual,
    equalPitches,
}
