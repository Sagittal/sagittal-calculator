import { Copfr, Exponent, Extrema, IntegerDecimal, KeyPath, Max, Prime, Sopfr } from "../../../general"
import { CommasFrom23FreeMonzoOptions, N2D3P9 } from "../../../sagittal"

type CommasOptions = CommasFrom23FreeMonzoOptions & Two3FreeMonzosToCheckOptions & Partial<{
    sortKey: KeyPath,
}>

type Two3FreeMonzosToCheckOptions = Partial<FindCommasSettings & { maxN2D3P9: Max<N2D3P9> }>

type PrimeExponentRangeOptions = Partial<{
    max23FreeCopfr: Max<Copfr<{ rough: 5 }>>,
    max23FreeSopfr: Max<Sopfr<{ rough: 5 }>>,
    primeExponentExtremaGivenMaxN2D3P9: Extrema<IntegerDecimal & Exponent<Prime>>,
}>

type Two3FreePrimesToCheckOptions = Partial<{
    maxPrimeLimit: Max<Max<Prime>>,
    max23FreeSopfr: Max<Sopfr<{ rough: 5 }>>,
    primeExponentExtremasGivenMaxN2D3P9: Array<Extrema<IntegerDecimal & Exponent<Prime>>>,
}>

interface FindCommasSettings extends Required<CommasFrom23FreeMonzoOptions> {
    maxPrimeLimit: Max<Max<Prime>>,
    max23FreeCopfr: Max<Copfr<{ rough: 5 }>>,
    max23FreeSopfr: Max<Sopfr<{ rough: 5 }>>,
}

export {
    CommasOptions,
    PrimeExponentRangeOptions,
    Two3FreeMonzosToCheckOptions,
    Two3FreePrimesToCheckOptions,
    FindCommasSettings,
}
