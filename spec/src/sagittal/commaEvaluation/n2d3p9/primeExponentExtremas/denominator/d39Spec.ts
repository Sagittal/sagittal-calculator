import { Exponent, Integer, Max, Prime } from "../../../../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../../../../src/general/code"
import { Denominator } from "../../../../../../../src/general/math"
import { computeD39ForCandidateMaxDenominatorPrimeExponent } from "../../../../../../../src/sagittal/commaEvaluation/n2d3p9/primeExponentExtremas/denominator/d39"
import { D39 } from "../../../../../../../src/sagittal/commaEvaluation/n2d3p9/primeExponentExtremas/denominator/types"

describe("computeD39ForCandidateMaxDenominatorPrimeExponent", () => {
    it("returns the D39 part of the N2D3P9 calculation", () => {
        const denominatorPrime = 11 as Prime<Denominator>
        const candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = 5 as Max<Integer & Exponent<Prime<Denominator>>>

        const actual = computeD39ForCandidateMaxDenominatorPrimeExponent({
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
            denominatorPrime,
        })

        const expected = ((11 / 3) ** 5) * (1 / 9) as D39
        expect(actual).toBeCloseToTyped(expected, ACCURACY_THRESHOLD)
    })
})
