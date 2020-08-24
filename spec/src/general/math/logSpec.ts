import { computeLog } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code"

describe("computeLog", () => {
    it("returns the logarithm with the specified base of the value", () => {
        const value = 9
        const base = 3

        const actual = computeLog(value, base)

        const expected = 2
        expect(actual).toBeCloseTo(expected, ACCURACY_THRESHOLD)
    })

    it("is accurate", () => {
        const value = 5
        const base = 2

        const actual = computeLog(value, base)

        const expected = 2.32192809489
        expect(actual).toBeCloseTo(expected)
    })
})
