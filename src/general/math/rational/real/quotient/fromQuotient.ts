import { computeQuotientProduct, invertQuotient, NumericProperties, Quotient, RealDecimal } from "../../../real"
import { RationalDecimal } from "../decimal"
import { computeRationalQuotientFromRationalDecimal } from "./fromDecimal"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { RationalQuotient } from "./types"

const computeRationalQuotientFromQuotient = <T extends NumericProperties>(quotient: Quotient): RationalQuotient<T> => {
    const [numerator, denominator] = quotient

    const numeratorAsRationalQuotient =
        computeRationalQuotientFromRationalDecimal(numerator as RealDecimal as RationalDecimal)
    const denominatorAsRationalQuotient =
        computeRationalQuotientFromRationalDecimal(denominator as RealDecimal as RationalDecimal)

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
