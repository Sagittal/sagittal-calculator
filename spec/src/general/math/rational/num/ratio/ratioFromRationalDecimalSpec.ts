import { Decimal, Ratio } from "../../../../../../../src/general/math"
import { computeRatioFromRationalDecimal } from "../../../../../../../src/general/math/rational/num/ratio"

describe("computeRatioFromRationalDecimal", (): void => {
    it("works", (): void => {
        const decimal = 1.4 as Decimal<{ potentiallyIrrational: false }>

        const actual = computeRatioFromRationalDecimal(decimal)

        const expected = [7, 5] as Ratio
        expect(actual).toEqual(expected)
    })
})
