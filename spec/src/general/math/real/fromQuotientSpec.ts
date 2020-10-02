import { Integer, IntegerQuotient, Rational } from "../../../../../src/general/math/rational/real"
import { RationalQuotient } from "../../../../../src/general/math/rational/real/quotient"
import { computeRealFromRealQuotient, Real } from "../../../../../src/general/math/real"
import { RealQuotient } from "../../../../../src/general/math/real/quotient"

describe("computeRealFromRealQuotient", (): void => {
    it("creates a real from a quotient", (): void => {
        const realQuotient = [7.5, 5] as RealQuotient

        const actual = computeRealFromRealQuotient(realQuotient)

        const expected: Real = { quotient: [7.5, 5] as RealQuotient }
        expect(actual).toEqual(expected)
    })

    it("works for rational quotients", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = computeRealFromRealQuotient(rationalQuotient)

        const expected: Rational = { quotient: [7, 5] as RationalQuotient }
        expect(actual).toEqual(expected)
    })

    it("works for integer quotients", (): void => {
        const integerQuotient = [35, 1] as IntegerQuotient

        const actual = computeRealFromRealQuotient(integerQuotient)

        const expected: Integer = { quotient: [35, 1] as IntegerQuotient }
        expect(actual).toEqual(expected)
    })
})
