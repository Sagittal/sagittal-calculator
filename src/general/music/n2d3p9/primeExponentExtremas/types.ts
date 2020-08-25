import { Denominator, Exponent, Numerator } from "../../../math"
import { Max, Min, Prime } from "../../../types"

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

interface NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 extends NumeratorPossibilityWithLesserGpfThanDenominatorPrime {
    n2: N2,
}

interface NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P extends NumeratorPossibilityWithGreaterGpfThanDenominatorPrime {
    n2p: N2P,
}

interface SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 {
    numeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
    numeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
}

interface ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions {
    denominatorPrime: Prime<Denominator>,
    candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Exponent<Prime<Denominator>>>,
}

interface ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options extends ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions {
    sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9: SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}

// TODO: some of these options types are shared among multiple functions even though they are named only for one;
//  this might be a good place to use that method where each thing which can be an option
//  has an individual existence as an option
//  and then you just mix & match them

interface ComputeSortedNumeratorPossibilitiesOptions {
    denominatorPrime: Prime<Denominator>,
    numeratorPossibilitiesGivenMaxN2D3P3: NumeratorPossibilityGivenMaxN2D3P3[],
}

type PrimeExponentExtrema = [Min<Exponent<Prime>>, Max<Exponent<Prime>>] | [Max<Exponent<Prime<Denominator>>>, Max<Exponent<Prime<Numerator>>>]

export {
    NumeratorPossibilityGivenMaxN2D3P3,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    N2,
    N2P,
    ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
    ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions,
    ComputeSortedNumeratorPossibilitiesOptions,
    SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
    PrimeExponentExtrema,
}
