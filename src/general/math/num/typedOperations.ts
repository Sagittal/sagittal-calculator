import { isNumber, isUndefined } from "../../code"
import { Prime } from "../rational"
import { divide, multiply, sqrt, subtract } from "../typedOperations"
import { Exponent } from "../types"
import { computeDecimalFromNum, Decimal } from "./decimal"
import { Monzo } from "./monzo"
import { Quotient, QuotientPart } from "./quotient"
import { Num, NumTypeParameters } from "./types"

const divideNums = <T extends NumTypeParameters>(
    dividend: Num<T> | Decimal<T>,
    divisor: Num<T> | Decimal<T>,
): Decimal<T> => {
    return divide(computeDecimalFromNum(dividend), computeDecimalFromNum(divisor))
}

const subtractNums = <T extends NumTypeParameters>(
    dividend: Num<T> | Decimal<T>,
    divisor: Num<T> | Decimal<T>,
): Decimal<T> => {
    return subtract(computeDecimalFromNum(dividend), computeDecimalFromNum(divisor))
}

const multiplyNums = <T extends NumTypeParameters>(
    multiplicand: Num<T> | Decimal<T>,
    multiplier: Num<T> | Decimal<T>,
): Decimal<T> => {
    return multiply(computeDecimalFromNum(multiplicand), computeDecimalFromNum(multiplier))
}

const computeNumSqrt = <T extends NumTypeParameters>(numOrDecimal: Num<T> | Decimal<T>): any => {
    if (isNumber(numOrDecimal)) {
        return sqrt(numOrDecimal)
    }

    const { monzo, quotient, decimal } = numOrDecimal
    const sqrtNum = {} as Num<T & { rational: false, integer: false }>
    if (!isUndefined(monzo)) {
        sqrtNum.monzo = (monzo as Array<Exponent<Prime>>).map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
            return primeExponent / 2 as Exponent<Prime>
        }) as Monzo<T>
    }
    if (!isUndefined(quotient)) {
        sqrtNum.quotient = (quotient as QuotientPart[]).map((quotientPart: QuotientPart): QuotientPart => {
            return sqrt(quotientPart) as QuotientPart
        }) as Quotient<T>
    }
    if (!isUndefined(decimal)) {
        sqrtNum.decimal = sqrt(decimal) as Decimal<T>
    }

    return sqrtNum
}

// TODO: if this one adds Max<>, then others should add types akin to in math/typedOperations
const maxNums = <T extends NumTypeParameters>(...numsOrDecimals: Array<Num<T> | Decimal<T>>): Num<T> | Decimal<T> => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    numsOrDecimals.map(computeDecimalFromNum).forEach((decimal: Decimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return numsOrDecimals[ maxIndex as unknown as number ]
}

export {
    divideNums,
    subtractNums,
    multiplyNums,
    computeNumSqrt,
    maxNums,
}
