import { computeRealQuotientProduct, RealQuotient } from "../../../../../../src/general/math/real/quotient"

describe("computeRealQuotientProduct", (): void => {
    it("returns the product of all the quotients", (): void => {
        const quotientA = [11, 7] as RealQuotient
        const quotientB = [3, 5] as RealQuotient
        const quotientC = [13, 11] as RealQuotient

        const actual = computeRealQuotientProduct(quotientA, quotientB, quotientC)

        const expected = [429, 385] as RealQuotient
        expect(actual).toEqual(expected)
    })
})
