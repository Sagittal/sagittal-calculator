import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Direction, NumericProperties } from "../types"
import { RealDecimal } from "./types"

const isSuperDecimal = <T extends NumericProperties>(
    candidateSuperDecimal: RealDecimal<T>,
): candidateSuperDecimal is RealDecimal<T & { direction: Direction.SUPER }> => {
    return candidateSuperDecimal > MULTIPLICATIVE_IDENTITY
}

const isSubDecimal = <T extends NumericProperties>(
    candidateSubDecimal: RealDecimal<T>,
): candidateSubDecimal is RealDecimal<T & { direction: Direction.SUB }> => {
    return candidateSubDecimal < MULTIPLICATIVE_IDENTITY
}

const isUnisonDecimal = <T extends NumericProperties>(
    candidateUnisonDecimal: RealDecimal<T>,
): candidateUnisonDecimal is RealDecimal<T & { direction: Direction.SUB }> => {
    return candidateUnisonDecimal === MULTIPLICATIVE_IDENTITY
}

const invertDecimal: {
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        decimal: RealDecimal<T>,
    ): RealDecimal<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        decimal: RealDecimal<T>,
    ): RealDecimal<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        decimal: RealDecimal<T>,
    ): RealDecimal<T & { integer: false }>,
} = <T extends NumericProperties>(
    decimal: RealDecimal<T>,
): RealDecimal<T & { integer: false }> => {
    return 1 / decimal as RealDecimal<T & { integer: false }>
}

export {
    isSubDecimal,
    isSuperDecimal,
    isUnisonDecimal,
    invertDecimal,
}
