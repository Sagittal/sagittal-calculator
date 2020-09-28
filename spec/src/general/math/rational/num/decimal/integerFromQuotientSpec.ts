import { Integer } from "../../../../../../../src/general/math"
import { computeIntegerFromIntegerQuotient } from "../../../../../../../src/general/math/rational/num/decimal/integerFromQuotient"
import { IntegerQuotient } from "../../../../../../../src/general/math/rational/num/quotient"

describe("computeIntegerFromIntegerQuotient", (): void => {
    it("returns the numerator, if the denominator is 1", (): void => {
        const integerQuotient = [99, 1] as IntegerQuotient

        const actual = computeIntegerFromIntegerQuotient(integerQuotient)

        const expected: Integer = 99 as Integer
        expect(actual).toBe(expected)
    })

    it("works if the denominator divides evenly into the numerator", (): void => {
        const integerQuotient = [99, 3] as IntegerQuotient

        const actual = computeIntegerFromIntegerQuotient(integerQuotient)

        const expected: Integer = 33 as Integer
        expect(actual).toBe(expected)
    })

    it("throws an error if the denominator does not divide evenly into the numerator", (): void => {
        const integerQuotient = [99, 2] as IntegerQuotient

        expect((): void => {
            computeIntegerFromIntegerQuotient(integerQuotient)
        }).toThrowError(`Tried to compute integer from non-integer quotient 99/2.`)
    })
})
