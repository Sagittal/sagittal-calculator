import { Max, Numerator, Prime } from "../../../../../../../../../src/general/math"
import { Denominator } from "../../../../../../../../../src/general/math/ratio"
import { SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 } from "../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities"
import { computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 } from "../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/sortedNumeratorPossibilitiesWithLesserGpf"
import { N2 } from "../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/types"

describe("computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2", (): void => {
    it("returns the sorted numerator possibilities for the denominator prime given the max N2D3P9, in two lists: one with lesser GPF than the denominator prime, one with greater; both sorted by their respective values (N2 in the case of those with lesser GPF — because you can't know what the P which is short for GPF will be until you pick the denominator prime — and N2P in the case of those with greater GPF because you do know it already)", (): void => {
        const denominatorPrime = 11 as Denominator & Prime
        const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
            { numerator: 13 as Numerator, gpf: 13 as Max<Prime> },
            { numerator: 17 as Numerator, gpf: 17 as Max<Prime> },
            { numerator: 19 as Numerator, gpf: 19 as Max<Prime> },
            { numerator: 23 as Numerator, gpf: 23 as Max<Prime> },
            { numerator: 25 as Numerator, gpf: 5 as Max<Prime> },
        ]

        const actual: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] =
            computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2({
                denominatorPrime,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            })

        const expected = [
            { numerator: 25 as Numerator, gpf: 5 as Max<Prime>, n2: 6.25 as N2 },
        ] as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[]
        expect(actual).toEqual(expected)
    })
})
