import { Integer, IntegerDecimal, Rational } from "../../../../../src/general/math/rational/real"
import { RationalDecimal } from "../../../../../src/general/math/rational/real/decimal"
import { Real } from "../../../../../src/general/math/real"
import { RealDecimal } from "../../../../../src/general/math/real/decimal"
import { computeRealFromDecimal } from "../../../../../src/general/math/real/fromDecimal"

describe("computeRealFromDecimal", (): void => {
    it("creates a real from a decimal", (): void => {
        const decimal = 7.534635 as RealDecimal

        const actual = computeRealFromDecimal(decimal)

        const expected: Real = { decimal: 7.534635 as RealDecimal }
        expect(actual).toEqual(expected)
    })

    it("works for rational decimals", (): void => {
        const rationalDecimal = 7.5 as RationalDecimal

        const actual = computeRealFromDecimal(rationalDecimal)

        const expected: Rational = { decimal: 7.5 as RationalDecimal }
        expect(actual).toEqual(expected)
    })

    it("works for integer decimals", (): void => {
        const integerDecimal = 7 as IntegerDecimal

        const actual = computeRealFromDecimal(integerDecimal)

        const expected: Integer = { decimal: 7 as IntegerDecimal }
        expect(actual).toEqual(expected)
    })
})
