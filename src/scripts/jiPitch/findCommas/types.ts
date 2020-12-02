import {Copfr, Decimal, Exponent, Extrema, Max, Prime, Sopfr} from "../../../general"
import {CommasFrom23FreeMonzoOptions} from "../../../sagittal"

interface FindCommasOptions extends Required<CommasFrom23FreeMonzoOptions> {
    maxPrimeLimit: Max<Max<Prime>>,
    max23FreeCopfr: Max<Copfr<{rough: 5}>>,
    max23FreeSopfr: Max<Sopfr<{rough: 5}>>,
}

type PrimeExponentRangeOptions = Partial<{
    max23FreeCopfr: Max<Copfr<{rough: 5}>>,
    max23FreeSopfr: Max<Sopfr<{rough: 5}>>,
    primeExponentExtremaGivenMaxN2D3P9: Extrema<Decimal<{integer: true}> & Exponent<Prime>>,
}>

type Two3FreePrimesToCheckOptions = Partial<{
    maxPrimeLimit: Max<Max<Prime>>,
    max23FreeSopfr: Max<Sopfr<{rough: 5}>>,
    primeExponentExtremasGivenMaxN2D3P9: Array<Extrema<Decimal<{integer: true}> & Exponent<Prime>>>,
}>

export {
    PrimeExponentRangeOptions,
    Two3FreePrimesToCheckOptions,
    FindCommasOptions,
}
