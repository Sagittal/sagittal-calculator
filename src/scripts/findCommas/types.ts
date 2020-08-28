import {
    Cents,
    Copfr,
    Exponent,
    Extrema,
    Integer,
    Max,
    Min,
    Monzo,
    ObjectKey,
    Prime,
    Sopfr,
} from "../../general"
import { ApotomeSlope, N2D3P9 } from "../../sagittal"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions, ComputeFiveSlicedMonzosToCheckOptions {
    fiveSlicedMonzo?: Monzo<Integer, 5>,
    sortKey: ObjectKey,
}

type ComputeCommasFromFiveSlicedMonzoOptions = Partial<{
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAbsoluteThreeExponent: Max<Exponent<Prime>>,
    maxApotomeSlope: Max<ApotomeSlope>,
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
    primeExponentExtremaGivenMaxN2D3P9?: Extrema<Exponent<Prime>>,
}>

export {
    ComputeCommasOptions,
    ComputeCommasFromFiveSlicedMonzoOptions,
    ComputeFiveSlicedMonzosToCheckOptions,
    ComputePrimeExponentRangeOptions,
}
