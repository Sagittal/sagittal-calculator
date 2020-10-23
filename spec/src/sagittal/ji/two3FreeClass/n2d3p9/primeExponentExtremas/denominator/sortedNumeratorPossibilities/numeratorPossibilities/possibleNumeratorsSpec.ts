import { Decimal, Max, Numerator } from "../../../../../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import { computePossibleNumeratorsGivenMaxN2D3P9 } from "../../../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/possibleNumerators"

describe("computePossibleNumeratorsGivenMaxN2D3P9", (): void => {
    it("returns the possibilities for the numerator (which will be used to calculate the possibilities for the denominator; hence starting at 7) given the max N2D3P9", (): void => {
        const maxN2D3P9 = 6 as Max<N2D3P9>

        const actual = computePossibleNumeratorsGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            7 as Numerator & Decimal<{ integer: true }>,
            11 as Numerator & Decimal<{ integer: true }>,
            13 as Numerator & Decimal<{ integer: true }>,
            17 as Numerator & Decimal<{ integer: true }>,
            19 as Numerator & Decimal<{ integer: true }>,
            23 as Numerator & Decimal<{ integer: true }>,
            25 as Numerator & Decimal<{ integer: true }>,
        ]
        expect(actual).toEqual(expected)
    })
})
