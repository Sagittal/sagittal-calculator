import {Of} from "../../../../../../../../../../../src/general"
import {Decimal, Denominator, Max, Numerator, Prime} from "../../../../../../../../../../../src/general/math"
import {N2D3P9} from "../../../../../../../../../../../src/sagittal/ji/badness/complexity/unpopularity/n2d3p9"
import {
    computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
    N2P,
    SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "../../../../../../../../../../../src/sagittal/ji/badness/complexity/unpopularity/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities"
import {N2} from "../../../../../../../../../../../src/sagittal/ji/badness/complexity/unpopularity/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/types"

describe("computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9", (): void => {
    it("returns the sorted numerator possibilities for the denominator prime given the max N2D3P9, in two lists: one with lesser GPF than the denominator prime, one with greater; both sorted by their respective values (N2 in the case of those with lesser GPF — because you can't know what the P which is short for GPF will be until you pick the denominator prime — and N2P in the case of those with greater GPF because you do know it already)", (): void => {
        const denominatorPrime = 11 as Prime & Of<Denominator>
        const maxN2D3P9 = 10 as Max<N2D3P9>
        const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
            {numerator: 13 as Numerator & Decimal<{integer: true}>, gpf: 13 as Max<Prime>},
            {numerator: 17 as Numerator & Decimal<{integer: true}>, gpf: 17 as Max<Prime>},
            {numerator: 19 as Numerator & Decimal<{integer: true}>, gpf: 19 as Max<Prime>},
            {numerator: 23 as Numerator & Decimal<{integer: true}>, gpf: 23 as Max<Prime>},
            {numerator: 25 as Numerator & Decimal<{integer: true}>, gpf: 5 as Max<Prime>},
        ]

        const actual: SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 =
            computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9(
                denominatorPrime,
                maxN2D3P9,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            )

        const expected = {
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [
                {
                    numerator: 25 as Numerator & Decimal<{integer: true}>,
                    gpf: 5 as Max<Prime>,
                    n2: 6.25 as N2,
                },
            ] as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [
                {
                    numerator: 13 as Numerator & Decimal<{integer: true}>,
                    gpf: 13 as Max<Prime>,
                    n2p: 84.5 as N2P,
                },
                {
                    numerator: 17 as Numerator & Decimal<{integer: true}>,
                    gpf: 17 as Max<Prime>,
                    n2p: 144.5 as N2P,
                },
                {
                    numerator: 19 as Numerator & Decimal<{integer: true}>,
                    gpf: 19 as Max<Prime>,
                    n2p: 180.5 as N2P,
                },
                {
                    numerator: 23 as Numerator & Decimal<{integer: true}>,
                    gpf: 23 as Max<Prime>,
                    n2p: 264.5 as N2P,
                },
            ] as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
        }
        expect(actual).toEqual(expected)
    })
})
