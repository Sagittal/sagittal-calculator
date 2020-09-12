import { computeIsSmoothInteger } from "../smoothness"
import { NumericTypeParameters, Smoothness } from "../types"
import { Ratio } from "./types"

const computeIsSmoothRatio = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends NumericTypeParameters>(
    ratio: Ratio<T>,
    smoothness: S & Smoothness,
): ratio is Ratio<T & { smooth: S }> => {
    const [numerator, denominator] = ratio

    return computeIsSmoothInteger(numerator, smoothness) && computeIsSmoothInteger(denominator, smoothness)
}

export {
    computeIsSmoothRatio,
}
