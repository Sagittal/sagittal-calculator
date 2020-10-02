import { computeRealDecimalFromRealQuotient, RealDecimal } from "../../../../../../src/general/math"
import { RealQuotient } from "../../../../../../src/general/math/real/quotient"

describe("computeRealDecimalFromRealQuotient", (): void => {
    it("returns the decimal representation of the quotient", (): void => {
        const realQuotient = [7, 6] as RealQuotient

        const actual = computeRealDecimalFromRealQuotient(realQuotient)

        const expected = 1.166667 as RealDecimal
        expect(actual).toBeCloseToTyped(expected)
    })
})
