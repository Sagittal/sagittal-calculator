import { isNumber, isUndefined } from "../../../code"
import {
    computeRealDecimalFromReal,
    computeRealFromRealOrRealDecimal,
    computeRealMonzoSum,
    invertRealMonzo,
    invertRealQuotient,
    NumericProperties,
} from "../../real"
import { divide, multiply } from "../../typedOperations"
import { RationalDecimal } from "./decimal"
import { computeRationalMonzoFromRational, RationalMonzo } from "./monzo"
import { computeRationalQuotientFromRational, computeRationalQuotientProduct, RationalQuotient } from "./quotient"
import { Rational } from "./types"

const divideRationals = <T extends NumericProperties>(
    dividendRationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
    divisorRationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
): Rational<T> | RationalDecimal<T> => {
    if (isNumber(dividendRationalOrRationalDecimal)) {
        return divide(dividendRationalOrRationalDecimal, computeRealDecimalFromReal(divisorRationalOrRationalDecimal))
    }

    const {
        monzo: dividendMonzo,
        quotient: dividendQuotient,
        decimal: dividendDecimal,
    } = dividendRationalOrRationalDecimal

    const dividedRational: Rational<T> = {} as Rational<T>
    if (!isUndefined(dividendMonzo)) {
        const divisorMonzo =
            computeRationalMonzoFromRational(computeRealFromRealOrRealDecimal(divisorRationalOrRationalDecimal))

        dividedRational.monzo =
            computeRealMonzoSum(dividendMonzo, invertRealMonzo(divisorMonzo)) as RationalMonzo<T>
    }
    if (!isUndefined(dividendQuotient)) {
        const divisorQuotient =
            computeRationalQuotientFromRational(computeRealFromRealOrRealDecimal(divisorRationalOrRationalDecimal))

        dividedRational.quotient =
            computeRationalQuotientProduct(dividendQuotient, invertRealQuotient(divisorQuotient)) as RationalQuotient<T>
    }
    if (!isUndefined(dividendDecimal)) {
        const divisorDecimal = computeRealDecimalFromReal(divisorRationalOrRationalDecimal)

        dividedRational.decimal =
            divide(dividendDecimal, divisorDecimal)
    }

    return dividedRational
}

const multiplyRationals = <T extends NumericProperties>(
    multiplicandRationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
    multiplierRationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
): any => {
    if (isNumber(multiplicandRationalOrRationalDecimal)) {
        return multiply(
            multiplicandRationalOrRationalDecimal, 
            computeRealDecimalFromReal(multiplierRationalOrRationalDecimal)
        )
    }

    const {
        monzo: multiplicandMonzo,
        quotient: multiplicandQuotient,
        decimal: multiplicandDecimal,
    } = multiplicandRationalOrRationalDecimal

    const multipliedRational: Rational<T> = {} as Rational<T>
    if (!isUndefined(multiplicandMonzo)) {
        const multiplierMonzo =
            computeRationalMonzoFromRational(computeRealFromRealOrRealDecimal(multiplierRationalOrRationalDecimal))

        multipliedRational.monzo =
            computeRealMonzoSum(multiplicandMonzo, multiplierMonzo) as RationalMonzo<T>
    }
    if (!isUndefined(multiplicandQuotient)) {
        const multiplierQuotient =
            computeRationalQuotientFromRational(computeRealFromRealOrRealDecimal(multiplierRationalOrRationalDecimal))

        multipliedRational.quotient =
            computeRationalQuotientProduct(multiplicandQuotient, multiplierQuotient) as RationalQuotient<T>
    }
    if (!isUndefined(multiplicandDecimal)) {
        const multiplierDecimal =
            computeRealDecimalFromReal(multiplierRationalOrRationalDecimal)

        multipliedRational.decimal =
            multiply(multiplicandDecimal, multiplierDecimal)
    }

    return multipliedRational
}

export {
    divideRationals,
    multiplyRationals,
}
