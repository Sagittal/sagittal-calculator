import { ACCURACY_THRESHOLD } from "../../../../code"
import { dividesEvenly } from "../../../dividesEvenly"
import { NumericProperties, RealDecimal } from "../../../real"
import { round } from "../../../typedOperations"
import { IntegerDecimal, RationalDecimal } from "./types"

const isRationalDecimal = <T extends NumericProperties>(
    candidateRationalDecimal: RealDecimal,
): candidateRationalDecimal is RationalDecimal<T> => {
    return candidateRationalDecimal === round(candidateRationalDecimal, ACCURACY_THRESHOLD)
}

const isIntegerDecimal = (candidateInteger: number): candidateInteger is IntegerDecimal => {
    return dividesEvenly(candidateInteger, 1)
}

export {
    isRationalDecimal,
    isIntegerDecimal,
}
