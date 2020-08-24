import { Exponent, Prime } from "../../../../../../src/general"
import { N2D3P9 } from "../../../../../../src/general/music/n2d3p9"
import { computeMaximumDenominatorPrimeExponentGivenMaximumN2D3P3 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/maximumDenominatorPrimeExponent"
import * as minimumN2D3P9 from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/minimumN2D3P9"
import * as sortedNumeratorPossibilities
    from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/sortedNumeratorPossibilities"

describe("computeMaximumDenominatorPrimeExponentGivenMaximumN2D3P3", () => {
    it("returns the maximum exponent for a denominator prime given a maximum N2D3P9", () => {
        const denominatorPrime = 5 as Prime
        const maximumN2D3P9 = 27 as N2D3P9 // N2D3P9(49/25) = 26.47

        const actual = computeMaximumDenominatorPrimeExponentGivenMaximumN2D3P3(denominatorPrime, maximumN2D3P9)

        const expected = 2 as Exponent<Prime>
        expect(actual).toBe(expected)
    })

    it("gets the sorted numerator possibilities, then works its way up through each candidate max exponent for the denominator prime, seeing what the minimum N2D3P9 is for it, and returning the max exponent whose min N2D3P9 is less than the max N2D3P9", () => {
        const denominatorPrime = 1033 as Prime // something crazy
        const maximumN2D3P9 = 10 as N2D3P9

        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 = {
            numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [],
            numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [],
        }
        spyOn(sortedNumeratorPossibilities, "computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9").and.returnValue(sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9)
        spyOn(minimumN2D3P9, "computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9").and.returnValues(
            9.5 as N2D3P9,  // for candidate maximum exponent for denominator prime = 1
            9.7 as N2D3P9,  // for candidate maximum exponent for denominator prime = 2, and this is the one which is the biggest without going over, so that's why 2 is the final expectation in this test
            10.3 as N2D3P9, // for candidate maximum exponent for denominator prime = 3
        )

        const actual = computeMaximumDenominatorPrimeExponentGivenMaximumN2D3P3(denominatorPrime, maximumN2D3P9)

        expect(sortedNumeratorPossibilities.computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9).toHaveBeenCalledWith(
            denominatorPrime,
            maximumN2D3P9,
        )
        expect(minimumN2D3P9.computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9).toHaveBeenCalledWith({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
            denominatorPrime,
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9: 1 as Exponent<Prime>,
        })
        expect(minimumN2D3P9.computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9).toHaveBeenCalledWith({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
            denominatorPrime,
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9: 2 as Exponent<Prime>,
        })
        const expected = 2 as Exponent<Prime>
        expect(actual).toBe(expected)
    })
})
