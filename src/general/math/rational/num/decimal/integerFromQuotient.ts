import { formatQuotient } from "../../../../io"
import { NumTypeParameters } from "../../../num"
import { Integer } from "../../types"
import { computeLowestTermsRationalQuotient, IntegerQuotient } from "../quotient"

const computeIntegerFromIntegerQuotient = <T extends NumTypeParameters>(
    integerQuotient: IntegerQuotient<T>,
): Integer<T> => {
    const [numerator, denominator] = computeLowestTermsRationalQuotient(integerQuotient)

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer quotient ${formatQuotient(integerQuotient)}.`)
    }

    return numerator as Integer as Integer<T>
}

export {
    computeIntegerFromIntegerQuotient,
}
