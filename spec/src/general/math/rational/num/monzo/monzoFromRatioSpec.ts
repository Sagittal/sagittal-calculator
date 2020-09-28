import { IntegerDecimal, RationalDecimal, RationalMonzo, RationalQuotient } from "../../../../../../../src/general/math"
import { computeRationalMonzoFromRatio } from "../../../../../../../src/general/math/rational/num/monzo"

describe("computeRationalMonzoFromRatio", (): void => {
    it("returns the monzo, if present", (): void => {
        const ratio = { monzo: [3, -2] as RationalMonzo }

        const actual = computeRationalMonzoFromRatio(ratio)

        expect(actual).toEqual(ratio.monzo)
    })

    it("computes the monzo from the quotient, if present", (): void => {
        const ratio = { quotient: [3, 2] as RationalQuotient }

        const actual = computeRationalMonzoFromRatio(ratio)

        const expected = [-1, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("computes the monzo from the decimal, if present", (): void => {
        const ratio = { decimal: 5 as RationalDecimal }

        const actual = computeRationalMonzoFromRatio(ratio)

        const expected = [0, 0, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })
})
