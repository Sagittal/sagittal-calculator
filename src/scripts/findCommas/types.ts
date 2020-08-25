import {
    ApotomeSlope,
    Cents,
    Copfr,
    Exponent,
    Max,
    Min,
    Monzo,
    N2D3P9,
    Prime,
    PrimeExponentExtrema,
    Sopfr,
} from "../../general"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions, ComputeFiveSlicedMonzosToCheckOptions {
    fiveSlicedMonzo?: Monzo<5>,
    sortKey: string, // TODO: a type for keys
}

type ComputeCommasFromFiveSlicedMonzoOptions = Partial<{
    lowerBound: Min<Cents>, // TODO: all lower and upper bounds should just be min cents and max cents
    maxAbsoluteThreeExponent: Max<Exponent<Prime>>,
    maxApotomeSlope: Max<ApotomeSlope>,
    upperBound: Max<Cents>,
    maxN2D3P9: Max<N2D3P9>,
}>

type ComputeFiveSlicedMonzosToCheckOptions = Partial<{
    maxFiveRoughCopfr: Max<Copfr<5>>,
    maxFiveRoughSopfr: Max<Sopfr<5>>,
    maxPrimeLimit: Max<Max<Prime>>,
    maxN2D3P9: Max<N2D3P9>,
}>

type ComputePrimeExponentRangeOptions = Partial<{
    maxFiveRoughCopfr: Max<Copfr<5>>,
    maxFiveRoughSopfr: Max<Sopfr<5>>,
    primeExponentExtremaGivenMaxN2D3P9?: PrimeExponentExtrema,
}>

export {
    ComputeCommasOptions,
    ComputeCommasFromFiveSlicedMonzoOptions,
    ComputeFiveSlicedMonzosToCheckOptions,
    ComputePrimeExponentRangeOptions,
}
