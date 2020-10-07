import { Direction, NumericProperties } from "../types"
import { Denominator, Numerator, Quotient, QuotientPart } from "./types"

const isSuperQuotient = <T extends NumericProperties>(
    candidateSuperQuotient: Quotient<Omit<T, "direction">>,
): candidateSuperQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const [numerator, denominator] = candidateSuperQuotient

    return numerator > denominator
}

const isSubQuotient = <T extends NumericProperties>(
    candidateSubQuotient: Quotient<Omit<T, "direction">>,
): candidateSubQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    const [numerator, denominator] = candidateSubQuotient

    return numerator < denominator
}

const isUnisonQuotient = <T extends NumericProperties>(
    candidateUnisonQuotient: Quotient<Omit<T, "direction">>,
): candidateUnisonQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.UNISON }> => {
    const [numerator, denominator] = candidateUnisonQuotient

    return numerator as QuotientPart === denominator as QuotientPart
}

const computeSuperQuotient: {
    <T extends NumericProperties>(
        quotient: Quotient<T & { direction: Direction.UNISON }>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        quotient: Quotient<T>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumericProperties>(
    quotient: Quotient<T>,
): Quotient<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.UNISON }> =>
    isSuperQuotient(quotient) ?
        quotient as Quotient<Omit<T, "direction">> :
        invertQuotient(quotient)

const computeSubQuotient: {
    <T extends NumericProperties>(
        quotient: Quotient<T & { direction: Direction.UNISON }>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        quotient: Quotient<T>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
} = <T extends NumericProperties>(
    quotient: Quotient<T>,
): Quotient<Omit<T, "direction"> & { direction: Direction.SUB & Direction.UNISON }> =>
    isSubQuotient(quotient) ?
        quotient as Quotient<Omit<T, "direction">> :
        invertQuotient(quotient)

const invertQuotient: {
    <T extends NumericProperties>(
        quotient: Quotient<T & { direction: Direction.SUPER }>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties>(
        quotient: Quotient<T & { direction: Direction.SUB }>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        quotient: Quotient<T & { direction: Direction.UNISON }>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.UNISON }>,
    <T extends NumericProperties>(
        quotient: Quotient<T>,
    ): Quotient<Omit<T, "direction"> & { integer: false }>,
} = <T extends NumericProperties>(
    [numerator, denominator]: Quotient<T>,
): Quotient<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB & Direction.UNISON }> =>
    [
        denominator as number as Numerator,
        numerator as number as Denominator,
    ] as Quotient<Omit<T, "direction">>


export {
    computeSuperQuotient,
    computeSubQuotient,
    isSuperQuotient,
    isSubQuotient,
    isUnisonQuotient,
    invertQuotient,
}
