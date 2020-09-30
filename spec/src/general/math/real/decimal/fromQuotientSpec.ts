import { computeDecimalFromQuotient, RealDecimal } from "../../../../../../src/general/math"
import { Quotient } from "../../../../../../src/general/math/real/quotient"

describe("computeDecimalFromQuotient", (): void => {
    it("returns the decimal representation of the quotient", (): void => {
        const quotient = [7, 6] as Quotient

        const actual = computeDecimalFromQuotient(quotient)

        const expected = 1.166667 as RealDecimal
        expect(actual).toBeCloseToTyped(expected)
    })
})
