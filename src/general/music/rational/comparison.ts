import { MAX_JS_PRECISION, Precision } from "../../code"
import { areMonzosEqual, NumericProperties } from "../../math"
import { Pitch } from "../pitch"
import { computeRationalDecimalFromJiPitch } from "./to"

const areJiPitchesEqual = <T extends NumericProperties, U extends NumericProperties>(
    jiPitchA: Pitch<T & { rational: true }>,
    jiPitchB: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areMonzosEqual(jiPitchA.monzo, jiPitchB.monzo, precision)

const isJiPitchHigher = <T extends NumericProperties, U extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
    otherJiPitch: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !areJiPitchesEqual(jiPitch, otherJiPitch, precision)
        && computeRationalDecimalFromJiPitch(jiPitch) > computeRationalDecimalFromJiPitch(otherJiPitch)
    )

const isJiPitchLower = <T extends NumericProperties, U extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
    otherJiPitch: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    (
        !areJiPitchesEqual(jiPitch, otherJiPitch, precision)
        && computeRationalDecimalFromJiPitch(jiPitch) < computeRationalDecimalFromJiPitch(otherJiPitch)
    )

const isJiPitchHigherOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
    otherJiPitch: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areJiPitchesEqual(jiPitch, otherJiPitch, precision) || isJiPitchHigher(jiPitch, otherJiPitch)

const isJiPitchLowerOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    jiPitch: Pitch<T & { rational: true }>,
    otherJiPitch: Pitch<U & { rational: true }>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    areJiPitchesEqual(jiPitch, otherJiPitch, precision) || isJiPitchLower(jiPitch, otherJiPitch)

export {
    areJiPitchesEqual,
    isJiPitchHigher,
    isJiPitchLower,
    isJiPitchHigherOrEqual,
    isJiPitchLowerOrEqual,
}
