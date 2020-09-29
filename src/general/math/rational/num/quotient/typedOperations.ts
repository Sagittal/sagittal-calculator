import { computeQuotientProduct, NumTypeParameters } from "../../../num"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { RationalQuotient } from "./types"

const computeRationalQuotientProduct = <T extends NumTypeParameters>(
    ...rationalQuotients: Array<RationalQuotient<T>>
): RationalQuotient<T> => {
    return computeLowestTermsRationalQuotient(computeQuotientProduct(...rationalQuotients))
}

export {
    computeRationalQuotientProduct,
}
