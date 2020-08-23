import { Exponent, Numerator } from "../../../math"
import { Prime } from "../../../types"

type N2 = number & { _N2Brand: "N2" }
type N2P = number & { _N2PBrand: "N2P" }

interface NumeratorPossibilityGivenMaximumN2D3P3 {
    numerator: Numerator,
    gpf: Prime,
}

type NumeratorPossibilityWithLesserGpfThanDenominatorPrime = NumeratorPossibilityGivenMaximumN2D3P3 &
    { _WithLesserGpfThanDenominatorPrimeBrand: "WithLesserGpfThanDenominatorPrime" }
type NumeratorPossibilityWithGreaterGpfThanDenominatorPrime = NumeratorPossibilityGivenMaximumN2D3P3 &
    { _WithGreaterGpfThanDenominatorPrimeBrand: "WithGreaterGpfThanDenominatorPrime" }

interface NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 extends NumeratorPossibilityWithLesserGpfThanDenominatorPrime {
    n2: N2,
}

interface NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P extends NumeratorPossibilityWithGreaterGpfThanDenominatorPrime {
    n2p: N2P,
}

interface SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 {
    numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
    numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
}

interface ComputeD39ForCandidateMaximumDenominatorPrimeExponentOptions {
    denominatorPrime: Prime,
    candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9: Exponent<Prime>,
}

interface ComputeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9Options extends ComputeD39ForCandidateMaximumDenominatorPrimeExponentOptions {
    sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9: SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
}

// TODO: some of these options types are shared among multiple functions even though they are named only for one;
//  this might be a good place to use that method where each thing which can be an option
//  has an individual existence as an option
//  and then you just mix & match them

interface ComputeSortedNumeratorPossibilitiesOptions {
    denominatorPrime: Prime,
    numeratorPossibilitiesGivenMaximumN2D3P3: NumeratorPossibilityGivenMaximumN2D3P3[],
}

type PrimeExponentExtrema = [Exponent<Prime>, Exponent<Prime>]

export {
    NumeratorPossibilityGivenMaximumN2D3P3,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    N2,
    N2P,
    ComputeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9Options,
    ComputeD39ForCandidateMaximumDenominatorPrimeExponentOptions,
    ComputeSortedNumeratorPossibilitiesOptions,
    SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
    PrimeExponentExtrema,
}
