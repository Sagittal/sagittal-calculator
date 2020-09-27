import { Max, RationalNumerator } from "../../../../../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { computePossibleNumeratorsGivenMaxN2D3P9 } from "../../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/possibleNumerators"

describe("computePossibleNumeratorsGivenMaxN2D3P9", (): void => {
    it("returns the possibilities for the numerator (which will be used to calculate the possibilties for the denominator; hence starting at 7) given the max N2D3P9", (): void => {
        const maxN2D3P9 = 6 as Max<N2D3P9>

        const actual = computePossibleNumeratorsGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            7 as RationalNumerator,
            11 as RationalNumerator,
            13 as RationalNumerator,
            17 as RationalNumerator,
            19 as RationalNumerator,
            23 as RationalNumerator,
            25 as RationalNumerator,
        ]
        expect(actual).toEqual(expected)
    })
})
