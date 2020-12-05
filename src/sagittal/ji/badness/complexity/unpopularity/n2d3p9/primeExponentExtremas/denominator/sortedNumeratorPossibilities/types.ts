import {Denominator, Of, Prime} from "@sagittal/general"
import {NumeratorPossibilityForDenominatorGivenMaxN2D3P9} from "./numeratorPossibilities"

type N2 = number & {_N2Brand: boolean}
type N2P = number & {_N2PBrand: boolean}

type NumeratorPossibilityWithLesserGpfThanDenominatorPrime = NumeratorPossibilityForDenominatorGivenMaxN2D3P9 &
    {_WithLesserGpfThanDenominatorPrimeBrand: boolean}
type NumeratorPossibilityWithGreaterGpfThanDenominatorPrime = NumeratorPossibilityForDenominatorGivenMaxN2D3P9 &
    {_WithGreaterGpfThanDenominatorPrimeBrand: boolean}

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
    denominatorPrime: Prime & Of<Denominator>,
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
