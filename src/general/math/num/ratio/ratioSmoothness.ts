import { computeIsSmoothInteger, Primes, Smoothness } from "../../rational"
import { NumTypeParameters } from "../types"
import { Ratio } from "./types"

const computeIsSmoothRatio = <S extends Primes, T extends NumTypeParameters>(
    ratio: Ratio<T>,
    smoothness: S & Smoothness,
): ratio is Ratio<T & { smooth: S }> => {
    const [numerator, denominator] = ratio

    return computeIsSmoothInteger(numerator, smoothness) && computeIsSmoothInteger(denominator, smoothness)
}

export {
    computeIsSmoothRatio,
}
