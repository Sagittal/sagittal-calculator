import { dividesEvenly } from "../../../dividesEvenly"
import { Decimal, NumTypeParameters } from "../../../num"
import { IntegerDecimal, RationalDecimal } from "./types"

const isRationalDecimal = <T extends NumTypeParameters>(
    candidateRationalDecimal: Decimal,
): candidateRationalDecimal is RationalDecimal<T> => {
    return true
}

const isIntegerDecimal = (candidateInteger: number): candidateInteger is IntegerDecimal => {
    return dividesEvenly(candidateInteger, 1)
}

export {
    isRationalDecimal,
    isIntegerDecimal,
}
