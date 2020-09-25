import { Direction, NumTypeParameters } from "../../types"
import { Denominator, FractionalPart, Numerator, Ratio, RatioNotDefaultingToRational } from "./types"

const computeIsSuperRatio = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<Omit<T, "direction">>,
): ratio is Ratio<T & { direction: Direction.SUPER }> => {
    const [numerator, denominator] = ratio

    return numerator > denominator
}

const computeIsSubRatio = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<Omit<T, "direction">>,
): ratio is Ratio<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    const [numerator, denominator] = ratio

    return numerator < denominator
}

const computeIsUnisonRatio = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<Omit<T, "direction">>,
): ratio is Ratio<Omit<T, "direction"> & { direction: Direction.UNISON }> => {
    const [numerator, denominator] = ratio

    return numerator as FractionalPart === denominator as FractionalPart
}

const computeSuperRatio = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<T>,
): Ratio<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    return computeIsSuperRatio(ratio) ?
        ratio as Ratio<T & { direction: Direction.SUPER }> :
        invertRatio(ratio)
}

const computeSubRatio = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<T>,
): Ratio<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    return computeIsSubRatio(ratio) ?
        ratio as Ratio<T & { direction: Direction.SUB }> :
        invertRatio(ratio)
}

// TODO: you need to figure out how to get this and invertMonzo to strip the "integer" property
//  just as the reciprocal command does for primitive numbers
const invertRatio: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        ratio: RatioNotDefaultingToRational<T>,
    ): Ratio<T & { direction: Direction.SUB }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        ratio: RatioNotDefaultingToRational<T>,
    ): Ratio<T & { direction: Direction.SUPER }>,
    <T extends NumTypeParameters>(
        ratio: RatioNotDefaultingToRational<T>,
    ): Ratio<T>,
} = <T extends NumTypeParameters>(ratio: Ratio<T>): Ratio<T> => {
    const [numerator, denominator] = ratio

    return [
        denominator as number as Numerator<T>,
        numerator as number as Denominator<T>,
    ] as Ratio<T>
}

export {
    computeSuperRatio,
    computeSubRatio,
    computeIsSuperRatio,
    computeIsSubRatio,
    computeIsUnisonRatio,
    invertRatio,
}
