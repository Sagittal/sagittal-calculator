import { IntegerDecimal } from "../../../../../../../src/general/math"
import { computeIntegerDecimalFromIntegerQuotient } from "../../../../../../../src/general/math/rational/num/decimal/fromQuotient"
import { IntegerQuotient } from "../../../../../../../src/general/math/rational/num/quotient"

describe("computeIntegerDecimalFromIntegerQuotient", (): void => {
    it("returns the numerator, if the denominator is 1", (): void => {
        const integerQuotient = [99, 1] as IntegerQuotient

        const actual = computeIntegerDecimalFromIntegerQuotient(integerQuotient)

        const expected: IntegerDecimal = 99 as IntegerDecimal
        expect(actual).toBe(expected)
    })

    it("works if the denominator divides evenly into the numerator", (): void => {
        const integerQuotient = [99, 3] as IntegerQuotient

        const actual = computeIntegerDecimalFromIntegerQuotient(integerQuotient)

        const expected: IntegerDecimal = 33 as IntegerDecimal
        expect(actual).toBe(expected)
    })

    it("throws an error if the denominator does not divide evenly into the numerator", (): void => {
        const integerQuotient = [99, 2] as IntegerQuotient

        expect((): void => {
            computeIntegerDecimalFromIntegerQuotient(integerQuotient)
        }).toThrowError(`Tried to compute integer from non-integer quotient 99/2.`)
    })
})
