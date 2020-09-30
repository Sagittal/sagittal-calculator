import { IntegerDecimal, RationalDecimal, RationalMonzo, RationalQuotient } from "../../../../../../../src/general/math"
import { computeRationalMonzoFromRational } from "../../../../../../../src/general/math/rational/real/monzo"

describe("computeRationalMonzoFromRational", (): void => {
    it("returns the monzo, if present", (): void => {
        const rational = { monzo: [3, -2] as RationalMonzo }

        const actual = computeRationalMonzoFromRational(rational)

        expect(actual).toEqual(rational.monzo)
    })

    it("computes the monzo from the quotient, if present", (): void => {
        const rational = { quotient: [3, 2] as RationalQuotient }

        const actual = computeRationalMonzoFromRational(rational)

        const expected = [-1, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("computes the monzo from the decimal, if present", (): void => {
        const rational = { decimal: 5 as RationalDecimal }

        const actual = computeRationalMonzoFromRational(rational)

        const expected = [0, 0, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })
})
