import { RationalMonzo } from "../../../../../../../src/general/math/rational/num/monzo"
import {
    computeRationalRatioFromRationalNum,
    RationalRatio,
} from "../../../../../../../src/general/math/rational/num/ratio"

describe("computeRationalRatioFromRationalNum", (): void => {
    it("returns the ratio, if present", (): void => {
        const rationalNum = { ratio: [3, 2] as RationalRatio }

        const actual = computeRationalRatioFromRationalNum(rationalNum)

        expect(actual).toEqual(rationalNum.ratio)
    })

    it("computes the ratio from the monzo otherwise", (): void => {
        const rationalNum = { monzo: [-1, 1] as RationalMonzo }

        const actual = computeRationalRatioFromRationalNum(rationalNum)

        const expected = [3, 2] as RationalRatio
        expect(actual).toEqual(expected)
    })
})
