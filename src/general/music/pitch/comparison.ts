import { isUndefined, MAX_JS_PRECISION, Precision } from "../../code"
import { areMonzosEqual, areQuotientsEqual, NumericProperties } from "../../math"
import { computeIrrationalDecimalFromPitch, computeIrrationalMonzoFromPitch } from "../nonJi"
import { Pitch } from "./types"

const arePitchesEqual = <T extends NumericProperties, U extends NumericProperties>(
    pitchA: Pitch<T>,
    pitchB: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        areMonzosEqual(pitchA.monzo, pitchB.monzo, precision)
        && (
            isUndefined(pitchA.scaler) && isUndefined(pitchB.scaler)
            || (
                !isUndefined(pitchA.scaler) && !isUndefined(pitchB.scaler)
                && areQuotientsEqual(pitchA.scaler, pitchB.scaler, precision)
            )
        )
    )
    || areMonzosEqual(computeIrrationalMonzoFromPitch(pitchA), computeIrrationalMonzoFromPitch(pitchB), precision)

const isPitchHigher = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !arePitchesEqual(pitch, otherPitch, precision)
        && computeIrrationalDecimalFromPitch(pitch) > computeIrrationalDecimalFromPitch(otherPitch)
    )

const isPitchLower = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !arePitchesEqual(pitch, otherPitch, precision)
        && computeIrrationalDecimalFromPitch(pitch) < computeIrrationalDecimalFromPitch(otherPitch)
    )

const isPitchHigherOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    arePitchesEqual(pitch, otherPitch, precision) || isPitchHigher(pitch, otherPitch, precision)

const isPitchLowerOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    pitch: Pitch<T>,
    otherPitch: Pitch<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    arePitchesEqual(pitch, otherPitch, precision) || isPitchLower(pitch, otherPitch, precision)

export {
    arePitchesEqual,
    isPitchHigher,
    isPitchLower,
    isPitchHigherOrEqual,
    isPitchLowerOrEqual,
}
