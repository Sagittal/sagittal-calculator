import { equalRealQuotients, RealQuotient } from "../../../../../../src/general/math/real/quotient"

describe("equalRealQuotients", (): void => {
    it("returns true when quotients are equal when reduced to lowest terms, even if they are irrational", (): void => {
        const quotientA = [11.1, 7.2] as RealQuotient
        const quotientB = [22.2, 14.4] as RealQuotient

        const actual = equalRealQuotients(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })
})
