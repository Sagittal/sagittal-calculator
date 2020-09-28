import { Num } from "../../../../../src/general/math/num"
import { Decimal } from "../../../../../src/general/math/num/decimal"
import { computeNumFromDecimal } from "../../../../../src/general/math/num/fromDecimal"
import { Integer, IntegerDecimal, Ratio } from "../../../../../src/general/math/rational/num"
import { RationalDecimal } from "../../../../../src/general/math/rational/num/decimal"

describe("computeNumFromDecimal", (): void => {
    it("creates a num from a decimal", (): void => {
        const decimal = 7.534635 as Decimal

        const actual = computeNumFromDecimal(decimal)

        const expected: Num = { decimal: 7.534635 as Decimal }
        expect(actual).toEqual(expected)
    })

    it("works for rational decimals", (): void => {
        const rationalDecimal = 7.5 as RationalDecimal

        const actual = computeNumFromDecimal(rationalDecimal)

        const expected: Ratio = { decimal: 7.5 as RationalDecimal }
        expect(actual).toEqual(expected)
    })

    it("works for integer decimals", (): void => {
        const integerDecimal = 7 as IntegerDecimal

        const actual = computeNumFromDecimal(integerDecimal)

        const expected: Integer = { decimal: 7 as IntegerDecimal }
        expect(actual).toEqual(expected)
    })
})
