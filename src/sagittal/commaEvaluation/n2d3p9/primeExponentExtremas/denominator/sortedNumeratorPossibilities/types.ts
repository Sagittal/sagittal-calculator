import { Denominator, Prime } from "../../../../../../general"
import { NumeratorPossibilityGivenMaxN2D3P3 } from "./numeratorPossibilities"

type N2 = number & { _N2Brand: "N2" }
type N2P = number & { _N2PBrand: "N2P" }

type NumeratorPossibilityWithLesserGpfThanDenominatorPrime = NumeratorPossibilityGivenMaxN2D3P3 &
    { _WithLesserGpfThanDenominatorPrimeBrand: "WithLesserGpfThanDenominatorPrime" }
type NumeratorPossibilityWithGreaterGpfThanDenominatorPrime = NumeratorPossibilityGivenMaxN2D3P3 &
    { _WithGreaterGpfThanDenominatorPrimeBrand: "WithGreaterGpfThanDenominatorPrime" }

interface SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2
    extends NumeratorPossibilityWithLesserGpfThanDenominatorPrime {
    n2: N2,
}

interface SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P
    extends NumeratorPossibilityWithGreaterGpfThanDenominatorPrime {
    n2p: N2P,
}

interface SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 {
    sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2:
        SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
    sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P:
        SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
}

interface ComputeSortedNumeratorPossibilitiesOptions {
    denominatorPrime: Prime<Denominator>,
    numeratorPossibilitiesGivenMaxN2D3P3: NumeratorPossibilityGivenMaxN2D3P3[],
}

export {
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    N2,
    N2P,
    SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
    ComputeSortedNumeratorPossibilitiesOptions,
}