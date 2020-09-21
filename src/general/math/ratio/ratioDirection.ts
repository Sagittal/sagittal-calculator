import { Direction, NumericTypeParameters } from "../types"
import { Denominator, FractionalPart, Numerator, PotentiallyIrrationalRatioParameter, Ratio } from "./types"

const computeIsSuperRatio = <T extends NumericTypeParameters>(
    ratio: PotentiallyIrrationalRatioParameter,
): ratio is Ratio<T & { direction: Direction.SUPER }> => {
    const [numerator, denominator] = ratio

    return numerator > denominator
}

const computeIsSubRatio = <T extends NumericTypeParameters>(
    ratio: PotentiallyIrrationalRatioParameter<T>,
): ratio is Ratio<T & { direction: Direction.SUB }> => {
    const [numerator, denominator] = ratio

    return numerator < denominator
}

const computeIsUnisonRatio = <T extends NumericTypeParameters>(
    ratio: PotentiallyIrrationalRatioParameter<T>,
): ratio is Ratio<T & { direction: Direction.UNISON }> => {
    const [numerator, denominator] = ratio

    return numerator as FractionalPart === denominator as FractionalPart
}

const computeSuperRatio = <T extends NumericTypeParameters>(
    ratio: PotentiallyIrrationalRatioParameter<T>,
): Ratio<T & { direction: Direction.SUPER }> => {
    return computeIsSuperRatio(ratio) ?
        ratio as Ratio<T & { direction: Direction.SUPER }> :
        invertRatio(ratio)
}

const computeSubRatio = <T extends NumericTypeParameters>(
    ratio: PotentiallyIrrationalRatioParameter<T>,
): Ratio<T & { direction: Direction.SUB }> => {
    return computeIsSubRatio(ratio) ?
        ratio as Ratio<T & { direction: Direction.SUB }> :
        invertRatio(ratio)
}

const invertRatio: {
    <T extends NumericTypeParameters & { direction: Direction.SUPER }>(
        ratio: PotentiallyIrrationalRatioParameter<T>,
    ): Ratio<T & { direction: Direction.SUB }>,
    <T extends NumericTypeParameters & { direction: Direction.SUB }>(
        ratio: PotentiallyIrrationalRatioParameter<T>,
    ): Ratio<T & { direction: Direction.SUPER }>,
    <T extends NumericTypeParameters>(
        ratio: PotentiallyIrrationalRatioParameter<T>,
    ): Ratio<T>,
} = <T extends NumericTypeParameters>(ratio: Ratio<T>): Ratio<T> => {
    const [numerator, denominator] = ratio

    return [
        denominator as number as Numerator<T>,
        numerator as number as Denominator<T>,
    ] as Ratio<T & { direction: Direction.SUPER }>
}

export {
    computeSuperRatio,
    computeSubRatio,
    computeIsSuperRatio,
    computeIsSubRatio,
    computeIsUnisonRatio,
}
