import { RationalQuotient } from "../../../../../../../src/general/math"
import { RationalDecimal } from "../../../../../../../src/general/math/rational/real/decimal"
import { computeRationalQuotientFromRationalDecimal } from "../../../../../../../src/general/math/rational/real/quotient"

describe("computeRationalQuotientFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as RationalDecimal

        const actual = computeRationalQuotientFromRationalDecimal(rationalDecimal)

        const expected = [7, 5] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
