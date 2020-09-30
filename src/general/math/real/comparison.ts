import { isCloseTo, isUndefined, MAX_JAVASCRIPT_PRECISION, Precision } from "../../code"
import { formatReal } from "../../io"
import { equalQuotients } from "../rational"
import { computeDecimalFromMonzo, computeDecimalFromQuotient, computeDecimalFromReal, RealDecimal } from "./decimal"
import { computeRealFromRealOrDecimal } from "./fromRealOrDecimal"
import { equalMonzos } from "./monzo"
import { computeQuotientFromMonzo } from "./quotient"
import { Real } from "./types"

const equalReals = (
    numParameterA: Real | RealDecimal,
    numParameterB: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const realA = computeRealFromRealOrDecimal(numParameterA)
    const realB = computeRealFromRealOrDecimal(numParameterB)

    if (!isUndefined(realA.decimal)) {
        if (!isUndefined(realB.decimal)) {
            return isCloseTo(realA.decimal, realB.decimal, precision)
        } else if (!isUndefined(realB.monzo)) {
            return isCloseTo(realA.decimal, computeDecimalFromMonzo(realB.monzo), precision)
        } else if (!isUndefined(realB.quotient)) {
            return isCloseTo(realA.decimal, computeDecimalFromQuotient(realB.quotient), precision)
        }
        throw new Error(`Tried to check equality of reals ${formatReal(realA)} and ${formatReal(realB)} but the latter lacked any numeric representations.`)
    }

    if (!isUndefined(realA.monzo)) {
        if (!isUndefined(realB.decimal)) {
            return isCloseTo(computeDecimalFromMonzo(realA.monzo), realB.decimal, precision)
        } else if (!isUndefined(realB.monzo)) {
            return equalMonzos(realA.monzo, realB.monzo)
        } else if (!isUndefined(realB.quotient)) {
            return equalQuotients(computeQuotientFromMonzo(realA.monzo), realB.quotient)
        }
        throw new Error(`Tried to check equality of reals ${formatReal(realA)} and ${formatReal(realB)} but the latter lacked any numeric representations.`)
    }

    if (!isUndefined(realA.quotient)) {
        if (!isUndefined(realB.decimal)) {
            return isCloseTo(computeDecimalFromQuotient(realA.quotient), realB.decimal, precision)
        } else if (!isUndefined(realB.monzo)) {
            return equalQuotients(realA.quotient, computeQuotientFromMonzo(realB.monzo))
        } else if (!isUndefined(realB.quotient)) {
            return equalQuotients(realA.quotient, realB.quotient)
        }
        throw new Error(`Tried to check equality of reals ${formatReal(realA)} and ${formatReal(realB)} but the latter lacked any numeric representations.`)
    }

    throw new Error(`Tried to check equality of reals ${formatReal(realA)} and ${formatReal(realB)} but the former lacked any numeric representations.`)
}

const realIsHigher = (
    realOrRealDecimal: Real | RealDecimal,
    otherRealOrRealDecimal: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const real = computeRealFromRealOrDecimal(realOrRealDecimal)
    const otherNum = computeRealFromRealOrDecimal(otherRealOrRealDecimal)

    return !equalReals(real, otherNum, precision) && computeDecimalFromReal(real) > computeDecimalFromReal(otherNum)
}

const realIsLower = (
    realOrRealDecimal: Real | RealDecimal,
    otherRealOrRealDecimal: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const real = computeRealFromRealOrDecimal(realOrRealDecimal)
    const otherNum = computeRealFromRealOrDecimal(otherRealOrRealDecimal)

    return !equalReals(real, otherNum, precision) && computeDecimalFromReal(real) < computeDecimalFromReal(otherNum)
}

const realIsHigherOrEqual = (
    realOrRealDecimal: Real | RealDecimal,
    otherRealOrRealDecimal: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const real = computeRealFromRealOrDecimal(realOrRealDecimal)
    const otherNum = computeRealFromRealOrDecimal(otherRealOrRealDecimal)

    return equalReals(real, otherNum, precision) || realIsHigher(real, otherNum, precision)
}

const realIsLowerOrEqual = (
    realOrRealDecimal: Real | RealDecimal,
    otherRealOrRealDecimal: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const real = computeRealFromRealOrDecimal(realOrRealDecimal)
    const otherNum = computeRealFromRealOrDecimal(otherRealOrRealDecimal)

    return equalReals(real, otherNum, precision) || realIsLower(real, otherNum, precision)
}

export {
    equalReals,
    realIsHigher,
    realIsLower,
    realIsHigherOrEqual,
    realIsLowerOrEqual,
}
