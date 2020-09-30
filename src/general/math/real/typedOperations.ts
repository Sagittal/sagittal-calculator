import { isNumber, isUndefined } from "../../code"
import { Prime } from "../rational"
import { divide, multiply, sqrt, subtract } from "../typedOperations"
import { Exponent } from "../types"
import { computeDecimalFromReal, RealDecimal } from "./decimal"
import { Monzo } from "./monzo"
import { Quotient, QuotientPart } from "./quotient"
import { NumericProperties, Real } from "./types"

const divideReals = <T extends NumericProperties>(
    dividend: Real<T> | RealDecimal<T>,
    divisor: Real<T> | RealDecimal<T>,
): RealDecimal<T> => {
    return divide(computeDecimalFromReal(dividend), computeDecimalFromReal(divisor))
}

const subtractReals = <T extends NumericProperties>(
    dividend: Real<T> | RealDecimal<T>,
    divisor: Real<T> | RealDecimal<T>,
): RealDecimal<T> => {
    return subtract(computeDecimalFromReal(dividend), computeDecimalFromReal(divisor))
}

const multiplyReals = <T extends NumericProperties>(
    multiplicand: Real<T> | RealDecimal<T>,
    multiplier: Real<T> | RealDecimal<T>,
): RealDecimal<T> => {
    return multiply(computeDecimalFromReal(multiplicand), computeDecimalFromReal(multiplier))
}

const computeRealSqrt = <T extends NumericProperties>(realOrRealDecimal: Real<T> | RealDecimal<T>): any => {
    if (isNumber(realOrRealDecimal)) {
        return sqrt(realOrRealDecimal)
    }

    const { monzo, quotient, decimal } = realOrRealDecimal
    const sqrtNum = {} as Real<T & { rational: false, integer: false }>
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
        sqrtNum.decimal = sqrt(decimal) as RealDecimal<T>
    }

    return sqrtNum
}

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  If this one adds Max<>, then others should add types akin to in math/typedOperations
const maxReals = <T extends NumericProperties>(
    ...realsOrRealDecimals: Array<Real<T> | RealDecimal<T>>
): Real<T> | RealDecimal<T> => {
    let maxDecimal = -Infinity as RealDecimal
    let maxIndex = undefined

    realsOrRealDecimals.map(computeDecimalFromReal).forEach((decimal: RealDecimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return realsOrRealDecimals[ maxIndex as unknown as number ]
}

export {
    divideReals,
    subtractReals,
    multiplyReals,
    computeRealSqrt,
    maxReals,
}
