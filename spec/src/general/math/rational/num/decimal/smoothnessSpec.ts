import { RationalDecimal } from "../../../../../../../src/general/math"
import { Smoothness } from "../../../../../../../src/general/math/rational"
import { IntegerDecimal, isSmoothIntegerDecimal } from "../../../../../../../src/general/math/rational/num/decimal"
import { computeRationalDecimalSmoothness } from "../../../../../../../src/general/math/rational/num/decimal/smoothness"

describe("isSmoothIntegerDecimal", (): void => {
    it("works, example when it is true (no prime factors > smoothness)", (): void => {
        const integerDecimal = 35 as IntegerDecimal
        const smoothness = 7 as 7 & Smoothness

        const actual = isSmoothIntegerDecimal(integerDecimal, smoothness)

        expect(actual).toBeTruthy()
    })

    it("works, example when it is false (some prime factors > smoothness)", (): void => {
        const integerDecimal = 35 as IntegerDecimal
        const smoothness = 5 as 5 & Smoothness

        const actual = isSmoothIntegerDecimal(integerDecimal, smoothness)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalDecimalSmoothness", (): void => {
    it("works for an integer decimal", (): void => {
        const integerDecimal = 35 as IntegerDecimal

        const actual = computeRationalDecimalSmoothness(integerDecimal)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for a rational decimal", (): void => {
        const rationalDecimal = 5.5 as RationalDecimal

        const actual = computeRationalDecimalSmoothness(rationalDecimal)

        const expected = 11 as Smoothness
        expect(actual).toBe(expected)
    })
})

describe("computeIntegerDecimalSmoothness", (): void => {
    it("works", (): void => {
        const integerDecimal = 49 as IntegerDecimal

        const actual = computeRationalDecimalSmoothness(integerDecimal)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })
})
