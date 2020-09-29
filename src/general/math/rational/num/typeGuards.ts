import { isNumber, isUndefined } from "../../../code"
import { Decimal, Num, NumTypeParameters } from "../../num"
import { isRationalDecimal, RationalDecimal } from "./decimal"
import { isRationalMonzo } from "./monzo"
import { isRationalQuotient } from "./quotient"
import { Ratio } from "./types"

const isRatio = <T extends NumTypeParameters>(
    candidateRatioOrRationalDecimal: Num<T> | Decimal<T>,
): candidateRatioOrRationalDecimal is Ratio<T> | RationalDecimal<T> => {
    if (isNumber(candidateRatioOrRationalDecimal)) {
        return isRationalDecimal(candidateRatioOrRationalDecimal)
    }

    const { monzo, quotient, decimal } = candidateRatioOrRationalDecimal

    return (!isUndefined(monzo) && isRationalMonzo(monzo)) ||
        (!isUndefined(quotient) && isRationalQuotient(quotient)) ||
        !isUndefined(decimal) && isRationalDecimal(decimal)
}

export {
    isRatio,
}
