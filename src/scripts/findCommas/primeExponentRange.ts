import { computeRange, Copfr, Prime, Sopfr } from "../../general"
import { ComputePrimeExponentRangeOptions } from "./types"

const computePrimeExponentRange = (prime: Prime, options: ComputePrimeExponentRangeOptions = {}): number[] => {
    const {
        maximumFiveRoughSopfr = Infinity as Sopfr<5>,
        maximumFiveRoughCopfr = Infinity as Copfr<5>,
        primeExponentExtremaGivenMaximumN2D3P9,
    } = options

    if (maximumFiveRoughSopfr === Infinity && maximumFiveRoughCopfr === Infinity && !primeExponentExtremaGivenMaximumN2D3P9) {
        throw new Error("The range must be limited somehow.")
    }

    const [minimumExponentForPrimeGivenMaximumN2D3P9, maximumExponentForPrimeGivenMaximumN2D3P9] = primeExponentExtremaGivenMaximumN2D3P9 || [-Infinity, Infinity]

    // TODO: also take integerDivide from Musical Pattern's utilities repo
    //  for places where you're using floor on a division
    const maximumExponentForPrimeGivenMaximumSopfr = Math.floor(maximumFiveRoughSopfr / prime)

    const minimumExponentForPrimeGivenMaximumSopfr = -maximumExponentForPrimeGivenMaximumSopfr
    const minimumFiveRoughCopfr = -maximumFiveRoughCopfr

    const maximumPrimeExponent: number = Math.min(
        maximumExponentForPrimeGivenMaximumSopfr,
        maximumExponentForPrimeGivenMaximumN2D3P9,
        maximumFiveRoughCopfr,
    )

    const minimumPrimeExponent = Math.max(
        minimumExponentForPrimeGivenMaximumSopfr,
        minimumExponentForPrimeGivenMaximumN2D3P9,
        minimumFiveRoughCopfr,
    )

    return computeRange(minimumPrimeExponent, maximumPrimeExponent + 1)
}

export {
    computePrimeExponentRange,
}
