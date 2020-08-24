import { computeLog } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code"

describe("computeLog", () => {
    it("returns the logarithm with the specified base of the power", () => {
        const power = 9
        const base = 3

        const actual = computeLog(power, base)

        const expected = 2
        expect(actual).toBeCloseTo(expected, ACCURACY_THRESHOLD)
    })

    it("is accurate", () => {
        const power = 5
        const base = 2

        const actual = computeLog(power, base)

        const expected = 2.32192809489
        expect(actual).toBeCloseTo(expected)
    })
})
