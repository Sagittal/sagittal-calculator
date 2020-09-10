import { Copfr, Exponent, Extrema, Integer, Max, ObjectKey, Prime, Sopfr } from "../../general"
import { CommasFrom23FreeMonzoOptions, N2D3P9 } from "../../sagittal"

type CommasOptions = CommasFrom23FreeMonzoOptions & FiveSlicedMonzosToCheckOptions & Partial<{
    sortKey: ObjectKey,
}>

type FiveSlicedMonzosToCheckOptions = Partial<{
    max23FreeCopfr: Max<Copfr<5>>,
    max23FreeSopfr: Max<Sopfr<5>>,
    maxPrimeLimit: Max<Max<Prime>>,
    maxN2D3P9: Max<N2D3P9>,
}>

type PrimeExponentRangeOptions = Partial<{
    max23FreeCopfr: Max<Copfr<5>>,
    max23FreeSopfr: Max<Sopfr<5>>,
    primeExponentExtremaGivenMaxN2D3P9: Extrema<Integer & Exponent<Prime>>,
}>

type TwoThreeFreePrimesToCheckOptions = Partial<{
    maxPrimeLimit: Max<Max<Prime>>,
    max23FreeSopfr: Max<Sopfr<5>>,
    primeExponentExtremasGivenMaxN2D3P9: Array<Extrema<Integer & Exponent<Prime>>>,
}>

export {
    TwoThreeFreePrimesToCheckOptions,
    CommasOptions,
    FiveSlicedMonzosToCheckOptions,
    PrimeExponentRangeOptions,
}
