import {
    add,
    computeRange,
    Copfr,
    Exponent,
    Extrema,
    IntegerDecimal,
    integerDivide,
    Max,
    max,
    Min,
    min,
    ONE,
    Prime,
    Range,
    Sopfr,
} from "../../../general"
import { PrimeExponentRangeOptions } from "./types"

const computePrimeExponentRange = (
    prime: Prime,
    options: PrimeExponentRangeOptions = {},
): Range<IntegerDecimal & Exponent<Prime>> => {
    const {
        max23FreeSopfr = Infinity as Sopfr<{ rough: 5 }>,
        max23FreeCopfr = Infinity as Copfr<{ rough: 5 }>,
        primeExponentExtremaGivenMaxN2D3P9,
    } = options

    if (max23FreeSopfr === Infinity && max23FreeCopfr === Infinity && !primeExponentExtremaGivenMaxN2D3P9) {
        throw new Error("The range must be constrained somehow.")
    }

    const [minPrimeExponentGivenMaxN2D3P9, maxPrimeExponentGivenMaxN2D3P9]: Extrema<IntegerDecimal & Exponent<Prime>> =
    primeExponentExtremaGivenMaxN2D3P9 || [-Infinity, Infinity] as Extrema<IntegerDecimal & Exponent<Prime>>

    const maxPrimeExponentGivenMaxSopfr: Max<IntegerDecimal & Exponent<Prime>> =
        integerDivide(max23FreeSopfr, prime) as number as Max<IntegerDecimal & Exponent<Prime>>
    const maxPrimeExponentGivenMaxCopfr: Max<IntegerDecimal & Exponent<Prime>> =
        max23FreeCopfr as number as Max<IntegerDecimal & Exponent<Prime>>

    const minPrimeExponentGivenMaxSopfr: Min<IntegerDecimal & Exponent<Prime>> =
        -maxPrimeExponentGivenMaxSopfr as Min<IntegerDecimal & Exponent<Prime>>
    const minPrimeExponentGivenMaxCopfr: Min<IntegerDecimal & Exponent<Prime>> =
        -max23FreeCopfr as Min<IntegerDecimal & Exponent<Prime>>

    const maxPrimeExponent: Min<Max<IntegerDecimal & Exponent<Prime>>> = min(
        maxPrimeExponentGivenMaxSopfr,
        maxPrimeExponentGivenMaxN2D3P9,
        maxPrimeExponentGivenMaxCopfr,
    )

    const minPrimeExponent: IntegerDecimal & Max<Min<IntegerDecimal & Exponent<Prime>>> = max(
        minPrimeExponentGivenMaxSopfr,
        minPrimeExponentGivenMaxN2D3P9,
        minPrimeExponentGivenMaxCopfr,
    )

    return computeRange(minPrimeExponent, add(maxPrimeExponent, ONE)) as Range<IntegerDecimal & Exponent<Prime>>
}

export {
    computePrimeExponentRange,
}
