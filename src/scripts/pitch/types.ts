import { Abs, Cents, Copfr, Exponent, Extrema, Max, Min, ObjectKey, Prime, Sopfr } from "../../general"
import { AnalyzedRationalPitch, ApotomeSlope, N2D3P9, SymbolLongAscii } from "../../sagittal"

interface ComputeCommasOptions extends ComputeCommasFromFiveSlicedMonzoOptions, ComputeFiveSlicedMonzosToCheckOptions {
    sortKey?: ObjectKey,
}

type ComputeCommasFromFiveSlicedMonzoOptions = Partial<{
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAbsoluteThreeExponent: Max<Abs<Exponent<Prime>>>,
    maxAbsoluteApotomeSlope: Max<Abs<ApotomeSlope>>,
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

interface AnalyzedRationalPitchWithMaybeSagittalSymbol extends AnalyzedRationalPitch {
    symbol?: SymbolLongAscii
}


export {
    ComputeCommasOptions,
    ComputeCommasFromFiveSlicedMonzoOptions,
    ComputeFiveSlicedMonzosToCheckOptions,
    ComputePrimeExponentRangeOptions,
    AnalyzedRationalPitchWithMaybeSagittalSymbol,
}
