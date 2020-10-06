import { pow } from "../../../../../../general"
import { D39, D39ForCandidateMaxDenominatorPrimeExponentOptions } from "./types"

// TODO: Inconsistent use of word "candidate" for type guards and in this module

const computeD39ForCandidateMaxDenominatorPrimeExponent = (
    options: D39ForCandidateMaxDenominatorPrimeExponentOptions,
): D39 => {
    const { denominatorPrime, candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 } = options

    return pow(denominatorPrime / 3, candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9) / 9 as D39
}

export {
    computeD39ForCandidateMaxDenominatorPrimeExponent,
}
