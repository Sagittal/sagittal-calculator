import { computeRealQuotientProduct, NumericProperties } from "../../../real"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { RationalQuotient } from "./types"

const computeRationalQuotientProduct = <T extends NumericProperties>(
    ...rationalQuotients: Array<RationalQuotient<T>>
): RationalQuotient<T> => {
    return computeLowestTermsRationalQuotient(computeRealQuotientProduct(...rationalQuotients))
}

export {
    computeRationalQuotientProduct,
}
