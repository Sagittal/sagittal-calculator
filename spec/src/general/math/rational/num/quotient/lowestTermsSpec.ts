import {
    computeLowestTermsRationalQuotient,
    RationalQuotient,
} from "../../../../../../../src/general/math/rational/num/quotient"

describe("computeLowestTermsRationalQuotient", (): void => {
    it("returns the quotient in lowest terms", (): void => {
        const quotient = [99, 21] as RationalQuotient

        const actual = computeLowestTermsRationalQuotient(quotient)

        const expected: RationalQuotient = [33, 7] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
