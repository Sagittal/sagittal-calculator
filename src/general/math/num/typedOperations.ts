import { isNumber, isUndefined } from "../../code"
import { formatNum } from "../../io"
import { Prime } from "../rational"
import { divide, multiply, sqrt, subtract } from "../typedOperations"
import { Exponent } from "../types"
import { computeDecimalFromNum, Decimal } from "./decimal"
import { Monzo } from "./monzo"
import { Quotient, QuotientPart } from "./quotient"
import { Num, NumOrDecimal, NumTypeParameters } from "./types"

// TODO: this is basically "computeInterval", but in that case, I think you'd want to switch the order of the params
//  And that could live in the music/ module I suppose

const divideNums = <T extends NumTypeParameters>(
    dividend: NumOrDecimal<T>,
    divisor: NumOrDecimal<T>,
): Decimal<T> => {
    return divide(computeDecimalFromNum(dividend), computeDecimalFromNum(divisor))
}

const subtractNums = <T extends NumTypeParameters>(
    dividend: NumOrDecimal<T>,
    divisor: NumOrDecimal<T>,
): Decimal<T> => {
    return subtract(computeDecimalFromNum(dividend), computeDecimalFromNum(divisor))
}

const multiplyNums = <T extends NumTypeParameters>(
    multiplicand: NumOrDecimal<T>,
    multiplier: NumOrDecimal<T>,
): Decimal<T> => {
    return multiply(computeDecimalFromNum(multiplicand), computeDecimalFromNum(multiplier))
}

const computeNumSqrt: {
    <T extends NumTypeParameters>(num: Num<T>): Num<T & { rational: false, integer: false }>,
    <T extends NumTypeParameters>(decimal: Decimal<T>): Decimal<T & { rational: false, integer: false }>,
} = <T extends NumTypeParameters>(numOrDecimal: NumOrDecimal<T>): any => {
    if (isNumber(numOrDecimal)) {
        return sqrt(numOrDecimal)
    }

    const { monzo, quotient, decimal } = numOrDecimal

    if (!isUndefined(monzo)) {
        const newMonzo = (monzo as Array<Exponent<Prime>>).map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
            return primeExponent / 2 as Exponent<Prime>
        }) as Monzo<T>

        return { monzo: newMonzo }
    } else if (!isUndefined(quotient)) {
        const newQuotient = (quotient as QuotientPart[]).map((quotientPart: QuotientPart): QuotientPart => {
            return sqrt(quotientPart) as QuotientPart
        }) as Quotient<T>

        return { quotient: newQuotient }
    } else if (!isUndefined(decimal)) {
        return { decimal: sqrt(decimal) as Decimal<T> }
    } else {
        throw new Error(`Tried to compute sqrt of num ${formatNum(numOrDecimal)} but no numeric representations were found.`)
    }
}

export {
    divideNums,
    subtractNums,
    multiplyNums,
    computeNumSqrt,
}
