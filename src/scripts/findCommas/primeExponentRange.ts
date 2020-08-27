import {
    computeRange,
    Copfr,
    Exponent,
    Extrema,
    floor,
    Max,
    max,
    Min,
    min,
    ONE,
    Prime,
    Range,
    Sopfr,
    sum,
} from "../../general"
import { ComputePrimeExponentRangeOptions } from "./types"

const computePrimeExponentRange = (
    prime: Prime,
    options: ComputePrimeExponentRangeOptions = {},
): Range<Exponent<Prime>> => {
    const {
        maxFiveRoughSopfr = Infinity as Sopfr<5>,
        maxFiveRoughCopfr = Infinity as Copfr<5>,
        primeExponentExtremaGivenMaxN2D3P9,
    } = options

    if (maxFiveRoughSopfr === Infinity && maxFiveRoughCopfr === Infinity && !primeExponentExtremaGivenMaxN2D3P9) {
        throw new Error("The range must be limited somehow.")
    }

    const [minPrimeExponentGivenMaxN2D3P9, maxPrimeExponentGivenMaxN2D3P9]: Extrema<Exponent<Prime>> =
    primeExponentExtremaGivenMaxN2D3P9 || [-Infinity, Infinity] as Extrema<Exponent<Prime>>

    // TODO: also take integerDivide from Musical Pattern's utilities repo
    //  for places where you're using floor on a division
    const maxPrimeExponentGivenMaxSopfr: Max<Exponent<Prime>> = floor(maxFiveRoughSopfr / prime) as Max<Exponent<Prime>>
    const maxPrimeExponentGivenMaxCopfr: Max<Exponent<Prime>> = maxFiveRoughCopfr as number as Max<Exponent<Prime>>

    const minPrimeExponentGivenMaxSopfr: Min<Exponent<Prime>> = -maxPrimeExponentGivenMaxSopfr as Min<Exponent<Prime>>
    const minPrimeExponentGivenMaxCopfr: Min<Exponent<Prime>> = -maxFiveRoughCopfr as Min<Exponent<Prime>>

    const maxPrimeExponent: Min<Max<Exponent<Prime>>> = min(
        maxPrimeExponentGivenMaxSopfr,
        maxPrimeExponentGivenMaxN2D3P9,
        maxPrimeExponentGivenMaxCopfr,
    )

    const minPrimeExponent: Max<Min<Exponent<Prime>>> = max(
        minPrimeExponentGivenMaxSopfr,
        minPrimeExponentGivenMaxN2D3P9,
        minPrimeExponentGivenMaxCopfr,
    )

    return computeRange(minPrimeExponent, sum(maxPrimeExponent, ONE)) as Range<Exponent<Prime>>
}

export {
    computePrimeExponentRange,
}
