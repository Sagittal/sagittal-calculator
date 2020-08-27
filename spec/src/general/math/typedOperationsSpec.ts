import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { Integer, log, round } from "../../../../src/general/math"
import { Base, Power } from "../../../../src/general/math/types"
import { reciprocal } from "../../../../src/general/math/typedOperations"

describe("log", () => {
    it("returns the logarithm with the specified base of the power", () => {
        const power = 9 as Power
        const base = 3 as Base

        const actual = log(power, base)

        const expected = 2
        expect(actual).toBeCloseTo(expected, ACCURACY_THRESHOLD)
    })

    it("is accurate", () => {
        const power = 5 as Power
        const base = 2 as Base

        const actual = log(power, base)

        const expected = 2.32192809489
        expect(actual).toBeCloseTo(expected)
    })
})

describe("round", () => {
    const num: number = 29.59845456

    it("rounds to the precision specified", () => {
        expect(round(num, 1 as Integer)).toBe(29.6)
        expect(round(num, 5 as Integer)).toBe(29.59845)
        expect(round(num, 6 as Integer)).toBe(29.598455)
    })

    it("defaults to precision 0", () => {
        expect(round(num)).toBe(30)
    })
})
