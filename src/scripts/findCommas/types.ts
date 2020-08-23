import { ApotomeSlope, Cents, Copfr, Exponent, Monzo, N2D3P9, Prime, Sopfr } from "../../general"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions, ComputeFiveSlicedMonzosToCheckOptions {
    fiveSlicedMonzo?: Monzo<5>,
    sortKey: string,
}

type ComputeCommasFromFiveSlicedMonzoOptions = Partial<{
    lowerBound: Cents,
    maximumAbsoluteThreeExponent: Exponent<Prime>,
    maximumApotomeSlope: ApotomeSlope,
    upperBound: Cents,
    maximumN2D3P9: N2D3P9,
}>

type ComputeFiveSlicedMonzosToCheckOptions = Partial<{
    maximumFiveRoughCopfr: Copfr<5>,
    maximumFiveRoughSopfr: Sopfr<5>,
    maximumPrimeLimit: Prime,
    maximumN2D3P9: N2D3P9,
}>

type ComputePrimeExponentRangeOptions = Partial<{
    maximumFiveRoughCopfr: Copfr<5>,
    maximumFiveRoughSopfr: Sopfr<5>,
    primeExponentExtremaGivenMaximumN2D3P9?: PrimeExponentExtrema,
}>

export {
    ComputeCommasOptions,
    ComputeCommasFromFiveSlicedMonzoOptions,
    ComputeFiveSlicedMonzosToCheckOptions,
    ComputePrimeExponentRangeOptions,
}
