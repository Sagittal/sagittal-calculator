import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Direction, NumericProperties } from "../types"
import { Decimal } from "./types"

const isSuperDecimal = <T extends NumericProperties>(
    candidateSuperDecimal: Decimal<Omit<T, "direction">>,
): candidateSuperDecimal is Decimal<Omit<T, "direction"> & { direction: Direction.SUPER }> =>
    candidateSuperDecimal > MULTIPLICATIVE_IDENTITY

const isSubDecimal = <T extends NumericProperties>(
    candidateSubDecimal: Decimal<Omit<T, "direction">>,
): candidateSubDecimal is Decimal<Omit<T, "direction"> & { direction: Direction.SUB }> =>
    candidateSubDecimal < MULTIPLICATIVE_IDENTITY

const isUnisonDecimal = <T extends NumericProperties>(
    candidateUnisonDecimal: Decimal<Omit<T, "direction">>,
): candidateUnisonDecimal is Decimal<Omit<T, "direction"> & { direction: Direction.SUB }> =>
    candidateUnisonDecimal === MULTIPLICATIVE_IDENTITY

const computeSuperDecimal: {
    <T extends NumericProperties>(
        decimal: Decimal<T & { direction: Direction.UNISON }>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        decimal: Decimal<T>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumericProperties>(
    decimal: Decimal<T>,
): Decimal<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.UNISON }> =>
    isSuperDecimal(decimal) ?
        decimal as Decimal<Omit<T, "direction">> :
        invertDecimal(decimal)

const computeSubDecimal: {
    <T extends NumericProperties>(
        decimal: Decimal<T & { direction: Direction.UNISON }>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        decimal: Decimal<T>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
} = <T extends NumericProperties>(
    decimal: Decimal<T>,
): Decimal<Omit<T, "direction"> & { direction: Direction.SUB & Direction.UNISON }> =>
    isSubDecimal(decimal) ?
        decimal as Decimal<Omit<T, "direction">> :
        invertDecimal(decimal)

const invertDecimal: {
    <T extends NumericProperties>(
        decimal: Decimal<T & { direction: Direction.SUPER }>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties>(
        decimal: Decimal<T & { direction: Direction.SUB }>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        decimal: Decimal<T & { direction: Direction.UNISON }>,
    ): Decimal<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        decimal: Decimal<T>,
    ): Decimal<Omit<T, "direction"> & { integer: false }>,
} = <T extends NumericProperties>(
    decimal: Decimal<T>,
): Decimal<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB & Direction.UNISON }> =>
    1 / decimal as Decimal<Omit<T, "direction">>

export {
    isSubDecimal,
    isSuperDecimal,
    isUnisonDecimal,
    invertDecimal,
    computeSubDecimal,
    computeSuperDecimal,
}
