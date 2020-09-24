import { Monzo } from "../../../../../../src/general/math/rational/monzo"
import { computeRatioFromRationalNum, Ratio } from "../../../../../../src/general/math/rational/ratio"

describe("computeRatioFromRationalNum", (): void => {
    it("returns the ratio, if present", (): void => {
        const rationalNum = { ratio: [3, 2] as Ratio }

        const actual = computeRatioFromRationalNum(rationalNum)

        expect(actual).toEqual(rationalNum.ratio)
    })

    it("computes the ratio from the monzo otherwise", (): void => {
        const rationalNum = { monzo: [-1, 1] as Monzo }

        const actual = computeRatioFromRationalNum(rationalNum)

        const expected = [3, 2] as Ratio
        expect(actual).toEqual(expected)
    })
})
