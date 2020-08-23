import { computeD39ForCandidateMaximumDenominatorPrimeExponent } from "./d39"
import { computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 } from "./minimumN2P"
import { ComputeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9Options } from "./types"

const computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 = (options: ComputeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9Options) => {
    const {
        sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
        denominatorPrime,
        candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
    } = options

    const minimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 =
        computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
            denominatorPrime,
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
        })
    const d39ForCandidateMaximumDenominatorPrimeExponent =
        computeD39ForCandidateMaximumDenominatorPrimeExponent({
            denominatorPrime,
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
        })

    return minimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 *
        d39ForCandidateMaximumDenominatorPrimeExponent
}

export {
    computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
}
