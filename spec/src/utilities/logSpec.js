const {computeLog} = require("../../../src/utilities/log")
const {ACCURACY_THRESHOLD} = require("../../../src/utilities/constants")

describe("computeLog", () => {
    it("returns the logarithmic with the specified base of the value", () => {
        const value = 9
        const base = 3

        const result = computeLog(value, base)

        expect(result).toBeCloseTo(2, ACCURACY_THRESHOLD)
    })
})
