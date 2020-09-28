import { multiply } from "../../typedOperations"
import { NumTypeParameters } from "../types"
import { Quotient } from "./types"

const computeQuotientProduct = <T extends NumTypeParameters>(...quotients: Array<Quotient<T>>): Quotient<T> => {
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
