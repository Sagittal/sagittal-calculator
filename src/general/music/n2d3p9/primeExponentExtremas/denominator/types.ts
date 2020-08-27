import { Denominator, Exponent, Max, Prime } from "../../../../math"
import { SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 } from "./sortedNumeratorPossibilities"

interface ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions {
    denominatorPrime: Prime<Denominator>,
    candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Exponent<Prime<Denominator>>>,
}

interface ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options
    extends ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions {
    sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9:
        SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}

type D39 = number & { _D39Brand: "D39" }

export {
    ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
    ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions,
    D39,
}
