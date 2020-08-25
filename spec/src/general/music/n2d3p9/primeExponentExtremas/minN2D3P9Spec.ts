import { Exponent, Max, Min, N2D3P9, Prime } from "../../../../../../src/general"
import { Denominator } from "../../../../../../src/general/math"
import * as d39 from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/d39"
import { computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/minN2D3P9"
import * as minN2P from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/minN2P"
import { N2P } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/types"

describe("computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9", () => {
    it("given a denominator prime and its candidate max prime exponent, plus the sorted numerator possibilities, will gather the D39 and the min N2P then combine them", () => {
        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = {
            numeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [],
            numeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [],
        }
        const denominatorPrime = 7 as Prime<Denominator>
        const candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = 2 as Max<Exponent<Prime<Denominator>>>

        const minN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = 15.5 as Min<N2P>
        const d39ForCandidateMaxDenominatorPrimeExponent = 3

        spyOn(minN2P, "computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9")
            .and.returnValue(minN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9)
        spyOn(d39, "computeD39ForCandidateMaxDenominatorPrimeExponent")
            .and.returnValue(d39ForCandidateMaxDenominatorPrimeExponent)

        const actual = computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
        })

        const expected = 46.5 as Min<N2D3P9>
        expect(actual).toEqual(expected)
    })
})
