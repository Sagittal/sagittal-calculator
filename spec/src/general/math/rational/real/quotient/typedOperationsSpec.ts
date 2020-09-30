import {
    computeRationalQuotientProduct,
    RationalQuotient,
} from "../../../../../../../src/general/math/rational/real/quotient"

describe("computeRationalQuotientProduct", (): void => {
    it("returns the product of all the quotients (and reduces to lowest terms)", (): void => {
        const quotientA = [11, 7] as RationalQuotient
        const quotientB = [3, 5] as RationalQuotient
        const quotientC = [13, 11] as RationalQuotient

        const actual = computeRationalQuotientProduct(quotientA, quotientB, quotientC)

        const expected = [39, 35] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
