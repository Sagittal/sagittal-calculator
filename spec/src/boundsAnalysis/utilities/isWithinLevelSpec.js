const {isWithinLevel} = require("../../../../src/boundsAnalysis/utilities/isWithinLevel.js")

describe("isWithinLevel", () => {
    it("returns true if the level is below or at to the target level; false otherwise", () => {
        expect(isWithinLevel("Medium", "Insane")).toBe(true)
        expect(isWithinLevel("High", "Insane")).toBe(true)
        expect(isWithinLevel("VeryHigh", "Insane")).toBe(true)
        expect(isWithinLevel("Extreme", "Insane")).toBe(true)
        expect(isWithinLevel("Insane", "Insane")).toBe(true)

        expect(isWithinLevel("Medium", "Extreme")).toBe(true)
        expect(isWithinLevel("High", "Extreme")).toBe(true)
        expect(isWithinLevel("VeryHigh", "Extreme")).toBe(true)
        expect(isWithinLevel("Extreme", "Extreme")).toBe(true)
        expect(isWithinLevel("Insane", "Extreme")).toBe(false)

        expect(isWithinLevel("Medium", "VeryHigh")).toBe(true)
        expect(isWithinLevel("High", "VeryHigh")).toBe(true)
        expect(isWithinLevel("VeryHigh", "VeryHigh")).toBe(true)
        expect(isWithinLevel("Extreme", "VeryHigh")).toBe(false)
        expect(isWithinLevel("Insane", "VeryHigh")).toBe(false)

        expect(isWithinLevel("Medium", "High")).toBe(true)
        expect(isWithinLevel("High", "High")).toBe(true)
        expect(isWithinLevel("VeryHigh", "High")).toBe(false)
        expect(isWithinLevel("Extreme", "High")).toBe(false)
        expect(isWithinLevel("Insane", "High")).toBe(false)

        expect(isWithinLevel("Medium", "Medium")).toBe(true)
        expect(isWithinLevel("High", "Medium")).toBe(false)
        expect(isWithinLevel("VeryHigh", "Medium")).toBe(false)
        expect(isWithinLevel("Extreme", "Medium")).toBe(false)
        expect(isWithinLevel("Insane", "Medium")).toBe(false)
    })
})
