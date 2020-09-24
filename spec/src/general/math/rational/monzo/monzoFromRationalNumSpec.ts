import { Decimal } from "../../../../../../src/general/math"
import { computeMonzoFromRationalNum, Monzo } from "../../../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../../../src/general/math/rational/ratio"

describe("computeMonzoFromRationalNum", (): void => {
    it("returns the monzo, if present", (): void => {
        const rationalNum = { monzo: [3, -2] as Monzo }

        const actual = computeMonzoFromRationalNum(rationalNum)

        expect(actual).toEqual(rationalNum.monzo)
    })

    it("computes the monzo from the ratio, if present", (): void => {
        const rationalNum = { ratio: [3, 2] as Ratio }

        const actual = computeMonzoFromRationalNum(rationalNum)

        const expected = [-1, 1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("computes the monzo from the decimal, if present", (): void => {
        const rationalNum = { decimal: 1.5 as Decimal }

        const actual = computeMonzoFromRationalNum(rationalNum)

        const expected = [-1, 1] as Monzo
        expect(actual).toEqual(expected)
    })
})
