import { computeNumFromNumParameter, Num } from "../../../../../src/general/math/num"
import { Decimal } from "../../../../../src/general/math/num/decimal"
import { Integer, IntegerDecimal, Ratio } from "../../../../../src/general/math/rational/num"
import { RationalDecimal } from "../../../../../src/general/math/rational/num/decimal"

describe("computeNumFromNumParameter", (): void => {
    it("works for nums", (): void => {
        const num = { decimal: 5.676895 as Decimal } as Num

        const actual = computeNumFromNumParameter(num)

        expect(actual).toEqual(num)
    })

    it("works for decimals", (): void => {
        const decimal = 5.676895 as Decimal

        const actual = computeNumFromNumParameter(decimal)

        const expected: Num = { decimal }
        expect(actual).toEqual(expected)
    })

    it("works for ratios", (): void => {
        const ratio = { decimal: 5.6 as RationalDecimal } as Ratio

        const actual = computeNumFromNumParameter(ratio)

        expect(actual).toEqual(ratio)
    })

    it("works for rational decimals", (): void => {
        const rationalDecimal = 5.6 as RationalDecimal

        const actual = computeNumFromNumParameter(rationalDecimal)

        const expected: Ratio = { decimal: rationalDecimal }
        expect(actual).toEqual(expected)
    })

    it("works for integers", (): void => {
        const integer = { decimal: 6 as IntegerDecimal } as Integer

        const actual = computeNumFromNumParameter(integer)

        expect(actual).toEqual(integer)
    })

    it("works for integer decimals", (): void => {
        const integerDecimal = 6 as IntegerDecimal

        const actual = computeNumFromNumParameter(integerDecimal)

        const expected: Integer = { decimal: integerDecimal }
        expect(actual).toEqual(expected)
    })
})
