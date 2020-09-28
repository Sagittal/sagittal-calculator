import { computeQuotientProduct, Decimal, invertQuotient, NumTypeParameters, Quotient } from "../../../num"
import { RationalDecimal } from "../decimal"
import { computeRationalQuotientFromRationalDecimal } from "./fromDecimal"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { RationalQuotient } from "./types"

const computeRationalQuotientFromQuotient = <T extends NumTypeParameters>(quotient: Quotient): RationalQuotient<T> => {
    const [numerator, denominator] = quotient

    const numeratorAsRationalQuotient =
        computeRationalQuotientFromRationalDecimal(numerator as Decimal as RationalDecimal)
    const denominatorAsRationalQuotient =
        computeRationalQuotientFromRationalDecimal(denominator as Decimal as RationalDecimal)

    return computeLowestTermsRationalQuotient(
        computeQuotientProduct(
            numeratorAsRationalQuotient,
            invertQuotient(denominatorAsRationalQuotient),
        ) as RationalQuotient<T>,
    )
}

export {
    computeRationalQuotientFromQuotient,
}
