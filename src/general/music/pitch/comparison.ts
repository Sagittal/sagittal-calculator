import { MAX_JS_PRECISION, Precision } from "../../code"
import { equalMonzos, equalQuotients } from "../../math"
import { isJi } from "../ji"
import { computeDecimalFromPitch, Pitch } from "../pitch"

const equalPitches = (pitchA: Pitch, pitchB: Pitch, precision: Precision = MAX_JS_PRECISION): boolean =>
    isJi(pitchA) ?
        isJi(pitchB) ?
            equalMonzos(pitchA.monzo, pitchB.monzo) :
            false :
        isJi(pitchB) ?
            false :
            (
                equalMonzos(pitchA.monzo, pitchB.monzo)
                && equalQuotients(pitchA.scaler, pitchB.scaler, precision)
            )

const pitchIsHigher = (pitch: Pitch, otherPitch: Pitch, precision: Precision = MAX_JS_PRECISION): boolean =>
    (
        !equalPitches(pitch, otherPitch, precision)
        && computeDecimalFromPitch(pitch) > computeDecimalFromPitch(otherPitch)
    )

const pitchIsLower = (pitch: Pitch, otherPitch: Pitch, precision: Precision = MAX_JS_PRECISION): boolean =>
    (
        !equalPitches(pitch, otherPitch, precision)
        && computeDecimalFromPitch(pitch) < computeDecimalFromPitch(otherPitch)
    )

const pitchIsHigherOrEqual = (pitch: Pitch, otherPitch: Pitch, precision: Precision = MAX_JS_PRECISION): boolean =>
    (
        equalPitches(pitch, otherPitch, precision)
        || pitchIsHigher(pitch, otherPitch, precision)
    )

const pitchIsLowerOrEqual = (
    pitch: Pitch,
    otherPitch: Pitch,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        equalPitches(pitch, otherPitch, precision)
        || pitchIsLower(pitch, otherPitch, precision)
    )

export {
    equalPitches,
    pitchIsHigher,
    pitchIsLower,
    pitchIsHigherOrEqual,
    pitchIsLowerOrEqual,
}
