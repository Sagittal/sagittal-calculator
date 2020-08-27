import { Base, pow } from "../../../../math"
import { ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions, D39 } from "./types"

const computeD39ForCandidateMaxDenominatorPrimeExponent = (options: ComputeD39ForCandidateMaxDenominatorPrimeExponentOptions): D39 => {
    const { denominatorPrime, candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 } = options

    return pow(denominatorPrime / 3 as Base, candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9) / 9 as D39
}

export {
    computeD39ForCandidateMaxDenominatorPrimeExponent,
}
