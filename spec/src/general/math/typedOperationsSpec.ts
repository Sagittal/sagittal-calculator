import { DEFAULT_PRECISION, Precision } from "../../../../src/general/code"
import { Base, Exponent, log, Power, round } from "../../../../src/general/math"

describe("log", (): void => {
    it("returns the logarithm with the specified base of the power", (): void => {
        const power = 9 as Power
        const base = 3 as Base

        const actual = log(power, base)

        const expected = 2 as Exponent
        expect(actual).toBeCloseToTyped(expected)
    })

    it("is accurate", (): void => {
        const power = 5 as Power
        const base = 2 as Base

        const actual = log(power, base)

        const expected = 2.321928 as Exponent
        expect(actual).toBeCloseToTyped(expected)
    })
})

describe("round", (): void => {
    const number: number = 29.59845456

    it("rounds to the precision specified", (): void => {
        expect(round(number, 1 as Precision)).toBe(29.6)
        expect(round(number, 5 as Precision)).toBe(29.59845)
        expect(round(number, 6 as Precision)).toBe(29.598455)
    })

    it("defaults to precision 0", (): void => {
        expect(round(number)).toBe(30)
    })

    it("leaves scientific notated values alone", (): void => {
        const number = 5.153775207320113e+47

        expect(round(number)).toBe(number)
    })

    it("leaves scientific notated values alone, even with an accuracy threshold", (): void => {
        const number = 5.153775207320113e+47

        expect(round(number, DEFAULT_PRECISION)).toBe(number)
    })
})
