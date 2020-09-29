import { isNumber, isUndefined } from "../../../code"
import {
    computeDecimalFromNum,
    computeMonzoSum,
    computeNumFromNumParameter,
    invertMonzo,
    invertQuotient,
    NumTypeParameters,
} from "../../num"
import { divide, multiply } from "../../typedOperations"
import { RationalDecimal } from "./decimal"
import { computeRationalMonzoFromRatio, RationalMonzo } from "./monzo"
import { computeRationalQuotientFromRatio, computeRationalQuotientProduct, RationalQuotient } from "./quotient"
import { Ratio, RatioOrRationalDecimal } from "./types"

const divideRatios = <T extends NumTypeParameters>(
    dividendRatioOrRationalDecimal: RatioOrRationalDecimal<T>,
    divisorRatioOrRationalDecimal: RatioOrRationalDecimal<T>,
): RatioOrRationalDecimal<T> => {
    if (isNumber(dividendRatioOrRationalDecimal)) {
        return divide(dividendRatioOrRationalDecimal, computeDecimalFromNum(divisorRatioOrRationalDecimal))
    }

    const {
        monzo: dividendMonzo,
        quotient: dividendQuotient,
        decimal: dividendDecimal,
    } = dividendRatioOrRationalDecimal

    const dividedRatio: Ratio<T> = {} as Ratio<T>
    if (!isUndefined(dividendMonzo)) {
        const divisorMonzo =
            computeRationalMonzoFromRatio(computeNumFromNumParameter(divisorRatioOrRationalDecimal))

        dividedRatio.monzo =
            computeMonzoSum(dividendMonzo, invertMonzo(divisorMonzo)) as RationalMonzo<T>
    }
    if (!isUndefined(dividendQuotient)) {
        const divisorQuotient =
            computeRationalQuotientFromRatio(computeNumFromNumParameter(divisorRatioOrRationalDecimal))

        dividedRatio.quotient =
            computeRationalQuotientProduct(dividendQuotient, invertQuotient(divisorQuotient)) as RationalQuotient<T>
    }
    if (!isUndefined(dividendDecimal)) {
        const divisorDecimal = computeDecimalFromNum(divisorRatioOrRationalDecimal)

        dividedRatio.decimal =
            divide(dividendDecimal, divisorDecimal)
    }

    return dividedRatio
}

const multiplyRatios: {
    <T extends NumTypeParameters>(
        multiplicand: Ratio<T>,
        multiplier: RatioOrRationalDecimal<T>,
    ): Ratio<T>
    <T extends NumTypeParameters>(
        multiplicand: RationalDecimal<T>,
        multiplier: RatioOrRationalDecimal<T>,
    ): RationalDecimal<T>
} = <T extends NumTypeParameters>(
    multiplicandRatioOrRationalDecimal: RatioOrRationalDecimal<T>,
    multiplierRatioOrRationalDecimal: RatioOrRationalDecimal<T>,
): any => {
    if (isNumber(multiplicandRatioOrRationalDecimal)) {
        return multiply(multiplicandRatioOrRationalDecimal, computeDecimalFromNum(multiplierRatioOrRationalDecimal))
    }

    const {
        monzo: multiplicandMonzo,
        quotient: multiplicandQuotient,
        decimal: multiplicandDecimal,
    } = multiplicandRatioOrRationalDecimal

    const multipliedRatio: Ratio<T> = {} as Ratio<T>
    if (!isUndefined(multiplicandMonzo)) {
        const multiplierMonzo =
            computeRationalMonzoFromRatio(computeNumFromNumParameter(multiplierRatioOrRationalDecimal))

        multipliedRatio.monzo =
            computeMonzoSum(multiplicandMonzo, multiplierMonzo) as RationalMonzo<T>
    }
    if (!isUndefined(multiplicandQuotient)) {
        const multiplierQuotient =
            computeRationalQuotientFromRatio(computeNumFromNumParameter(multiplierRatioOrRationalDecimal))

        multipliedRatio.quotient =
            computeRationalQuotientProduct(multiplicandQuotient, multiplierQuotient) as RationalQuotient<T>
    }
    if (!isUndefined(multiplicandDecimal)) {
        const multiplierDecimal =
            computeDecimalFromNum(multiplierRatioOrRationalDecimal)

        multipliedRatio.decimal =
            multiply(multiplicandDecimal, multiplierDecimal)
    }

    return multipliedRatio
}

export {
    divideRatios,
    multiplyRatios,
}
