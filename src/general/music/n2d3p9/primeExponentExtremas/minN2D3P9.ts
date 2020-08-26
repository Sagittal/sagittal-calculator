import { N2D3P9 } from "../types"
import { computeD39ForCandidateMaxDenominatorPrimeExponent } from "./d39"
import { computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 } from "./minN2P"
import { ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options } from "./types"
import { Min } from "../../../math"

const computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = (options: ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options): Min<N2D3P9> => {
    const {
        sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
        denominatorPrime,
        candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    } = options

    const minN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
        computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
        })
    const d39ForCandidateMaxDenominatorPrimeExponent =
        computeD39ForCandidateMaxDenominatorPrimeExponent({
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
        })

    return minN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 *
    d39ForCandidateMaxDenominatorPrimeExponent as Min<N2D3P9>
}

export {
    computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
}
