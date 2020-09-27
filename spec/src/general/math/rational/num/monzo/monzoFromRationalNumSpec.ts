import { Integer, Monzo, Ratio } from "../../../../../../../src/general/math"
import { computeMonzoFromRationalNum } from "../../../../../../../src/general/math/rational/num/monzo"

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

    it("computes the monzo from the (integer) decimal, if present", (): void => {
        const rationalNum = { decimal: 5 as Integer }

        const actual = computeMonzoFromRationalNum(rationalNum)

        const expected = [0, 0, 1] as Monzo
        expect(actual).toEqual(expected)
    })
})
