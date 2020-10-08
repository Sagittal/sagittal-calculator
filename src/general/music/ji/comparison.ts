import { MAX_JS_PRECISION, Precision } from "../../code"
import { equalMonzos, NumericProperties } from "../../math"
import { Pitch } from "../pitch"
import { computeRationalDecimalFromJiPitch } from "./to"

const equalJiPitches = <T extends NumericProperties, U extends NumericProperties>(
    jiPitchA: Pitch<T & { rational: true }>,
    jiPitchB: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    equalMonzos(jiPitchA.monzo, jiPitchB.monzo, precision)

const jiPitchIsHigher = <T extends NumericProperties, U extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
    otherJiPitch: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !equalJiPitches(jiPitch, otherJiPitch, precision)
        && computeRationalDecimalFromJiPitch(jiPitch) > computeRationalDecimalFromJiPitch(otherJiPitch)
    )

const jiPitchIsLower = <T extends NumericProperties, U extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
    otherJiPitch: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !equalJiPitches(jiPitch, otherJiPitch, precision)
        && computeRationalDecimalFromJiPitch(jiPitch) < computeRationalDecimalFromJiPitch(otherJiPitch)
    )

const jiPitchIsHigherOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
    otherJiPitch: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    equalJiPitches(jiPitch, otherJiPitch, precision) || jiPitchIsHigher(jiPitch, otherJiPitch)

const jiPitchIsLowerOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
    otherJiPitch: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    equalJiPitches(jiPitch, otherJiPitch, precision) || jiPitchIsLower(jiPitch, otherJiPitch)

export {
    equalJiPitches,
    jiPitchIsHigher,
    jiPitchIsLower,
    jiPitchIsHigherOrEqual,
    jiPitchIsLowerOrEqual,
}
