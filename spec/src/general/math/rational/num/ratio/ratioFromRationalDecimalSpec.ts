import { RationalRatio } from "../../../../../../../src/general/math"
import { RationalDecimal } from "../../../../../../../src/general/math/rational/num/decimal"
import { computeRationalRatioFromRationalDecimal } from "../../../../../../../src/general/math/rational/num/ratio"

describe("computeRationalRatioFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as RationalDecimal

        const actual = computeRationalRatioFromRationalDecimal(rationalDecimal)

        const expected = [7, 5] as RationalRatio
        expect(actual).toEqual(expected)
    })
})
