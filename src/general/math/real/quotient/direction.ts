import { RationalQuotient } from "../../rational"
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
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        quotient: Quotient<T>,
    ): Quotient<T & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumericProperties>(
    quotient: Quotient<T>,
): any => {
    return isSuperQuotient(quotient) ?
        quotient as Quotient<T & { direction: Direction.SUPER, integer: false }> :
        invertQuotient(quotient)
}

const computeSubQuotient: {
    <T extends NumericProperties>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties>(
        quotient: Quotient<T>,
    ): Quotient<T & { direction: Direction.SUB, integer: false }>
} = <T extends NumericProperties>(
    quotient: Quotient<T>,
): any => {
    return isSubQuotient(quotient) ?
        quotient as Quotient<T & { direction: Direction.SUB, integer: false }> :
        invertQuotient(quotient)
}

const invertQuotient: {
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        quotient: Quotient<T>,
    ): Quotient<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        quotient: Quotient<T>,
    ): Quotient<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        quotient: Quotient<T>,
    ): Quotient<T & { integer: false }>,
} = <T extends NumericProperties>(quotient: Quotient<T>): any => {
    const [numerator, denominator] = quotient

    return [
        denominator as number as Numerator<T>,
        numerator as number as Denominator<T>,
    ] as Quotient<T & { integer: false }>
}

export {
    computeSuperQuotient,
    computeSubQuotient,
    isSuperQuotient,
    isSubQuotient,
    isUnisonQuotient,
    invertQuotient,
}
