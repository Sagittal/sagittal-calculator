import { Quotient } from "../quotient"
import { NumTypeParameters } from "../types"
import { Decimal } from "./types"

const computeDecimalFromQuotient = <T extends NumTypeParameters>([numerator, denominator]: Quotient<T>): Decimal<T> =>
    numerator / denominator as Decimal<T>


export {
    computeDecimalFromQuotient,
}
