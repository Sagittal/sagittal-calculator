import {Decimal, NumericProperties} from "../../numeric"
import {computeRationalMonzoFromRationalDecimal, computeRationalMonzoSopfr} from "../monzo"
import {Sopfr} from "../types"

const computeRationalDecimalSopfr = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Sopfr<T> =>
    computeRationalMonzoSopfr(computeRationalMonzoFromRationalDecimal(rationalDecimal))

export {
    computeRationalDecimalSopfr,
}
