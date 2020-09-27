import { Integer, RationalRatio } from "../../../../../../../src/general/math"
import { computeIntegerFromIntegerRatio } from "../../../../../../../src/general/math/rational/num/decimal/integerFromRatio"

describe("computeIntegerFromIntegerRatio", (): void => {
    it("returns the numerator, if the denominator is 1", (): void => {
        const rationalRatio = [99, 1] as RationalRatio<{ irrational: false, integer: true }>

        const actual = computeIntegerFromIntegerRatio(rationalRatio)

        const expected: Integer = 99 as Integer
        expect(actual).toBe(expected)
    })

    it("works if the denominator divides evenly into the numerator", (): void => {
        const rationalRatio = [99, 3] as RationalRatio<{ irrational: false, integer: true }>

        const actual = computeIntegerFromIntegerRatio(rationalRatio)

        const expected: Integer = 33 as Integer
        expect(actual).toBe(expected)
    })

    it("throws an error if the denominator does not divide evenly into the numerator", (): void => {
        const rationalRatio = [99, 2] as RationalRatio<{ irrational: false, integer: true }>

        expect((): void => {
            computeIntegerFromIntegerRatio(rationalRatio)
        }).toThrowError(`Tried to compute integer from non-integer ratio 99/2.`)
    })
})
