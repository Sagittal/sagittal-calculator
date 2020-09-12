import { computeIsSmoothInteger } from "../smoothness"
import { NumericTypeParameters, Primes, Smoothness } from "../types"
import { Ratio } from "./types"

const computeIsSmoothRatio = <S extends Primes, T extends NumericTypeParameters>(
    ratio: Ratio<T>,
    smoothness: S & Smoothness,
): ratio is Ratio<T & { smooth: S }> => {
    const [numerator, denominator] = ratio

    return computeIsSmoothInteger(numerator, smoothness) && computeIsSmoothInteger(denominator, smoothness)
}

export {
    computeIsSmoothRatio,
}
