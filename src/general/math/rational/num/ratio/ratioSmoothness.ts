import { NumTypeParameters } from "../../../num"
import { isSmoothInteger } from "../../smoothness"
import { Primes, Smoothness } from "../../types"
import { RationalRatio } from "./types"

const isSmoothRationalRatio = <S extends Primes, T extends NumTypeParameters>(
    rationalRatio: RationalRatio<T>,
    smoothness: S & Smoothness,
): rationalRatio is RationalRatio<T & { smooth: S }> => {
    const [numerator, denominator] = rationalRatio

    return isSmoothInteger(numerator, smoothness) && isSmoothInteger(denominator, smoothness)
}

export {
    isSmoothRationalRatio,
}
