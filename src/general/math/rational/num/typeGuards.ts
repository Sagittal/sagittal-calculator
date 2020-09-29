import { isNumber, isUndefined } from "../../../code"
import { NumOrDecimal, NumTypeParameters } from "../../num"
import { isRationalDecimal } from "./decimal"
import { isRationalMonzo } from "./monzo"
import { isRationalQuotient } from "./quotient"
import { RatioOrRationalDecimal } from "./types"

const isRatio = <T extends NumTypeParameters>(
    candidateRatioOrRationalDecimal: NumOrDecimal<T>,
): candidateRatioOrRationalDecimal is RatioOrRationalDecimal<T> => {
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
