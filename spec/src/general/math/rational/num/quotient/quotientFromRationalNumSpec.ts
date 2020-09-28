import { RationalMonzo } from "../../../../../../../src/general/math/rational/num/monzo"
import {
    computeRationalQuotientFromRationalNum,
    RationalQuotient,
} from "../../../../../../../src/general/math/rational/num/quotient"

describe("computeRationalQuotientFromRationalNum", (): void => {
    it("returns the quotient, if present", (): void => {
        const rationalNum = { quotient: [3, 2] as RationalQuotient }

        const actual = computeRationalQuotientFromRationalNum(rationalNum)

        expect(actual).toEqual(rationalNum.quotient)
    })

    it("computes the quotient from the monzo otherwise", (): void => {
        const rationalNum = { monzo: [-1, 1] as RationalMonzo }

        const actual = computeRationalQuotientFromRationalNum(rationalNum)

        const expected = [3, 2] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
