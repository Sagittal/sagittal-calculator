import { IntegerQuotient, RationalQuotient } from "../../rational"
import { multiply } from "../../typedOperations"
import { NumericProperties } from "../types"
import { Quotient } from "./types"

const computeQuotientProduct: {
    <T extends NumericProperties>(...integerQuotients: Array<IntegerQuotient<T>>): IntegerQuotient<T>,
    <T extends NumericProperties>(...rationalQuotients: Array<RationalQuotient<T>>): RationalQuotient<T>,
    <T extends NumericProperties>(...quotients: Array<Quotient<T>>): Quotient<T>,
} = <T extends NumericProperties>(...quotients: Array<Quotient<T>>): any => {
    return quotients.reduce(
        ([productNumerator, productDenominator]: Quotient<T>, [numerator, denominator]: Quotient<T>): Quotient<T> => {
            return [
                multiply(productNumerator, numerator),
                multiply(productDenominator, denominator),
            ] as Quotient<T>
        },
        [1, 1] as Quotient<T>,
    )
}


export {
    computeQuotientProduct,
}
