import { isNumber, isUndefined } from "../../code"
import { formatNum } from "../../io"
import { Prime } from "../rational"
import { divide, sqrt, subtract } from "../typedOperations"
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

// TODO: You might also want to add a divideRatios which could actually do what my original ambition was for this
//  Which is to return a Ratio with the same representation (monzo, quotient, or decimal) as the *dividend*
//  And convert the representation of the divisor as necessary to that form
//  So that you can do nice things like sum inverted monzos and whatnot to maintain a clean representation of the Num
//  Which is exactly what you'd want for a comma mean... no wait, that's going to be sum monzos then use the sqrt helper

const subtractNums = <T extends NumTypeParameters>(
    dividend: NumOrDecimal<T>,
    divisor: NumOrDecimal<T>,
): Decimal<T> => {
    return subtract(computeDecimalFromNum(dividend), computeDecimalFromNum(divisor))
}

const computeNumSqrt: {
    <T extends NumTypeParameters>(num: Num<T>): Num<T & { rational: false, integer: false }>,
    <T extends NumTypeParameters>(decimal: Decimal<T>): Decimal<T & { rational: false, integer: false }>,
} = <T extends NumTypeParameters>(numParameter: NumOrDecimal<T>): any => {
    if (isNumber(numParameter)) {
        return sqrt(numParameter)
    }

    const { monzo, quotient, decimal } = numParameter

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
        throw new Error(`Tried to compute sqrt of num ${formatNum(numParameter)} but no numeric representations were found.`)
    }
}

export {
    divideNums,
    subtractNums,
    computeNumSqrt,
}
