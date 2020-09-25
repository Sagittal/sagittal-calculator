import { Decimal, Integer } from "../../../../../src/general/math"
import { computeDecimalFromRationalNum, Monzo, Ratio, RationalNum } from "../../../../../src/general/math/rational"

describe("computeDecimalFromRationalNum", (): void => {
    it("works for rational nums with (integer) decimals", (): void => {
        const rationalNum: RationalNum = { decimal: 1 as Integer }

        const actual = computeDecimalFromRationalNum(rationalNum)

        const expected = 1 as Integer
        expect(actual).toBe(expected)
    })

    it("works for rational nums with monzos", (): void => {
        const rationalNum: RationalNum = { monzo: [-2, 0, 1] as Monzo }

        const actual = computeDecimalFromRationalNum(rationalNum)

        const expected = 1.25 as Decimal
        expect(actual).toBe(expected)
    })

    it("works for rational nums with ratios", (): void => {
        const rationalNum: RationalNum = { ratio: [5, 4] as Ratio }

        const actual = computeDecimalFromRationalNum(rationalNum)

        const expected = 1.25 as Decimal
        expect(actual).toBe(expected)
    })
})
