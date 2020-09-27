import { isSmoothInteger, Primes, Smoothness } from "../../rational"
import { NumTypeParameters } from "../types"
import { Ratio } from "./types"

const isSmoothRatio = <S extends Primes, T extends NumTypeParameters>(
    ratio: Ratio<T>,
    smoothness: S & Smoothness,
): ratio is Ratio<T & { smooth: S }> => {
    const [numerator, denominator] = ratio

    return isSmoothInteger(numerator, smoothness) && isSmoothInteger(denominator, smoothness)
}

export {
    isSmoothRatio,
}
