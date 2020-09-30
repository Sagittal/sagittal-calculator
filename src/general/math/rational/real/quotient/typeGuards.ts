import { dividesEvenly } from "../../../dividesEvenly"
import { NumericProperties, Quotient } from "../../../real"
import { isIntegerDecimal } from "../decimal"
import { IntegerQuotient, RationalQuotient } from "./types"

const isRationalQuotient = <T extends NumericProperties>(
    candidateRationalQuotient: Quotient<T>,
): candidateRationalQuotient is RationalQuotient<T> => {
    const [numerator, denominator] = candidateRationalQuotient

    return isIntegerDecimal(numerator) && isIntegerDecimal(denominator)
}

const isIntegerQuotient = <T extends NumericProperties>(
    candidateIntegerQuotient: Quotient<T>,
): candidateIntegerQuotient is IntegerQuotient<T> => {
    const [numerator, denominator] = candidateIntegerQuotient

    return dividesEvenly(numerator, denominator)
}

export {
    isRationalQuotient,
    isIntegerQuotient,
}
