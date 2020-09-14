import { Abs, Cents, Copfr, Exponent, Extrema, Integer, Max, Min, ObjectKey, Prime, Sopfr } from "../../general"
import { ApotomeSlope, CommaNameOptions, CommasFrom23FreeMonzoOptions, N2D3P9 } from "../../sagittal"

type CommasOptions = CommasFrom23FreeMonzoOptions & FiveSlicedMonzosToCheckOptions & Partial<{
    sortKey: ObjectKey,
}>

type FiveSlicedMonzosToCheckOptions = Partial<TwoThreeFreeClassSettings & { maxN2D3P9: Max<N2D3P9> }>

type PrimeExponentRangeOptions = Partial<{
    max23FreeCopfr: Max<Copfr<{ rough: 5 }>>,
    max23FreeSopfr: Max<Sopfr<{ rough: 5 }>>,
    primeExponentExtremaGivenMaxN2D3P9: Extrema<Integer & Exponent<Prime>>,
}>

type TwoThreeFreePrimesToCheckOptions = Partial<{
    maxPrimeLimit: Max<Max<Prime>>,
    max23FreeSopfr: Max<Sopfr<{ rough: 5 }>>,
    primeExponentExtremasGivenMaxN2D3P9: Array<Extrema<Integer & Exponent<Prime>>>,
}>

interface TwoThreeFreeClassSettings {
    max23FreeCopfr: Max<Copfr<{ rough: 5 }>>,
    max23FreeSopfr: Max<Sopfr<{ rough: 5 }>>,
    maxPrimeLimit: Max<Max<Prime>>,
}

interface JiPitchScriptGroupSettings {
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAte: Max<Abs<3 & Integer & Exponent<Prime>>>,
    maxAas: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
    sortKey: ObjectKey,
    commaNameOptions: CommaNameOptions,
}

export {
    TwoThreeFreePrimesToCheckOptions,
    CommasOptions,
    FiveSlicedMonzosToCheckOptions,
    PrimeExponentRangeOptions,
    TwoThreeFreeClassSettings,
    JiPitchScriptGroupSettings,
}
