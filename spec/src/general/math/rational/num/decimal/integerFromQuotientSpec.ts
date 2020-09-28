import { Integer, RationalQuotient } from "../../../../../../../src/general/math"
import { computeIntegerFromIntegerQuotient } from "../../../../../../../src/general/math/rational/num/decimal/integerFromQuotient"

describe("computeIntegerFromIntegerQuotient", (): void => {
    it("returns the numerator, if the denominator is 1", (): void => {
        const rationalQuotient = [99, 1] as RationalQuotient<{ irrational: false, integer: true }>

        const actual = computeIntegerFromIntegerQuotient(rationalQuotient)

        const expected: Integer = 99 as Integer
        expect(actual).toBe(expected)
    })

    it("works if the denominator divides evenly into the numerator", (): void => {
        const rationalQuotient = [99, 3] as RationalQuotient<{ irrational: false, integer: true }>

        const actual = computeIntegerFromIntegerQuotient(rationalQuotient)

        const expected: Integer = 33 as Integer
        expect(actual).toBe(expected)
    })

    it("throws an error if the denominator does not divide evenly into the numerator", (): void => {
        const rationalQuotient = [99, 2] as RationalQuotient<{ irrational: false, integer: true }>

        expect((): void => {
            computeIntegerFromIntegerQuotient(rationalQuotient)
        }).toThrowError(`Tried to compute integer from non-integer quotient 99/2.`)
    })
})
