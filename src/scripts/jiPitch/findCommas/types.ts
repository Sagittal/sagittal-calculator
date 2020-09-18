import { Abs, Cents, Copfr, Exponent, Extrema, Integer, Max, Min, ObjectKey, Prime, Sopfr } from "../../../general"
import { ApotomeSlope, CommasFrom23FreeMonzoOptions, N2D3P9 } from "../../../sagittal"

type CommasOptions = CommasFrom23FreeMonzoOptions & TwoThreeFreeMonzosToCheckOptions & Partial<{
    sortKey: ObjectKey,
}>

type TwoThreeFreeMonzosToCheckOptions = Partial<FindCommasSettings & { maxN2D3P9: Max<N2D3P9> }>

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

interface FindCommasSettings {
    maxN2D3P9: Max<N2D3P9>,
    max23FreeCopfr: Max<Copfr<{ rough: 5 }>>,
    max23FreeSopfr: Max<Sopfr<{ rough: 5 }>>,
    maxPrimeLimit: Max<Max<Prime>>,
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAte: Max<Abs<3 & Integer & Exponent<Prime>>>,
    maxAas: Max<Abs<ApotomeSlope>>,
}

export {
    CommasOptions,
    PrimeExponentRangeOptions,
    TwoThreeFreeMonzosToCheckOptions,
    TwoThreeFreePrimesToCheckOptions,
    FindCommasSettings,
}
