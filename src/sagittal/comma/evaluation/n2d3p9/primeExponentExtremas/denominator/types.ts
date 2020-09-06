import { Denominator, Exponent, Integer, Max, Prime } from "../../../../../../general"
import { SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 } from "./sortedNumeratorPossibilities"

interface D39ForCandidateMaxDenominatorPrimeExponentOptions {
    denominatorPrime: Prime<Denominator>,
    candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Integer & Exponent<Prime<Denominator>>>,
}

interface MinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options
    extends D39ForCandidateMaxDenominatorPrimeExponentOptions {
    sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9:
        SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}

type D39 = number & { _D39Brand: "D39" }

export {
    MinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
    D39ForCandidateMaxDenominatorPrimeExponentOptions,
    D39,
}
