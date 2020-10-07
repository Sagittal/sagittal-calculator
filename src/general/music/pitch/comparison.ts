import { MAX_JS_PRECISION, Precision } from "../../code"
import { equalMonzos, equalQuotients, NumericProperties } from "../../math"
import { isJi } from "../ji"
import { computeDecimalFromPitch, Pitch } from "../pitch"

const equalPitches = <T extends NumericProperties, U extends NumericProperties>(
    pitchA: Pitch<T>,
    pitchB: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION
): boolean =>
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

const pitchIsHigher = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION
): boolean =>
    (
        !equalPitches(pitch, otherPitch, precision)
        && computeDecimalFromPitch(pitch) > computeDecimalFromPitch(otherPitch)
    )

const pitchIsLower = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION
): boolean =>
    (
        !equalPitches(pitch, otherPitch, precision)
        && computeDecimalFromPitch(pitch) < computeDecimalFromPitch(otherPitch)
    )

const pitchIsHigherOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION
): boolean =>
    (
        equalPitches(pitch, otherPitch, precision)
        || pitchIsHigher(pitch, otherPitch, precision)
    )

const pitchIsLowerOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION
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
