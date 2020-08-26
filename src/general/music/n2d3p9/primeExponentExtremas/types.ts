import { Denominator, Exponent, Max, Min, Numerator, Prime } from "../../../math"

type N2 = number & { _N2Brand: "N2" }
type N2P = number & { _N2PBrand: "N2P" }

interface NumeratorPossibilityGivenMaxN2D3P3 {
    numerator: Numerator,
    gpf: Prime,
}

type NumeratorPossibilityWithLesserGpfThanDenominatorPrime = NumeratorPossibilityGivenMaxN2D3P3 &
    { _WithLesserGpfThanDenominatorPrimeBrand: "WithLesserGpfThanDenominatorPrime" }
type NumeratorPossibilityWithGreaterGpfThanDenominatorPrime = NumeratorPossibilityGivenMaxN2D3P3 &
    { _WithGreaterGpfThanDenominatorPrimeBrand: "WithGreaterGpfThanDenominatorPrime" }

interface SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 extends NumeratorPossibilityWithLesserGpfThanDenominatorPrime {
    n2: N2,
}

interface SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P extends NumeratorPossibilityWithGreaterGpfThanDenominatorPrime {
    n2p: N2P,
}

interface SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 {
    sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
    sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
}

interface ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions {
    denominatorPrime: Prime<Denominator>,
    candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Exponent<Prime<Denominator>>>,
}

interface ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options extends ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions {
    sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9: SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}

interface ComputeSortedNumeratorPossibilitiesOptions {
    denominatorPrime: Prime<Denominator>,
    numeratorPossibilitiesGivenMaxN2D3P3: NumeratorPossibilityGivenMaxN2D3P3[],
}

export {
    NumeratorPossibilityGivenMaxN2D3P3,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    N2,
    N2P,
    ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
    ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions,
    ComputeSortedNumeratorPossibilitiesOptions,
    SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}
