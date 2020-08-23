import { Exponent, Prime } from "../../../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../../../src/general/code"
import { computeD39ForCandidateMaximumDenominatorPrimeExponent } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/d39"

describe("computeD39ForCandidateMaximumDenominatorPrimeExponent", () => {
    it("returns the D39 part of the N2D3P9 calculation", () => {
        const denominatorPrime = 11 as Prime
        const candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 = 5 as Exponent<Prime>

        const result = computeD39ForCandidateMaximumDenominatorPrimeExponent({
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
            denominatorPrime,
        })

        expect(result).toBeCloseTo(((11 / 3) ** 5) * (1 / 9), ACCURACY_THRESHOLD)
    })
})
