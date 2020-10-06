import { ACCURACY_THRESHOLD } from "../../../code"
import { dividesEvenly } from "../../dividesEvenly"
import { Decimal, NumericProperties } from "../../numeric"
import { round } from "../../typedOperations"

const isRationalDecimal = <T extends NumericProperties>(
    candidateRationalDecimal: Decimal<T>,
): candidateRationalDecimal is Decimal<T & { rational: true }> =>
    candidateRationalDecimal === round(candidateRationalDecimal, ACCURACY_THRESHOLD)

const isIntegerDecimal = <T extends NumericProperties>(
    candidateIntegerDecimal: Decimal<T>,
): candidateIntegerDecimal is Decimal<T & { integer: true }> =>
    dividesEvenly(candidateIntegerDecimal, 1)

export {
    isRationalDecimal,
    isIntegerDecimal,
}
