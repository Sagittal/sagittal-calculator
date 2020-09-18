import {
    add,
    computeRange,
    Copfr,
    Exponent,
    Extrema,
    Integer,
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
): Range<Integer & Exponent<Prime>> => {
    const {
        max23FreeSopfr = Infinity as Sopfr<{ rough: 5 }>,
        max23FreeCopfr = Infinity as Copfr<{ rough: 5 }>,
        primeExponentExtremaGivenMaxN2D3P9,
    } = options

    if (max23FreeSopfr === Infinity && max23FreeCopfr === Infinity && !primeExponentExtremaGivenMaxN2D3P9) {
        throw new Error("The range must be constrained somehow.")
    }

    const [minPrimeExponentGivenMaxN2D3P9, maxPrimeExponentGivenMaxN2D3P9]: Extrema<Integer & Exponent<Prime>> =
    primeExponentExtremaGivenMaxN2D3P9 || [-Infinity, Infinity] as Extrema<Integer & Exponent<Prime>>

    const maxPrimeExponentGivenMaxSopfr: Max<Integer & Exponent<Prime>> =
        integerDivide(max23FreeSopfr, prime) as number as Max<Integer & Exponent<Prime>>
    const maxPrimeExponentGivenMaxCopfr: Max<Integer & Exponent<Prime>> =
        max23FreeCopfr as number as Max<Integer & Exponent<Prime>>

    const minPrimeExponentGivenMaxSopfr: Min<Integer & Exponent<Prime>> =
        -maxPrimeExponentGivenMaxSopfr as Min<Integer & Exponent<Prime>>
    const minPrimeExponentGivenMaxCopfr: Min<Integer & Exponent<Prime>> =
        -max23FreeCopfr as Min<Integer & Exponent<Prime>>

    const maxPrimeExponent: Min<Max<Integer & Exponent<Prime>>> = min(
        maxPrimeExponentGivenMaxSopfr,
        maxPrimeExponentGivenMaxN2D3P9,
        maxPrimeExponentGivenMaxCopfr,
    )

    const minPrimeExponent: Integer & Max<Min<Integer & Exponent<Prime>>> = max(
        minPrimeExponentGivenMaxSopfr,
        minPrimeExponentGivenMaxN2D3P9,
        minPrimeExponentGivenMaxCopfr,
    )

    return computeRange(minPrimeExponent, add(maxPrimeExponent, ONE)) as Range<Integer & Exponent<Prime>>
}

export {
    computePrimeExponentRange,
}
