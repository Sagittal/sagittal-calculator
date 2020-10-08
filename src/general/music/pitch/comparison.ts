import { isUndefined, MAX_JS_PRECISION, Precision } from "../../code"
import { equalMonzos, equalQuotients, NumericProperties } from "../../math"
import { computeIrrationalDecimalFromPitch, computeIrrationalMonzoFromPitch } from "../nonJi"
import { Pitch } from "./types"

const equalPitches = <T extends NumericProperties, U extends NumericProperties>(
    pitchA: Pitch<T>,
    pitchB: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        equalMonzos(pitchA.monzo, pitchB.monzo, precision)
        && (
            isUndefined(pitchA.scaler) && isUndefined(pitchB.scaler)
            || (
                !isUndefined(pitchA.scaler) && !isUndefined(pitchB.scaler)
                && equalQuotients(pitchA.scaler, pitchB.scaler, precision)
            )
        )
    )
    || equalMonzos(computeIrrationalMonzoFromPitch(pitchA), computeIrrationalMonzoFromPitch(pitchB), precision)

const pitchIsHigher = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !equalPitches(pitch, otherPitch, precision)
        && computeIrrationalDecimalFromPitch(pitch) > computeIrrationalDecimalFromPitch(otherPitch)
    )

const pitchIsLower = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !equalPitches(pitch, otherPitch, precision)
        && computeIrrationalDecimalFromPitch(pitch) < computeIrrationalDecimalFromPitch(otherPitch)
    )

const pitchIsHigherOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    equalPitches(pitch, otherPitch, precision) || pitchIsHigher(pitch, otherPitch, precision)

const pitchIsLowerOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    equalPitches(pitch, otherPitch, precision) || pitchIsLower(pitch, otherPitch, precision)

export {
    equalPitches,
    pitchIsHigher,
    pitchIsLower,
    pitchIsHigherOrEqual,
    pitchIsLowerOrEqual,
}
