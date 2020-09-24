import { Decimal } from "../../../../../src/general/math"
import { computeDecimalFromRationalNum, Monzo, Ratio, RationalNum } from "../../../../../src/general/math/rational"

describe("computeDecimalFromRationalNum", (): void => {
    const expected = 1.25 as Decimal

    it("works for rational nums with decimals", (): void => {
        const rationalNum: RationalNum = { decimal: 1.25 as Decimal }

        const actual = computeDecimalFromRationalNum(rationalNum)

        expect(actual).toBe(expected)
    })

    it("works for rational nums with monzos", (): void => {
        const rationalNum: RationalNum = { monzo: [-2, 0, 1] as Monzo }

        const actual = computeDecimalFromRationalNum(rationalNum)

        expect(actual).toBe(expected)
    })

    it("works for rational nums with ratios", (): void => {
        const rationalNum: RationalNum = { ratio: [5, 4] as Ratio }

        const actual = computeDecimalFromRationalNum(rationalNum)

        expect(actual).toBe(expected)
    })
})
