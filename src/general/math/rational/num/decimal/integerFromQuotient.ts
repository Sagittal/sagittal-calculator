import { formatQuotient } from "../../../../io"
import { NumTypeParameters } from "../../../num"
import { Integer } from "../../types"
import { computeLowestTermsRationalQuotient, RationalQuotient } from "../quotient"

const computeIntegerFromIntegerQuotient = <T extends NumTypeParameters>(
    integerQuotient: RationalQuotient<T>,
): Integer<T> => {
    // TODO: actually make an IntegerQuotient
    const [numerator, denominator] = computeLowestTermsRationalQuotient(integerQuotient)

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer quotient ${formatQuotient(integerQuotient)}.`)
    }

    return numerator as Integer as Integer<T>
}

export {
    computeIntegerFromIntegerQuotient,
}
