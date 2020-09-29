import { isCloseTo, isUndefined, MAX_JAVASCRIPT_PRECISION, Precision } from "../../code"
import { formatNum } from "../../io"
import { equalQuotients } from "../rational"
import { computeDecimalFromMonzo, computeDecimalFromNum, computeDecimalFromQuotient, Decimal } from "./decimal"
import { computeNumFromNumOrDecimal } from "./fromNumOrDecimal"
import { equalMonzos } from "./monzo"
import { computeQuotientFromMonzo } from "./quotient"
import { Num } from "./types"

const equalNums = (
    numParameterA: Num | Decimal,
    numParameterB: Num | Decimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const numA = computeNumFromNumOrDecimal(numParameterA)
    const numB = computeNumFromNumOrDecimal(numParameterB)

    if (!isUndefined(numA.decimal)) {
        if (!isUndefined(numB.decimal)) {
            return isCloseTo(numA.decimal, numB.decimal, precision)
        } else if (!isUndefined(numB.monzo)) {
            return isCloseTo(numA.decimal, computeDecimalFromMonzo(numB.monzo), precision)
        } else if (!isUndefined(numB.quotient)) {
            return isCloseTo(numA.decimal, computeDecimalFromQuotient(numB.quotient), precision)
        }
        throw new Error(`Tried to check equality of nums ${formatNum(numA)} and ${formatNum(numB)} but the latter lacked any numeric representations.`)
    }

    if (!isUndefined(numA.monzo)) {
        if (!isUndefined(numB.decimal)) {
            return isCloseTo(computeDecimalFromMonzo(numA.monzo), numB.decimal, precision)
        } else if (!isUndefined(numB.monzo)) {
            return equalMonzos(numA.monzo, numB.monzo)
        } else if (!isUndefined(numB.quotient)) {
            return equalQuotients(computeQuotientFromMonzo(numA.monzo), numB.quotient)
        }
        throw new Error(`Tried to check equality of nums ${formatNum(numA)} and ${formatNum(numB)} but the latter lacked any numeric representations.`)
    }

    if (!isUndefined(numA.quotient)) {
        if (!isUndefined(numB.decimal)) {
            return isCloseTo(computeDecimalFromQuotient(numA.quotient), numB.decimal, precision)
        } else if (!isUndefined(numB.monzo)) {
            return equalQuotients(numA.quotient, computeQuotientFromMonzo(numB.monzo))
        } else if (!isUndefined(numB.quotient)) {
            return equalQuotients(numA.quotient, numB.quotient)
        }
        throw new Error(`Tried to check equality of nums ${formatNum(numA)} and ${formatNum(numB)} but the latter lacked any numeric representations.`)
    }

    throw new Error(`Tried to check equality of nums ${formatNum(numA)} and ${formatNum(numB)} but the former lacked any numeric representations.`)
}

const numIsHigher = (
    numOrDecimal: Num | Decimal,
    otherNumParameter: Num | Decimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const num = computeNumFromNumOrDecimal(numOrDecimal)
    const otherNum = computeNumFromNumOrDecimal(otherNumParameter)

    return !equalNums(num, otherNum, precision) && computeDecimalFromNum(num) > computeDecimalFromNum(otherNum)
}

const numIsLower = (
    numOrDecimal: Num | Decimal,
    otherNumParameter: Num | Decimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const num = computeNumFromNumOrDecimal(numOrDecimal)
    const otherNum = computeNumFromNumOrDecimal(otherNumParameter)

    return !equalNums(num, otherNum, precision) && computeDecimalFromNum(num) < computeDecimalFromNum(otherNum)
}

const numIsHigherOrEqual = (
    numOrDecimal: Num | Decimal,
    otherNumParameter: Num | Decimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const num = computeNumFromNumOrDecimal(numOrDecimal)
    const otherNum = computeNumFromNumOrDecimal(otherNumParameter)

    return equalNums(num, otherNum, precision) || numIsHigher(num, otherNum, precision)
}

const numIsLowerOrEqual = (
    numOrDecimal: Num | Decimal,
    otherNumParameter: Num | Decimal,
    precision: Precision = MAX_JAVASCRIPT_PRECISION,
): boolean => {
    const num = computeNumFromNumOrDecimal(numOrDecimal)
    const otherNum = computeNumFromNumOrDecimal(otherNumParameter)

    return equalNums(num, otherNum, precision) || numIsLower(num, otherNum, precision)
}

export {
    equalNums,
    numIsHigher,
    numIsLower,
    numIsHigherOrEqual,
    numIsLowerOrEqual,
}
