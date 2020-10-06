import { computeQuotientProduct, NumericProperties, Quotient } from "../../numeric"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"

const computeRationalQuotientProduct = <T extends NumericProperties>(
    ...rationalQuotients: Array<Quotient<T & { rational: true }>>
): Quotient<T & { rational: true }> =>
    computeLowestTermsRationalQuotient(computeQuotientProduct(...rationalQuotients))

export {
    computeRationalQuotientProduct,
}
