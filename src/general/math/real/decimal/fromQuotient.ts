import { RealQuotient } from "../quotient"
import { NumericProperties } from "../types"
import { RealDecimal } from "./types"

const computeRealDecimalFromRealQuotient = <T extends NumericProperties>(
    [numerator, denominator]: RealQuotient<T>,
): RealDecimal<T> =>
    numerator / denominator as RealDecimal<T>


export {
    computeRealDecimalFromRealQuotient,
}
