import { NumTypeParameters } from "../../../num"
import { Primes, Smoothness } from "../../types"
import { isSmoothIntegerDecimal } from "../decimal"
import { RationalQuotient } from "./types"

const isSmoothRationalQuotient = <S extends Primes, T extends NumTypeParameters>(
    rationalQuotient: RationalQuotient<T>,
    smoothness: S & Smoothness,
): rationalQuotient is RationalQuotient<T & { smooth: S }> => {
    const [numerator, denominator] = rationalQuotient

    return isSmoothIntegerDecimal(numerator, smoothness) && isSmoothIntegerDecimal(denominator, smoothness)
}

export {
    isSmoothRationalQuotient,
}
