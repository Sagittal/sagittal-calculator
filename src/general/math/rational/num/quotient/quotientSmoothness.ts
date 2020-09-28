import { NumTypeParameters } from "../../../num"
import { isSmoothInteger } from "../../smoothness"
import { Primes, Smoothness } from "../../types"
import { RationalQuotient } from "./types"

const isSmoothRationalQuotient = <S extends Primes, T extends NumTypeParameters>(
    rationalQuotient: RationalQuotient<T>,
    smoothness: S & Smoothness,
): rationalQuotient is RationalQuotient<T & { smooth: S }> => {
    const [numerator, denominator] = rationalQuotient

    return isSmoothInteger(numerator, smoothness) && isSmoothInteger(denominator, smoothness)
}

export {
    isSmoothRationalQuotient,
}
