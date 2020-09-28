import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Direction, NumTypeParameters } from "../types"
import { Decimal } from "./types"

const isSuperDecimal = <T extends NumTypeParameters>(
    candidateSuperDecimal: Decimal<T>,
): candidateSuperDecimal is Decimal<T & { direction: Direction.SUPER }> => {
    return candidateSuperDecimal > MULTIPLICATIVE_IDENTITY
}

const isSubDecimal = <T extends NumTypeParameters>(
    candidateSubDecimal: Decimal<T>,
): candidateSubDecimal is Decimal<T & { direction: Direction.SUB }> => {
    return candidateSubDecimal < MULTIPLICATIVE_IDENTITY
}

const isUnisonDecimal = <T extends NumTypeParameters>(
    candidateUnisonDecimal: Decimal<T>,
): candidateUnisonDecimal is Decimal<T & { direction: Direction.SUB }> => {
    return candidateUnisonDecimal === MULTIPLICATIVE_IDENTITY
}

const invertDecimal: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        decimal: Decimal<T>,
    ): Decimal<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        decimal: Decimal<T>,
    ): Decimal<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        decimal: Decimal<T>,
    ): Decimal<T & { integer: false }>,
} = <T extends NumTypeParameters>(
    decimal: Decimal<T>,
): Decimal<T & { integer: false }> => {
    return 1 / decimal as Decimal<T & { integer: false }>
}

export {
    isSubDecimal,
    isSuperDecimal,
    isUnisonDecimal,
    invertDecimal,
}
