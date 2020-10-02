import { computeRealQuotientProduct, invertRealQuotient, NumericProperties, RealDecimal, RealQuotient } from "../../../real"
import { RationalDecimal } from "../decimal"
import { computeRationalQuotientFromRationalDecimal } from "./fromDecimal"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { RationalQuotient } from "./types"

const computeRationalQuotientFromRealQuotient = <T extends NumericProperties>(
    realQuotient: RealQuotient
): RationalQuotient<T> => {
    const [numerator, denominator] = realQuotient

    const numeratorAsRationalQuotient =
        computeRationalQuotientFromRationalDecimal(numerator as RealDecimal as RationalDecimal)
    const denominatorAsRationalQuotient =
        computeRationalQuotientFromRationalDecimal(denominator as RealDecimal as RationalDecimal)

    return computeLowestTermsRationalQuotient(
        computeRealQuotientProduct(
            numeratorAsRationalQuotient,
            invertRealQuotient(denominatorAsRationalQuotient),
        ) as RationalQuotient<T>,
    )
}

export {
    computeRationalQuotientFromRealQuotient,
}
