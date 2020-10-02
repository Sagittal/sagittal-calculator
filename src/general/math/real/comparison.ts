import { isCloseTo, isUndefined, MAX_JAVASCRIPT_PRECISION, Precision } from "../../code"
import { formatReal } from "../../io"
import { equalQuotients } from "../rational"
import {
    computeRealDecimalFromReal,
    computeRealDecimalFromRealMonzo,
    computeRealDecimalFromRealQuotient,
    RealDecimal,
} from "./decimal"
import { computeRealFromRealOrRealDecimal } from "./fromRealOrDecimal"
import { equalRealMonzos } from "./monzo"
import { computeRealQuotientFromRealMonzo } from "./quotient"
import { Real } from "./types"

const equalReals = (
    numParameterA: Real | RealDecimal,
    numParameterB: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const realA = computeRealFromRealOrRealDecimal(numParameterA)
    const realB = computeRealFromRealOrRealDecimal(numParameterB)

    if (!isUndefined(realA.decimal)) {
        if (!isUndefined(realB.decimal)) {
            return isCloseTo(realA.decimal, realB.decimal, precision)
        } else if (!isUndefined(realB.monzo)) {
            return isCloseTo(realA.decimal, computeRealDecimalFromRealMonzo(realB.monzo), precision)
        } else if (!isUndefined(realB.quotient)) {
            return isCloseTo(realA.decimal, computeRealDecimalFromRealQuotient(realB.quotient), precision)
        }
        throw new Error(`Tried to check equality of reals ${formatReal(realA)} and ${formatReal(realB)} but the latter lacked any numeric representations.`)
    }

    if (!isUndefined(realA.monzo)) {
        if (!isUndefined(realB.decimal)) {
            return isCloseTo(computeRealDecimalFromRealMonzo(realA.monzo), realB.decimal, precision)
        } else if (!isUndefined(realB.monzo)) {
            return equalRealMonzos(realA.monzo, realB.monzo)
        } else if (!isUndefined(realB.quotient)) {
            return equalQuotients(computeRealQuotientFromRealMonzo(realA.monzo), realB.quotient)
        }
        throw new Error(`Tried to check equality of reals ${formatReal(realA)} and ${formatReal(realB)} but the latter lacked any numeric representations.`)
    }

    if (!isUndefined(realA.quotient)) {
        if (!isUndefined(realB.decimal)) {
            return isCloseTo(computeRealDecimalFromRealQuotient(realA.quotient), realB.decimal, precision)
        } else if (!isUndefined(realB.monzo)) {
            return equalQuotients(realA.quotient, computeRealQuotientFromRealMonzo(realB.monzo))
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
    const real = computeRealFromRealOrRealDecimal(realOrRealDecimal)
    const otherReal = computeRealFromRealOrRealDecimal(otherRealOrRealDecimal)

    return !equalReals(real, otherReal, precision) 
        && computeRealDecimalFromReal(real) > computeRealDecimalFromReal(otherReal)
}

const realIsLower = (
    realOrRealDecimal: Real | RealDecimal,
    otherRealOrRealDecimal: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const real = computeRealFromRealOrRealDecimal(realOrRealDecimal)
    const otherReal = computeRealFromRealOrRealDecimal(otherRealOrRealDecimal)

    return !equalReals(real, otherReal, precision) 
        && computeRealDecimalFromReal(real) < computeRealDecimalFromReal(otherReal)
}

const realIsHigherOrEqual = (
    realOrRealDecimal: Real | RealDecimal,
    otherRealOrRealDecimal: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const real = computeRealFromRealOrRealDecimal(realOrRealDecimal)
    const otherReal = computeRealFromRealOrRealDecimal(otherRealOrRealDecimal)

    return equalReals(real, otherReal, precision) || realIsHigher(real, otherReal, precision)
}

const realIsLowerOrEqual = (
    realOrRealDecimal: Real | RealDecimal,
    otherRealOrRealDecimal: Real | RealDecimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const real = computeRealFromRealOrRealDecimal(realOrRealDecimal)
    const otherReal = computeRealFromRealOrRealDecimal(otherRealOrRealDecimal)

    return equalReals(real, otherReal, precision) || realIsLower(real, otherReal, precision)
}

export {
    equalReals,
    realIsHigher,
    realIsLower,
    realIsHigherOrEqual,
    realIsLowerOrEqual,
}
