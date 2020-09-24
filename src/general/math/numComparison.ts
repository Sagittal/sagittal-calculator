import { ACCURACY_THRESHOLD, isCloseTo, isUndefined } from "../code"
import { formatNum } from "../io"
import {
    computeDecimalFromMonzo,
    computeDecimalFromRatio,
    computeRatioFromMonzo,
    equalMonzos,
    equalRatios,
    Integer,
} from "./rational"
import { Num } from "./types"

// TODO: add <, >, >=, <=

const equalNums = (numA: Num, numB: Num, precision: Integer = ACCURACY_THRESHOLD): boolean => {
    if (!isUndefined(numA.decimal)) {
        if (!isUndefined(numB.decimal)) {
            return isCloseTo(numA.decimal, numB.decimal, precision)
        } else if (!isUndefined(numB.monzo)) {
            return isCloseTo(numA.decimal, computeDecimalFromMonzo(numB.monzo), precision)
        } else if (!isUndefined(numB.ratio)) {
            return isCloseTo(numA.decimal, computeDecimalFromRatio(numB.ratio), precision)
        }
        throw new Error(`Tried to check equality of nums ${formatNum(numA, { align: false })} and ${formatNum(numB, { align: false })} but the latter lacked any numeric representations.`)
    }

    if (!isUndefined(numA.monzo)) {
        if (!isUndefined(numB.decimal)) {
            return isCloseTo(computeDecimalFromMonzo(numA.monzo), numB.decimal, precision)
        } else if (!isUndefined(numB.monzo)) {
            return equalMonzos(numA.monzo, numB.monzo)
        } else if (!isUndefined(numB.ratio)) {
            return equalRatios(computeRatioFromMonzo(numA.monzo), numB.ratio)
        }
        throw new Error(`Tried to check equality of nums ${formatNum(numA, { align: false })} and ${formatNum(numB, { align: false })} but the latter lacked any numeric representations.`)
    }

    if (!isUndefined(numA.ratio)) {
        if (!isUndefined(numB.decimal)) {
            return isCloseTo(computeDecimalFromRatio(numA.ratio), numB.decimal, precision)
        } else if (!isUndefined(numB.monzo)) {
            return equalRatios(numA.ratio, computeRatioFromMonzo(numB.monzo))
        } else if (!isUndefined(numB.ratio)) {
            return equalRatios(numA.ratio, numB.ratio)
        }
        throw new Error(`Tried to check equality of nums ${formatNum(numA, { align: false })} and ${formatNum(numB, { align: false })} but the latter lacked any numeric representations.`)
    }

    throw new Error(`Tried to check equality of nums ${formatNum(numA, { align: false })} and ${formatNum(numB, { align: false })} but the former lacked any numeric representations.`)
}

export {
    equalNums,
}
