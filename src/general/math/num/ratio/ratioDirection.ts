import { RationalRatio } from "../../rational"
import { Direction, NumTypeParameters } from "../types"
import { Denominator, FractionalPart, Numerator, Ratio } from "./types"

const isSuperRatio = <T extends NumTypeParameters>(
    candidateSuperRatio: Ratio<Omit<T, "direction">>,
): candidateSuperRatio is Ratio<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    const [numerator, denominator] = candidateSuperRatio

    return numerator > denominator
}

const isSubRatio = <T extends NumTypeParameters>(
    candidateSubRatio: Ratio<Omit<T, "direction">>,
): candidateSubRatio is Ratio<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    const [numerator, denominator] = candidateSubRatio

    return numerator < denominator
}

const isUnisonRatio = <T extends NumTypeParameters>(
    candidateUnisonRatio: Ratio<Omit<T, "direction">>,
): candidateUnisonRatio is Ratio<Omit<T, "direction"> & { direction: Direction.UNISON }> => {
    const [numerator, denominator] = candidateUnisonRatio

    return numerator as FractionalPart === denominator as FractionalPart
}

const computeSuperRatio: {
    <T extends NumTypeParameters>(
        rationalRatio: RationalRatio<T>,
    ): RationalRatio<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        ratio: Ratio<T>,
    ): Ratio<T & { direction: Direction.SUPER, integer: false }>,
} = <T extends NumTypeParameters>(
    ratio: Ratio<T>,
): Ratio<T & { direction: Direction.SUPER, integer: false }> => {
    return isSuperRatio(ratio) ?
        ratio as Ratio<T & { direction: Direction.SUPER, integer: false }> :
        invertRatio(ratio)
}

const computeSubRatio: {
    <T extends NumTypeParameters>(
        rationalRatio: RationalRatio<T>,
    ): RationalRatio<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters>(
        ratio: Ratio<T>,
    ): Ratio<T & { direction: Direction.SUB, integer: false }>
} = <T extends NumTypeParameters>(
    ratio: Ratio<T>,
): Ratio<T & { direction: Direction.SUB, integer: false }> => {
    return isSubRatio(ratio) ?
        ratio as Ratio<T & { direction: Direction.SUB, integer: false }> :
        invertRatio(ratio)
}

const invertRatio: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        rationalRatio: RationalRatio<T>,
    ): RationalRatio<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        rationalRatio: RationalRatio<T>,
    ): RationalRatio<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        rationalRatio: RationalRatio<T>,
    ): RationalRatio<T & { integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        ratio: Ratio<T>,
    ): Ratio<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        ratio: Ratio<T>,
    ): Ratio<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        ratio: Ratio<T>,
    ): Ratio<T & { integer: false }>,
} = <T extends NumTypeParameters>(ratio: Ratio<T>): Ratio<T & { integer: false }> => {
    const [numerator, denominator] = ratio

    return [
        denominator as number as Numerator<T>,
        numerator as number as Denominator<T>,
    ] as Ratio<T & { integer: false }>
}

export {
    computeSuperRatio,
    computeSubRatio,
    isSuperRatio,
    isSubRatio,
    isUnisonRatio,
    invertRatio,
}
