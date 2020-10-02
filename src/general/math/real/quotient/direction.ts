import { RationalQuotient } from "../../rational"
import { Direction, NumericProperties } from "../types"
import { Denominator, Numerator, QuotientPart, RealQuotient } from "./types"

const isSuperRealQuotient = <T extends NumericProperties>(
    candidateSuperRealQuotient: RealQuotient<Omit<T, "direction">>,
): candidateSuperRealQuotient is RealQuotient<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const [numerator, denominator] = candidateSuperRealQuotient

    return numerator > denominator
}

const isSubRealQuotient = <T extends NumericProperties>(
    candidateSubRealQuotient: RealQuotient<Omit<T, "direction">>,
): candidateSubRealQuotient is RealQuotient<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    const [numerator, denominator] = candidateSubRealQuotient

    return numerator < denominator
}

const isUnisonRealQuotient = <T extends NumericProperties>(
    candidateUnisonRealQuotient: RealQuotient<Omit<T, "direction">>,
): candidateUnisonRealQuotient is RealQuotient<Omit<T, "direction"> & { direction: Direction.UNISON }> => {
    const [numerator, denominator] = candidateUnisonRealQuotient

    return numerator as QuotientPart === denominator as QuotientPart
}

const computeSuperRealQuotient: {
    <T extends NumericProperties>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        realQuotient: RealQuotient<T>,
    ): RealQuotient<T & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumericProperties>(
    realQuotient: RealQuotient<T>,
): any => {
    return isSuperRealQuotient(realQuotient) ?
        realQuotient as RealQuotient<T & { direction: Direction.SUPER, integer: false }> :
        invertRealQuotient(realQuotient)
}

const computeSubRealQuotient: {
    <T extends NumericProperties>(
        rationalQuotient: RationalQuotient<T>,
    ): RationalQuotient<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties>(
        realQuotient: RealQuotient<T>,
    ): RealQuotient<T & { direction: Direction.SUB, integer: false }>
} = <T extends NumericProperties>(
    realQuotient: RealQuotient<T>,
): any => {
    return isSubRealQuotient(realQuotient) ?
        realQuotient as RealQuotient<T & { direction: Direction.SUB, integer: false }> :
        invertRealQuotient(realQuotient)
}

const invertRealQuotient: {
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
        realQuotient: RealQuotient<T>,
    ): RealQuotient<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        realQuotient: RealQuotient<T>,
    ): RealQuotient<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        realQuotient: RealQuotient<T>,
    ): RealQuotient<T & { integer: false }>,
} = <T extends NumericProperties>(realQuotient: RealQuotient<T>): any => {
    const [numerator, denominator] = realQuotient

    return [
        denominator as number as Numerator<T>,
        numerator as number as Denominator<T>,
    ] as RealQuotient<T & { integer: false }>
}

export {
    computeSuperRealQuotient,
    computeSubRealQuotient,
    isSuperRealQuotient,
    isSubRealQuotient,
    isUnisonRealQuotient,
    invertRealQuotient,
}
