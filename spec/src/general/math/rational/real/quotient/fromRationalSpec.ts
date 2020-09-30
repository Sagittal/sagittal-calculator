import { RationalMonzo } from "../../../../../../../src/general/math/rational/real/monzo"
import {
    computeRationalQuotientFromRational,
    RationalQuotient,
} from "../../../../../../../src/general/math/rational/real/quotient"

describe("computeRationalQuotientFromRational", (): void => {
    it("returns the quotient, if present", (): void => {
        const rational = { quotient: [3, 2] as RationalQuotient }

        const actual = computeRationalQuotientFromRational(rational)

        expect(actual).toEqual(rational.quotient)
    })

    it("computes the quotient from the monzo otherwise", (): void => {
        const rational = { monzo: [-1, 1] as RationalMonzo }

        const actual = computeRationalQuotientFromRational(rational)

        const expected = [3, 2] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
