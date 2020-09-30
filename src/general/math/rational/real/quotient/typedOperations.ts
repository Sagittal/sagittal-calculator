import { computeQuotientProduct, NumericProperties } from "../../../real"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { RationalQuotient } from "./types"

const computeRationalQuotientProduct = <T extends NumericProperties>(
    ...rationalQuotients: Array<RationalQuotient<T>>
): RationalQuotient<T> => {
    return computeLowestTermsRationalQuotient(computeQuotientProduct(...rationalQuotients))
}

export {
    computeRationalQuotientProduct,
}
