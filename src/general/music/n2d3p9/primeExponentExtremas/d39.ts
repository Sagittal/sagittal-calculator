import { ComputeD39ForCandidateMaximumDenominatorPrimeExponentOptions } from "./types"

const computeD39ForCandidateMaximumDenominatorPrimeExponent = (options: ComputeD39ForCandidateMaximumDenominatorPrimeExponentOptions) => {
    const { denominatorPrime, candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 } = options

    return Math.pow(denominatorPrime / 3, candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9) / 9
}

export {
    computeD39ForCandidateMaximumDenominatorPrimeExponent,
}
