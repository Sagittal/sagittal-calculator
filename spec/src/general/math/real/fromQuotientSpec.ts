import { Integer, IntegerQuotient, Rational } from "../../../../../src/general/math/rational/real"
import { RationalQuotient } from "../../../../../src/general/math/rational/real/quotient"
import { computeRealFromQuotient, Real } from "../../../../../src/general/math/real"
import { Quotient } from "../../../../../src/general/math/real/quotient"

describe("computeRealFromQuotient", (): void => {
    it("creates a real from a quotient", (): void => {
        const quotient = [7.5, 5] as Quotient

        const actual = computeRealFromQuotient(quotient)

        const expected: Real = { quotient: [7.5, 5] as Quotient }
        expect(actual).toEqual(expected)
    })

    it("works for rational quotients", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = computeRealFromQuotient(rationalQuotient)

        const expected: Rational = { quotient: [7, 5] as RationalQuotient }
        expect(actual).toEqual(expected)
    })

    it("works for integer quotients", (): void => {
        const integerQuotient = [35, 1] as IntegerQuotient

        const actual = computeRealFromQuotient(integerQuotient)

        const expected: Integer = { quotient: [35, 1] as IntegerQuotient }
        expect(actual).toEqual(expected)
    })
})
