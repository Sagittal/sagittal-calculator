import { Max, Numerator } from "../../../../../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computePossibleNumeratorsGivenMaxN2D3P3 } from "../../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/possibleNumerators"

describe("computePossibleNumeratorsGivenMaxN2D3P3", (): void => {
    it("returns the possibilities for the numerator (which will be used to calculate the possibilties for the denominator; hence starting at 7) given the max N2D3P9", (): void => {
        const maxN2D3P9 = 6 as Max<N2D3P9>

        const actual = computePossibleNumeratorsGivenMaxN2D3P3(maxN2D3P9)

        const expected = [
            7 as Numerator,
            11 as Numerator,
            13 as Numerator,
            17 as Numerator,
            19 as Numerator,
            23 as Numerator,
            25 as Numerator,
        ]
        expect(actual).toEqual(expected)
    })
})
