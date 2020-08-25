import { ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions } from "./types"

const computeD39ForCandidateMaxDenominatorPrimeExponent = (options: ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions) => {
    const { denominatorPrime, candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 } = options

    return Math.pow(denominatorPrime / 3, candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9) / 9
}

export {
    computeD39ForCandidateMaxDenominatorPrimeExponent,
}
