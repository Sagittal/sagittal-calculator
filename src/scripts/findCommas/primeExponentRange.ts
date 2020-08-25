import { computeRange, Copfr, Exponent, Prime, Sopfr } from "../../general"
import { ComputePrimeExponentRangeOptions } from "./types"

const computePrimeExponentRange = (prime: Prime, options: ComputePrimeExponentRangeOptions = {}): Array<Exponent<Prime>> => {
    const {
        maxFiveRoughSopfr = Infinity as Sopfr<5>,
        maxFiveRoughCopfr = Infinity as Copfr<5>,
        primeExponentExtremaGivenMaxN2D3P9,
    } = options

    if (maxFiveRoughSopfr === Infinity && maxFiveRoughCopfr === Infinity && !primeExponentExtremaGivenMaxN2D3P9) {
        throw new Error("The range must be limited somehow.")
    }

    const [minExponentForPrimeGivenMaxN2D3P9, maxExponentForPrimeGivenMaxN2D3P9] = primeExponentExtremaGivenMaxN2D3P9 || [-Infinity, Infinity]

    // TODO: also take integerDivide from Musical Pattern's utilities repo
    //  for places where you're using floor on a division
    const maxExponentForPrimeGivenMaxSopfr = Math.floor(maxFiveRoughSopfr / prime)

    const minExponentForPrimeGivenMaxSopfr = -maxExponentForPrimeGivenMaxSopfr
    const minFiveRoughCopfr = -maxFiveRoughCopfr

    const maxPrimeExponent: number = Math.min(
        maxExponentForPrimeGivenMaxSopfr,
        maxExponentForPrimeGivenMaxN2D3P9,
        maxFiveRoughCopfr,
    )

    const minPrimeExponent = Math.max(
        minExponentForPrimeGivenMaxSopfr,
        minExponentForPrimeGivenMaxN2D3P9,
        minFiveRoughCopfr,
    )

    return computeRange(minPrimeExponent, maxPrimeExponent + 1) as Array<Exponent<Prime>> // TODO: Range<>
}

export {
    computePrimeExponentRange,
}
