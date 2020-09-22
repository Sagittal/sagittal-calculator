import { Integer, Ratio } from "../../../../../../src/general/math"
import { computeIntegerFromRatio } from "../../../../../../src/general/math/rational/ratio/integerFromRatio"

describe("computeIntegerFromRatio", (): void => {
    it("returns the numerator, if the denominator is 1", (): void => {
        const ratio = [99, 1] as Ratio<{ integer: true }>

        const actual = computeIntegerFromRatio(ratio)

        const expected: Integer = 99 as Integer
        expect(actual).toBe(expected)
    })

    it("works if the denominator divides evenly into the numerator", (): void => {
        const ratio = [99, 3] as Ratio<{ integer: true }>

        const actual = computeIntegerFromRatio(ratio)

        const expected: Integer = 33 as Integer
        expect(actual).toBe(expected)
    })

    it("throws an error if the denominator does not divide evenly into the numerator", (): void => {
        const ratio = [99, 2] as Ratio<{ integer: true }>

        expect((): void => {
            computeIntegerFromRatio(ratio)
        }).toThrowError(`Tried to compute integer from non-integer ratio 99/2.`)
    })
})
