import { formatQuotient } from "../../../../io"
import { NumTypeParameters } from "../../../num"
import { computeLowestTermsRationalQuotient, IntegerQuotient } from "../quotient"
import { IntegerDecimal } from "./types"

const computeIntegerDecimalFromIntegerQuotient = <T extends NumTypeParameters>(
    integerQuotient: IntegerQuotient<T>,
): IntegerDecimal<T> => {
    const [numerator, denominator] = computeLowestTermsRationalQuotient(integerQuotient)

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer quotient ${formatQuotient(integerQuotient)}.`)
    }

    return numerator as IntegerDecimal as IntegerDecimal<T>
}

export {
    computeIntegerDecimalFromIntegerQuotient,
}
