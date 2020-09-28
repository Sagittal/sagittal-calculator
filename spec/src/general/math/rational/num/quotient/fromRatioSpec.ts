import { RationalMonzo } from "../../../../../../../src/general/math/rational/num/monzo"
import {
    computeRationalQuotientFromRatio,
    RationalQuotient,
} from "../../../../../../../src/general/math/rational/num/quotient"

describe("computeRationalQuotientFromRatio", (): void => {
    it("returns the quotient, if present", (): void => {
        const ratio = { quotient: [3, 2] as RationalQuotient }

        const actual = computeRationalQuotientFromRatio(ratio)

        expect(actual).toEqual(ratio.quotient)
    })

    it("computes the quotient from the monzo otherwise", (): void => {
        const ratio = { monzo: [-1, 1] as RationalMonzo }

        const actual = computeRationalQuotientFromRatio(ratio)

        const expected = [3, 2] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
