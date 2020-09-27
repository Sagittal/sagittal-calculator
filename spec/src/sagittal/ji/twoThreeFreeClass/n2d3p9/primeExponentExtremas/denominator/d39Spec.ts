import { Exponent, Max, Prime } from "../../../../../../../../src/general"
import { RationalDenominator } from "../../../../../../../../src/general/math"
import { computeD39ForCandidateMaxDenominatorPrimeExponent } from "../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/d39"
import { D39 } from "../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/types"

describe("computeD39ForCandidateMaxDenominatorPrimeExponent", (): void => {
    it("returns the D39 part of the N2D3P9 calculation", (): void => {
        const denominatorPrime = 11 as RationalDenominator & Prime
        const candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = 5 as Max<RationalDenominator & Exponent<Prime>>

        const actual = computeD39ForCandidateMaxDenominatorPrimeExponent({
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
            denominatorPrime,
        })

        const expected = ((11 / 3) ** 5) * (1 / 9) as D39
        expect(actual).toBeCloseToTyped(expected)
    })
})
