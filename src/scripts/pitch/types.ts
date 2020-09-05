import { Copfr, Exponent, Extrema, Integer, Max, ObjectKey, Prime, Sopfr } from "../../general"
import { CommasFromFiveSlicedMonzoOptions, N2D3P9 } from "../../sagittal"

interface CommasOptions extends CommasFromFiveSlicedMonzoOptions, FiveSlicedMonzosToCheckOptions {
    sortKey?: ObjectKey,
}

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
    FiveSlicedMonzosToCheckOptions,
    PrimeExponentRangeOptions,
}
