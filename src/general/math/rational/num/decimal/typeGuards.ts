import { ACCURACY_THRESHOLD } from "../../../../code"
import { dividesEvenly } from "../../../dividesEvenly"
import { Decimal, NumTypeParameters } from "../../../num"
import { round } from "../../../typedOperations"
import { IntegerDecimal, RationalDecimal } from "./types"

const isRationalDecimal = <T extends NumTypeParameters>(
    candidateRationalDecimal: Decimal,
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
