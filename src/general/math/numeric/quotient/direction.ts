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

const computeSuperQuotient = <T extends NumericProperties>(
    quotient: Quotient<T>,
): Quotient<T & { direction: Direction.SUPER, integer: false }> =>
    isSuperQuotient(quotient) ?
        quotient as Quotient<T & { direction: Direction.SUPER, integer: false }> :
        invertQuotient(quotient)

const computeSubQuotient = <T extends NumericProperties>(
    quotient: Quotient<T>,
): Quotient<T & { direction: Direction.SUB, integer: false }> =>
    isSubQuotient(quotient) ?
        quotient as Quotient<T & { direction: Direction.SUB, integer: false }> :
        invertQuotient(quotient)

// TODO: technically, both super, sub, and invert, for all three numeric types, should support for UNISON direction
//  Returning something that is still UNISON.

const invertQuotient: {
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        quotient: Quotient<T>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        quotient: Quotient<T>,
    ): Quotient<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        quotient: Quotient<T>,
    ): Quotient<Omit<T, "direction"> & { integer: false }>,
} = <T extends NumericProperties>(
    [numerator, denominator]: Quotient<T>,
): Quotient<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB, integer: false }> =>
    [
        denominator as number as Numerator,
        numerator as number as Denominator,
    ] as Quotient<Omit<T, "direction"> & { integer: false }>


export {
    computeSuperQuotient,
    computeSubQuotient,
    isSuperQuotient,
    isSubQuotient,
    isUnisonQuotient,
    invertQuotient,
}
