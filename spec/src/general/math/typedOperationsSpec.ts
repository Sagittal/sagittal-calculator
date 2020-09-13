import { Base, Exponent, Integer, log, Power, round } from "../../../../src/general/math"

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

        const expected = 2.32192809489 as Exponent
        expect(actual).toBeCloseToTyped(expected)
    })
})

describe("round", (): void => {
    const num: number = 29.59845456

    it("rounds to the precision specified", (): void => {
        expect(round(num, 1 as Integer)).toBe(29.6)
        expect(round(num, 5 as Integer)).toBe(29.59845)
        expect(round(num, 6 as Integer)).toBe(29.598455)
    })

    it("defaults to precision 0", (): void => {
        expect(round(num)).toBe(30)
    })
})
