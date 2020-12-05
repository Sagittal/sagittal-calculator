import {
    add,
    computeRange,
    Copfr,
    Decimal,
    Exponent,
    Extrema,
    integerDivide,
    Max,
    max,
    Min,
    min,
    ONE,
    Prime,
    Range,
    Sopfr,
} from "@sagittal/general"
import {PrimeExponentRangeOptions} from "./types"

const computePrimeExponentRange = (
    prime: Prime,
    options: PrimeExponentRangeOptions = {},
): Range<Decimal<{integer: true}> & Exponent<Prime>> => {
    const {
        max23FreeSopfr = Infinity as Sopfr<{rough: 5}>,
        max23FreeCopfr = Infinity as Copfr<{rough: 5}>,
        primeExponentExtremaGivenMaxN2D3P9,
    } = options

    if (max23FreeSopfr === Infinity && max23FreeCopfr === Infinity && !primeExponentExtremaGivenMaxN2D3P9) {
        throw new Error("The range must be constrained somehow.")
    }

    const [minPrimeExponentGivenMaxN2D3P9, maxPrimeExponentGivenMaxN2D3P9]:
        Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}> =
    primeExponentExtremaGivenMaxN2D3P9 || [-Infinity, Infinity] as
        Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>

    const maxPrimeExponentGivenMaxSopfr: Max<Decimal<{integer: true}> & Exponent<Prime>> =
        integerDivide(max23FreeSopfr, prime) as number as Max<Decimal<{integer: true}> & Exponent<Prime>>
    const maxPrimeExponentGivenMaxCopfr: Max<Decimal<{integer: true}> & Exponent<Prime>> =
        max23FreeCopfr as number as Max<Decimal<{integer: true}> & Exponent<Prime>>

    const minPrimeExponentGivenMaxSopfr: Min<Decimal<{integer: true}> & Exponent<Prime>> =
        -maxPrimeExponentGivenMaxSopfr as Min<Decimal<{integer: true}> & Exponent<Prime>>
    const minPrimeExponentGivenMaxCopfr: Min<Decimal<{integer: true}> & Exponent<Prime>> =
        -max23FreeCopfr as Min<Decimal<{integer: true}> & Exponent<Prime>>

    const maxPrimeExponent: Min<Max<Decimal<{integer: true}> & Exponent<Prime>>> = min(
        maxPrimeExponentGivenMaxSopfr,
        maxPrimeExponentGivenMaxN2D3P9,
        maxPrimeExponentGivenMaxCopfr,
    )

    const minPrimeExponent: Decimal<{integer: true}> & Max<Min<Decimal<{integer: true}> & Exponent<Prime>>> = max(
        minPrimeExponentGivenMaxSopfr,
        minPrimeExponentGivenMaxN2D3P9,
        minPrimeExponentGivenMaxCopfr,
    )

    return computeRange(
        minPrimeExponent,
        add(maxPrimeExponent, ONE),
    ) as Range<Decimal<{integer: true}> & Exponent<Prime>>
}

export {
    computePrimeExponentRange,
}
