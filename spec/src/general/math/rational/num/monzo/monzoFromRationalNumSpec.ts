import { Integer, RationalMonzo, RationalQuotient } from "../../../../../../../src/general/math"
import { computeRationalMonzoFromRationalNum } from "../../../../../../../src/general/math/rational/num/monzo"

describe("computeRationalMonzoFromRationalNum", (): void => {
    it("returns the monzo, if present", (): void => {
        const rationalNum = { monzo: [3, -2] as RationalMonzo }

        const actual = computeRationalMonzoFromRationalNum(rationalNum)

        expect(actual).toEqual(rationalNum.monzo)
    })

    it("computes the monzo from the quotient, if present", (): void => {
        const rationalNum = { quotient: [3, 2] as RationalQuotient }

        const actual = computeRationalMonzoFromRationalNum(rationalNum)

        const expected = [-1, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("computes the monzo from the (integer) decimal, if present", (): void => {
        const rationalNum = { decimal: 5 as Integer }

        const actual = computeRationalMonzoFromRationalNum(rationalNum)

        const expected = [0, 0, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })
})
