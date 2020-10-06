import { dividesEvenly } from "../../dividesEvenly"
import { NumericProperties, Quotient } from "../../numeric"
import { isIntegerDecimal } from "../decimal"

const isRationalQuotient = <T extends NumericProperties>(
    candidateRationalQuotient: Quotient<T>,
): candidateRationalQuotient is Quotient<T & { rational: true }> => {
    const [numerator, denominator] = candidateRationalQuotient

    return isIntegerDecimal(numerator) && isIntegerDecimal(denominator)
}

const isIntegerQuotient = <T extends NumericProperties>(
    candidateIntegerQuotient: Quotient<T>,
): candidateIntegerQuotient is Quotient<T & { integer: true }> => {
    const [numerator, denominator] = candidateIntegerQuotient

    return dividesEvenly(numerator, denominator)
}

export {
    isRationalQuotient,
    isIntegerQuotient,
}
