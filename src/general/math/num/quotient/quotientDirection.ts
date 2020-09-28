import { RationalQuotient } from "../../rational"
import { Direction, NumTypeParameters } from "../types"
import { Denominator, Numerator, Quotient, QuotientPart } from "./types"

const isSuperQuotient = <T extends NumTypeParameters>(
    candidateSuperQuotient: Quotient<Omit<T, "direction">>,
): candidateSuperQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const [numerator, denominator] = candidateSuperQuotient

    return numerator > denominator
}

const isSubQuotient = <T extends NumTypeParameters>(
    candidateSubQuotient: Quotient<Omit<T, "direction">>,
): candidateSubQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    const [numerator, denominator] = candidateSubQuotient

    return numerator < denominator
}

const isUnisonQuotient = <T extends NumTypeParameters>(
    candidateUnisonQuotient: Quotient<Omit<T, "direction">>,
): candidateUnisonQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.UNISON }> => {
    const [numerator, denominator] = candidateUnisonQuotient

    return numerator as QuotientPart === denominator as QuotientPart
}

const computeSuperQuotient: {
    <T extends NumTypeParameters>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        quotient: Quotient<T>,
    ): Quotient<T & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumTypeParameters>(
    quotient: Quotient<T>,
): Quotient<T & { direction: Direction.SUPER, integer: false }> => {
    return isSuperQuotient(quotient) ?
        quotient as Quotient<T & { direction: Direction.SUPER, integer: false }> :
        invertQuotient(quotient)
}

const computeSubQuotient: {
    <T extends NumTypeParameters>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters>(
        quotient: Quotient<T>,
    ): Quotient<T & { direction: Direction.SUB, integer: false }>
} = <T extends NumTypeParameters>(
    quotient: Quotient<T>,
): Quotient<T & { direction: Direction.SUB, integer: false }> => {
    return isSubQuotient(quotient) ?
        quotient as Quotient<T & { direction: Direction.SUB, integer: false }> :
        invertQuotient(quotient)
}

const invertQuotient: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        quotient: Quotient<T>,
    ): Quotient<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        quotient: Quotient<T>,
    ): Quotient<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        quotient: Quotient<T>,
    ): Quotient<T & { integer: false }>,
} = <T extends NumTypeParameters>(quotient: Quotient<T>): Quotient<T & { integer: false }> => {
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
