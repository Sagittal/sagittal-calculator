import { Direction, NumTypeParameters } from "../types"
import {
    Denominator,
    FractionalPartNotDefaultingToRational,
    Numerator,
    Ratio,
    RatioNotDefaultingToRational,
} from "./types"

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

    return numerator as FractionalPartNotDefaultingToRational === denominator as FractionalPartNotDefaultingToRational
}

const computeSuperRatio = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<T>,
): Ratio<Omit<T, "direction"> & { direction: Direction.SUPER, integer: false }> => {
    return computeIsSuperRatio(ratio) ?
        ratio as Ratio<T & { direction: Direction.SUPER, integer: false }> :
        invertRatio(ratio)
}

const computeSubRatio = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<T>,
): Ratio<Omit<T, "direction"> & { direction: Direction.SUB, integer: false }> => {
    return computeIsSubRatio(ratio) ?
        ratio as Ratio<T & { direction: Direction.SUB, integer: false }> :
        invertRatio(ratio)
}

const invertRatio: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        ratio: RatioNotDefaultingToRational<T>,
    ): Ratio<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        ratio: RatioNotDefaultingToRational<T>,
    ): Ratio<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        ratio: RatioNotDefaultingToRational<T>,
    ): Ratio<T & { integer: false }>,
} = <T extends NumTypeParameters>(ratio: RatioNotDefaultingToRational<T>): Ratio<T & { integer: false }> => {
    const [numerator, denominator] = ratio

    return [
        denominator as number as Numerator<T>,
        numerator as number as Denominator<T>,
    ] as Ratio<T & { integer: false }>
}

export {
    computeSuperRatio,
    computeSubRatio,
    computeIsSuperRatio,
    computeIsSubRatio,
    computeIsUnisonRatio,
    invertRatio,
}
