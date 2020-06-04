const {calculateLevelCommas, isWithinLevel} = require("../../../../src/boundsAnalysis/data/levels")

describe("calculateLevelCommas", () => {
    it("returns the commas for the levels up to and including the target level", () => {
        expect(calculateLevelCommas("medium").length).toBe(13)
        expect(calculateLevelCommas("high").length).toBe(32)
        expect(calculateLevelCommas("veryHigh").length).toBe(55)
        expect(calculateLevelCommas("extreme").length).toBe(150)
    })

    it("returns only the comma data (not the bound data)", () => {
        const levelCommas = calculateLevelCommas("medium")

        expect(levelCommas[0]).toEqual({
            introducingLevel: "medium",
            position: 0,
            symbol: "|",
            mina: 0,
        })
    })
})

describe("isWithinLevel", () => {
    it("returns true if the level is below or at to the target level; false otherwise", () => {
        expect(isWithinLevel("medium", "insane")).toBe(true)
        expect(isWithinLevel("high", "insane")).toBe(true)
        expect(isWithinLevel("veryHigh", "insane")).toBe(true)
        expect(isWithinLevel("extreme", "insane")).toBe(true)
        expect(isWithinLevel("insane", "insane")).toBe(true)

        expect(isWithinLevel("medium", "extreme")).toBe(true)
        expect(isWithinLevel("high", "extreme")).toBe(true)
        expect(isWithinLevel("veryHigh", "extreme")).toBe(true)
        expect(isWithinLevel("extreme", "extreme")).toBe(true)
        expect(isWithinLevel("insane", "extreme")).toBe(false)

        expect(isWithinLevel("medium", "veryHigh")).toBe(true)
        expect(isWithinLevel("high", "veryHigh")).toBe(true)
        expect(isWithinLevel("veryHigh", "veryHigh")).toBe(true)
        expect(isWithinLevel("extreme", "veryHigh")).toBe(false)
        expect(isWithinLevel("insane", "veryHigh")).toBe(false)

        expect(isWithinLevel("medium", "high")).toBe(true)
        expect(isWithinLevel("high", "high")).toBe(true)
        expect(isWithinLevel("veryHigh", "high")).toBe(false)
        expect(isWithinLevel("extreme", "high")).toBe(false)
        expect(isWithinLevel("insane", "high")).toBe(false)

        expect(isWithinLevel("medium", "medium")).toBe(true)
        expect(isWithinLevel("high", "medium")).toBe(false)
        expect(isWithinLevel("veryHigh", "medium")).toBe(false)
        expect(isWithinLevel("extreme", "medium")).toBe(false)
        expect(isWithinLevel("insane", "medium")).toBe(false)
    })
})
