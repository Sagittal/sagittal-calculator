import { Abs, Cents, Copfr, Exponent, Extrema, Integer, Max, Min, ObjectKey, Prime, Sopfr } from "../../general"
import { ApotomeSlope, N2D3P9 } from "../../sagittal"

interface CommasOptions extends CommasFromFiveSlicedMonzoOptions, FiveSlicedMonzosToCheckOptions {
    sortKey?: ObjectKey,
}

type CommasFromFiveSlicedMonzoOptions = Partial<{
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAbsoluteThreeExponent: Max<Abs<Integer & Exponent<Prime>>>,
    maxAbsoluteApotomeSlope: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
}>

type FiveSlicedMonzosToCheckOptions = Partial<{
    maxFiveRoughCopfr: Max<Copfr<5>>,
    maxFiveRoughSopfr: Max<Sopfr<5>>,
    maxPrimeLimit: Max<Max<Prime>>,
    maxN2D3P9: Max<N2D3P9>,
}>

type PrimeExponentRangeOptions = Partial<{
    maxFiveRoughCopfr: Max<Copfr<5>>,
    maxFiveRoughSopfr: Max<Sopfr<5>>,
    primeExponentExtremaGivenMaxN2D3P9?: Extrema<Integer & Exponent<Prime>>,
}>

export {
    CommasOptions,
    CommasFromFiveSlicedMonzoOptions,
    FiveSlicedMonzosToCheckOptions,
    PrimeExponentRangeOptions,
}
