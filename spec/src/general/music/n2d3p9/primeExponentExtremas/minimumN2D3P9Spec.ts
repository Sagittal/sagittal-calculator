import { Exponent, Prime } from "../../../../../../src/general"
import * as d39 from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/d39"
import { computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/minimumN2D3P9"
import * as minimumN2P from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/minimumN2P"

describe("computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9", () => {
    it("given a denominator prime and its candidate maximum prime exponent, plus the sorted numerator possibilities, will gather the D39 and the minimum N2P then combine them", () => {
        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 = {
            numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [],
            numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [],
        }
        const denominatorPrime = 7 as Prime
        const candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 = 2 as Exponent<Prime>

        const minimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 = 15.5
        const d39ForCandidateMaximumDenominatorPrimeExponent = 3

        spyOn(minimumN2P, "computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9")
            .and.returnValue(minimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9)
        spyOn(d39, "computeD39ForCandidateMaximumDenominatorPrimeExponent")
            .and.returnValue(d39ForCandidateMaximumDenominatorPrimeExponent)

        const result = computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
            denominatorPrime,
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
        })
        expect(result).toEqual(46.5)
    })
})
