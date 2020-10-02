import { Integer, IntegerDecimal, Rational } from "../../../../../src/general/math/rational/real"
import { RationalDecimal } from "../../../../../src/general/math/rational/real/decimal"
import { computeRealFromRealOrRealDecimal, Real } from "../../../../../src/general/math/real"
import { RealDecimal } from "../../../../../src/general/math/real/decimal"

describe("computeRealFromRealOrDecimal", (): void => {
    it("works for reals", (): void => {
        const real = { decimal: 5.676895 as RealDecimal } as Real

        const actual = computeRealFromRealOrRealDecimal(real)

        expect(actual).toEqual(real)
    })

    it("works for decimals", (): void => {
        const realDecimal = 5.676895 as RealDecimal

        const actual = computeRealFromRealOrRealDecimal(realDecimal)

        const expected: Real = { decimal: realDecimal }
        expect(actual).toEqual(expected)
    })

    it("works for rationals", (): void => {
        const rational = { decimal: 5.6 as RationalDecimal } as Rational

        const actual = computeRealFromRealOrRealDecimal(rational)

        expect(actual).toEqual(rational)
    })

    it("works for rational decimals", (): void => {
        const rationalDecimal = 5.6 as RationalDecimal

        const actual = computeRealFromRealOrRealDecimal(rationalDecimal)

        const expected: Rational = { decimal: rationalDecimal }
        expect(actual).toEqual(expected)
    })

    it("works for integers", (): void => {
        const integer = { decimal: 6 as IntegerDecimal } as Integer

        const actual = computeRealFromRealOrRealDecimal(integer)

        expect(actual).toEqual(integer)
    })

    it("works for integer decimals", (): void => {
        const integerDecimal = 6 as IntegerDecimal

        const actual = computeRealFromRealOrRealDecimal(integerDecimal)

        const expected: Integer = { decimal: integerDecimal }
        expect(actual).toEqual(expected)
    })
})
