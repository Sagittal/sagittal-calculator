import { equalIrrationalQuotients, Quotient } from "../../../../../../src/general/math/real/quotient"

describe("equalIrrationalQuotients", (): void => {
    it("returns true when quotients are equal when reduced to lowest terms, even if they are irrational", (): void => {
        const quotientA = [11.1, 7.2] as Quotient
        const quotientB = [22.2, 14.4] as Quotient

        const actual = equalIrrationalQuotients(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })
})
