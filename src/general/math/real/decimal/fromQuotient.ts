import { Quotient } from "../quotient"
import { NumericProperties } from "../types"
import { RealDecimal } from "./types"

const computeDecimalFromQuotient = <T extends NumericProperties>(
    [numerator, denominator]: Quotient<T>,
): RealDecimal<T> =>
    numerator / denominator as RealDecimal<T>


export {
    computeDecimalFromQuotient,
}
