import { Decimal, NumTypeParameters } from "../../../num"
import { RationalDecimal } from "./types"

const isRationalDecimal = <T extends NumTypeParameters>(
    candidateRationalDecimal: Decimal,
): candidateRationalDecimal is RationalDecimal<T> => {
    return true
}

export {
    isRationalDecimal,
}
