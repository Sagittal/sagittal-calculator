import { isNumber, isUndefined } from "../../../code"
import { NumericProperties, Real, RealDecimal } from "../../real"
import { isRationalDecimal, RationalDecimal } from "./decimal"
import { isRationalMonzo } from "./monzo"
import { isRationalQuotient } from "./quotient"
import { Rational } from "./types"

const isRational = <T extends NumericProperties>(
    candidateRationalOrRationalDecimal: Real<T> | RealDecimal<T>,
): candidateRationalOrRationalDecimal is Rational<T> | RationalDecimal<T> => {
    if (isNumber(candidateRationalOrRationalDecimal)) {
        return isRationalDecimal(candidateRationalOrRationalDecimal)
    }

    const { monzo, quotient, decimal } = candidateRationalOrRationalDecimal

    return (!isUndefined(monzo) && isRationalMonzo(monzo)) ||
        (!isUndefined(quotient) && isRationalQuotient(quotient)) ||
        !isUndefined(decimal) && isRationalDecimal(decimal)
}

export {
    isRational,
}
