import { Exponent, Max, Min, Numerator, Prime } from "../../../../../../../../src/general"
import { Denominator } from "../../../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import {
    computeMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    NumeratorPossibilityForDenominatorGivenMaxN2D3P9,
} from "../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator"
import * as minN2D3P9
    from "../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/minN2D3P9"
import * as sortedNumeratorPossibilities
    from "../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/sortedNumeratorPossibilities"

describe("computeMaxDenominatorPrimeExponentGivenMaxN2D3P9", (): void => {
    it("returns the max exponent for a denominator prime given a max N2D3P9", (): void => {
        const denominatorPrime = 5 as Denominator & Prime
        const maxN2D3P9 = 27 as Max<N2D3P9> // N2D3P9(49/25) = 26.47
        const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
            { numerator: 7 as Numerator, gpf: 7 as Max<Prime> },
            { numerator: 11 as Numerator, gpf: 11 as Max<Prime> },
            { numerator: 13 as Numerator, gpf: 13 as Max<Prime> },
            { numerator: 17 as Numerator, gpf: 17 as Max<Prime> },
            { numerator: 19 as Numerator, gpf: 19 as Max<Prime> },
            { numerator: 23 as Numerator, gpf: 23 as Max<Prime> },
            { numerator: 25 as Numerator, gpf: 5 as Max<Prime> },
            { numerator: 29 as Numerator, gpf: 29 as Max<Prime> },
            { numerator: 31 as Numerator, gpf: 31 as Max<Prime> },
            { numerator: 35 as Numerator, gpf: 7 as Max<Prime> },
            { numerator: 37 as Numerator, gpf: 37 as Max<Prime> },
            { numerator: 41 as Numerator, gpf: 41 as Max<Prime> },
            { numerator: 43 as Numerator, gpf: 43 as Max<Prime> },
            { numerator: 47 as Numerator, gpf: 47 as Max<Prime> },
            { numerator: 49 as Numerator, gpf: 7 as Max<Prime> },
            // it actually goes on...
        ] as NumeratorPossibilityForDenominatorGivenMaxN2D3P9[]

        const actual = computeMaxDenominatorPrimeExponentGivenMaxN2D3P9(
            denominatorPrime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        )

        const expected = 2 as Max<Denominator & Exponent<Prime>>
        expect(actual).toBe(expected)
    })

    it("gets the sorted numerator possibilities, then works its way up through each candidate max exponent for the denominator prime, seeing what the min N2D3P9 is for it, and returning the max exponent whose min N2D3P9 is less than the max N2D3P9", (): void => {
        const denominatorPrime = 1033 as Denominator & Prime // something crazy
        const maxN2D3P9 = 10 as Max<N2D3P9>
        const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
            { numerator: 7 as Numerator, gpf: 7 as Max<Prime> },
            { numerator: 11 as Numerator, gpf: 11 as Max<Prime> },
            { numerator: 13 as Numerator, gpf: 13 as Max<Prime> },
            { numerator: 17 as Numerator, gpf: 17 as Max<Prime> },
            { numerator: 19 as Numerator, gpf: 19 as Max<Prime> },
            { numerator: 23 as Numerator, gpf: 23 as Max<Prime> },
            { numerator: 25 as Numerator, gpf: 5 as Max<Prime> },
        ]

        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = {
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [],
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [],
        }
        spyOn(sortedNumeratorPossibilities, "computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9")
            .and.returnValue(sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9)
        spyOn(minN2D3P9, "computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9").and.returnValues(
            // for candidate max exponent for denominator prime = 1
            9.5 as Min<N2D3P9>,
            // for candidate max exponent for denominator prime = 2,
            // and this is the one which is the biggest without going over,
            // so that's why 2 is the final expectation in this test
            9.7 as Min<N2D3P9>,
            // for candidate max exponent for denominator prime = 3
            10.3 as Min<N2D3P9>,
        )

        const actual = computeMaxDenominatorPrimeExponentGivenMaxN2D3P9(
            denominatorPrime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        )

        expect(sortedNumeratorPossibilities.computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9)
            .toHaveBeenCalledWith(
                denominatorPrime,
                maxN2D3P9,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            )
        expect(minN2D3P9.computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9).toHaveBeenCalledWith({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: 1 as Max<Denominator & Exponent<Prime>>,
        })
        expect(minN2D3P9.computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9).toHaveBeenCalledWith({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: 2 as Max<Denominator & Exponent<Prime>>,
        })
        const expected = 2 as Max<Denominator & Exponent<Prime>>
        expect(actual).toBe(expected)
    })
})
