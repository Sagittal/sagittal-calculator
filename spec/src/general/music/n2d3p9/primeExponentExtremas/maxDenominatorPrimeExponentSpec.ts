import { Exponent, Max, Min, Prime } from "../../../../../../src/general"
import { N2D3P9 } from "../../../../../../src/general/music/n2d3p9"
import { computeMaxDenominatorPrimeExponentGivenMaxN2D3P3 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/maxDenominatorPrimeExponent"
import * as minN2D3P9 from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/minN2D3P9"
import * as sortedNumeratorPossibilities
    from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/sortedNumeratorPossibilities"

describe("computeMaxDenominatorPrimeExponentGivenMaxN2D3P3", () => {
    it("returns the max exponent for a denominator prime given a max N2D3P9", () => {
        const denominatorPrime = 5 as Prime
        const maxN2D3P9 = 27 as Max<N2D3P9> // N2D3P9(49/25) = 26.47

        const actual = computeMaxDenominatorPrimeExponentGivenMaxN2D3P3(denominatorPrime, maxN2D3P9)

        const expected = 2 as Max<Exponent<Prime>>
        expect(actual).toBe(expected)
    })

    it("gets the sorted numerator possibilities, then works its way up through each candidate max exponent for the denominator prime, seeing what the min N2D3P9 is for it, and returning the max exponent whose min N2D3P9 is less than the max N2D3P9", () => {
        const denominatorPrime = 1033 as Prime // something crazy
        const maxN2D3P9 = 10 as Max<N2D3P9>

        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = {
            numeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [],
            numeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [],
        }
        spyOn(sortedNumeratorPossibilities, "computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9").and.returnValue(sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9)
        spyOn(minN2D3P9, "computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9").and.returnValues(
            9.5 as Min<N2D3P9>,  // for candidate max exponent for denominator prime = 1
            9.7 as Min<N2D3P9>,  // for candidate max exponent for denominator prime = 2, and this is the one which is the biggest without going over, so that's why 2 is the final expectation in this test
            10.3 as Min<N2D3P9>, // for candidate max exponent for denominator prime = 3
        )

        const actual = computeMaxDenominatorPrimeExponentGivenMaxN2D3P3(denominatorPrime, maxN2D3P9)

        expect(sortedNumeratorPossibilities.computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9).toHaveBeenCalledWith(
            denominatorPrime,
            maxN2D3P9,
        )
        expect(minN2D3P9.computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9).toHaveBeenCalledWith({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: 1 as Max<Exponent<Prime>>,
        })
        expect(minN2D3P9.computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9).toHaveBeenCalledWith({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: 2 as Max<Exponent<Prime>>,
        })
        const expected = 2 as Max<Exponent<Prime>>
        expect(actual).toBe(expected)
    })
})
