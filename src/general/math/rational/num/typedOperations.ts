import { isNumber, isUndefined } from "../../../code"
import {
    computeDecimalFromNum,
    computeMonzoSum,
    computeNumFromNumOrDecimal,
    invertMonzo,
    invertQuotient,
    NumTypeParameters,
} from "../../num"
import { divide, multiply } from "../../typedOperations"
import { RationalDecimal } from "./decimal"
import { computeRationalMonzoFromRatio, RationalMonzo } from "./monzo"
import { computeRationalQuotientFromRatio, computeRationalQuotientProduct, RationalQuotient } from "./quotient"
import { Ratio } from "./types"

const divideRatios = <T extends NumTypeParameters>(
    dividendRatioOrRationalDecimal: Ratio<T> | RationalDecimal<T>,
    divisorRatioOrRationalDecimal: Ratio<T> | RationalDecimal<T>,
): Ratio<T> | RationalDecimal<T> => {
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
            computeRationalMonzoFromRatio(computeNumFromNumOrDecimal(divisorRatioOrRationalDecimal))

        dividedRatio.monzo =
            computeMonzoSum(dividendMonzo, invertMonzo(divisorMonzo)) as RationalMonzo<T>
    }
    if (!isUndefined(dividendQuotient)) {
        const divisorQuotient =
            computeRationalQuotientFromRatio(computeNumFromNumOrDecimal(divisorRatioOrRationalDecimal))

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

const multiplyRatios = <T extends NumTypeParameters>(
    multiplicandRatioOrRationalDecimal: Ratio<T> | RationalDecimal<T>,
    multiplierRatioOrRationalDecimal: Ratio<T> | RationalDecimal<T>,
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
            computeRationalMonzoFromRatio(computeNumFromNumOrDecimal(multiplierRatioOrRationalDecimal))

        multipliedRatio.monzo =
            computeMonzoSum(multiplicandMonzo, multiplierMonzo) as RationalMonzo<T>
    }
    if (!isUndefined(multiplicandQuotient)) {
        const multiplierQuotient =
            computeRationalQuotientFromRatio(computeNumFromNumOrDecimal(multiplierRatioOrRationalDecimal))

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
