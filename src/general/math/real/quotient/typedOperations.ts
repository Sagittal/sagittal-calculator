import { IntegerQuotient, RationalQuotient } from "../../rational"
import { multiply } from "../../typedOperations"
import { NumericProperties } from "../types"
import { RealQuotient } from "./types"

const computeRealQuotientProduct: {
    <T extends NumericProperties>(...integerQuotients: Array<IntegerQuotient<T>>): IntegerQuotient<T>,
    <T extends NumericProperties>(...rationalQuotients: Array<RationalQuotient<T>>): RationalQuotient<T>,
    <T extends NumericProperties>(...quotients: Array<RealQuotient<T>>): RealQuotient<T>,
} = <T extends NumericProperties>(...quotients: Array<RealQuotient<T>>): any => {
    return quotients.reduce(
        (
            [productNumerator, productDenominator]: RealQuotient<T>, 
            [numerator, denominator]: RealQuotient<T>
        ): RealQuotient<T> => {
            return [
                multiply(productNumerator, numerator),
                multiply(productDenominator, denominator),
            ] as RealQuotient<T>
        },
        [1, 1] as RealQuotient<T>,
    )
}


export {
    computeRealQuotientProduct,
}
