import { Denominator, Prime } from "../../../../../../../general"
import { NumeratorPossibilityForDenominatorGivenMaxN2D3P9 } from "./numeratorPossibilities"

type N2 = number & { _N2Brand: "N2" }
type N2P = number & { _N2PBrand: "N2P" }

type NumeratorPossibilityWithLesserGpfThanDenominatorPrime = NumeratorPossibilityForDenominatorGivenMaxN2D3P9 &
    { _WithLesserGpfThanDenominatorPrimeBrand: "WithLesserGpfThanDenominatorPrime" }
type NumeratorPossibilityWithGreaterGpfThanDenominatorPrime = NumeratorPossibilityForDenominatorGivenMaxN2D3P9 &
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

interface SortedNumeratorPossibilitiesOptions {
    denominatorPrime: Denominator & Prime,
    numeratorPossibilitiesForDenominatorGivenMaxN2D3P9: NumeratorPossibilityForDenominatorGivenMaxN2D3P9[],
}

export {
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    N2,
    N2P,
    SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
    SortedNumeratorPossibilitiesOptions,
}
