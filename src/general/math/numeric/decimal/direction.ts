import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Direction, NumericProperties } from "../types"
import { Decimal } from "./types"

const isSuperDecimal = <T extends NumericProperties>(
    candidateSuperDecimal: Decimal<T>,
): candidateSuperDecimal is Decimal<T & { direction: Direction.SUPER }> =>
    candidateSuperDecimal > MULTIPLICATIVE_IDENTITY

const isSubDecimal = <T extends NumericProperties>(
    candidateSubDecimal: Decimal<T>,
): candidateSubDecimal is Decimal<T & { direction: Direction.SUB }> =>
    candidateSubDecimal < MULTIPLICATIVE_IDENTITY

const isUnisonDecimal = <T extends NumericProperties>(
    candidateUnisonDecimal: Decimal<T>,
): candidateUnisonDecimal is Decimal<T & { direction: Direction.SUB }> =>
    candidateUnisonDecimal === MULTIPLICATIVE_IDENTITY

const invertDecimal: {
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        decimal: Decimal<T>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        decimal: Decimal<T>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        decimal: Decimal<T>,
    ): Decimal<Omit<T, "direction"> & { integer: false }>,
} = <T extends NumericProperties>(
    decimal: Decimal<T>,
): Decimal<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB, integer: false }> =>
    1 / decimal as Decimal<Omit<T, "direction"> & { integer: false }>

export {
    isSubDecimal,
    isSuperDecimal,
    isUnisonDecimal,
    invertDecimal,
}
