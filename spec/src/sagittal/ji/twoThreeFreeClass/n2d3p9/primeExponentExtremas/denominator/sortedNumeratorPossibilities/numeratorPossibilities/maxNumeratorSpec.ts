import { Max, RationalNumerator } from "../../../../../../../../../../src/general"
import { N2D3P9 } from "../../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { computeMaxNumeratorGivenMaxN2D3P9 } from "../../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/maxNumerator"
import { onlyRunInCi } from "../../../../../../../../../helpers/onlyRunInCi"

describe("computeMaxNumeratorGivenMaxN2D3P9", (): void => {
    it("works for 136, for which the max numerator is a simple power of a single prime", (): void => {
        onlyRunInCi()

        const maxN2D3P9: Max<N2D3P9> = 136 as Max<N2D3P9>

        const actual = computeMaxNumeratorGivenMaxN2D3P9(maxN2D3P9)

        const expected = 5 ** 6 as Max<RationalNumerator>
        expect(actual).toEqual(expected)
    })

    it("works for 10, for which it is the case that the max numerator has an N2D3P9 which is less than the N2D3P9 possible (< than the max N2D3P9) with a different numerator, except that this other numerator is less than it (i.e. 49 has N2D3P9 of 9.53 and 125 has N2D3P9 of 8.68, but 125 is our max numerator)", (): void => {
        const maxN2D3P9: Max<N2D3P9> = 10 as Max<N2D3P9>

        const actual = computeMaxNumeratorGivenMaxN2D3P9(maxN2D3P9)

        const expected = 5 ** 3 as Max<RationalNumerator>
        expect(actual).toEqual(expected)
    })

    it(
        "works for 7, for which the max numerator's prime factorization includes more than one different prime",
        (): void => {
            const maxN2D3P9: Max<N2D3P9> = 7 as Max<N2D3P9>

            const actual = computeMaxNumeratorGivenMaxN2D3P9(maxN2D3P9)

            const expected = 5 ** 1 * 7 ** 1 as Max<RationalNumerator>
            expect(actual).toEqual(expected)
        },
    )
})
