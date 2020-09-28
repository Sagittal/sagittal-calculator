import { dividesEvenly } from "../../../dividesEvenly"
import { NumTypeParameters, Quotient } from "../../../num"
import { isIntegerDecimal } from "../decimal"
import { IntegerQuotient, RationalQuotient } from "./types"

const isRationalQuotient = <T extends NumTypeParameters>(
    candidateRationalQuotient: Quotient<T>,
): candidateRationalQuotient is RationalQuotient<T> => {
    const [numerator, denominator] = candidateRationalQuotient

    return isIntegerDecimal(numerator) && isIntegerDecimal(denominator)
}

const isIntegerQuotient = <T extends NumTypeParameters>(
    candidateIntegerQuotient: Quotient<T>,
): candidateIntegerQuotient is IntegerQuotient<T> => {
    const [numerator, denominator] = candidateIntegerQuotient

    return dividesEvenly(numerator, denominator)
}

export {
    isRationalQuotient,
    isIntegerQuotient,
}
