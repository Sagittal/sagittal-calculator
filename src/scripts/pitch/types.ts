import { Copfr, Exponent, Extrema, Integer, Max, ObjectKey, Prime, Sopfr } from "../../general"
import { CommaNameOptions, CommasFromFiveSlicedMonzoOptions, N2D3P9 } from "../../sagittal"

type CommasOptions = CommasFromFiveSlicedMonzoOptions & FiveSlicedMonzosToCheckOptions & Partial<{
    sortKey: ObjectKey,
    commaNameOptions: CommaNameOptions,
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
    primeExponentExtremaGivenMaxN2D3P9: Extrema<Integer & Exponent<Prime>>,
}>

type FiveRoughPrimesToCheckOptions = Partial<{
    maxPrimeLimit: Max<Max<Prime>>,
    maxFiveRoughSopfr: Max<Sopfr<5>>,
    primeExponentExtremasGivenMaxN2D3P9: Array<Extrema<Integer & Exponent<Prime>>>,
}>

export {
    FiveRoughPrimesToCheckOptions,
    CommasOptions,
    FiveSlicedMonzosToCheckOptions,
    PrimeExponentRangeOptions,
}
