import { isCloseTo, isUndefined, MAX_JS_PRECISION, Precision } from "../../../code"
import { NumericProperties } from "../types"
import { Decimal } from "./types"

const equalDecimals = <T extends NumericProperties, U extends NumericProperties>(
    decimalA: Decimal<T>,
    decimalB: Decimal<U>,
    precision?: Precision,
): boolean =>
    isUndefined(precision) ?
        decimalA as Decimal === decimalB as Decimal :
        isCloseTo(decimalA, decimalB)

const decimalIsHigher = <T extends NumericProperties, U extends NumericProperties>(
    decimal: Decimal<T>,
    otherDecimal: Decimal<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !equalDecimals(decimal, otherDecimal, precision) && decimal > otherDecimal

const decimalIsLower = <T extends NumericProperties, U extends NumericProperties>(
    decimal: Decimal<T>,
    otherDecimal: Decimal<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    !equalDecimals(decimal, otherDecimal, precision) && decimal < otherDecimal

const decimalIsHigherOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    decimal: Decimal<T>,
    otherDecimal: Decimal<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    equalDecimals(decimal, otherDecimal, precision) || decimal > otherDecimal

const decimalIsLowerOrEqual = <T extends NumericProperties, U extends NumericProperties>(
    decimal: Decimal<T>,
    otherDecimal: Decimal<U>,
    precision: Precision = MAX_JS_PRECISION,
): boolean =>
    equalDecimals(decimal, otherDecimal, precision) || decimal < otherDecimal

export {
    equalDecimals,
    decimalIsHigher,
    decimalIsLower,
    decimalIsHigherOrEqual,
    decimalIsLowerOrEqual,
}
