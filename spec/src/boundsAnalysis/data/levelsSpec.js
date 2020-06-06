const {calculateLevelCommas, isWithinLevel} = require("../../../../src/boundsAnalysis/data/levels")

describe("calculateLevelCommas", () => {
    it("returns the commas for the levels up to and including the target level", () => {
        expect(calculateLevelCommas("MEDIUM").length).toBe(13)
        expect(calculateLevelCommas("HIGH").length).toBe(32)
        expect(calculateLevelCommas("VERY_HIGH").length).toBe(55)
        expect(calculateLevelCommas("EXTREME").length).toBe(150)
    })

    it("returns only the comma data (not the bound data)", () => {
        const levelCommas = calculateLevelCommas("MEDIUM")

        expect(levelCommas[0]).toEqual({
            introducingLevel: "MEDIUM",
            position: 0,
            symbol: "|",
            mina: 0,
        })
    })
})

describe("isWithinLevel", () => {
    it("returns true if the level is below or at to the target level; false otherwise", () => {
        expect(isWithinLevel("MEDIUM", "INSANE")).toBe(true)
        expect(isWithinLevel("HIGH", "INSANE")).toBe(true)
        expect(isWithinLevel("VERY_HIGH", "INSANE")).toBe(true)
        expect(isWithinLevel("EXTREME", "INSANE")).toBe(true)
        expect(isWithinLevel("INSANE", "INSANE")).toBe(true)

        expect(isWithinLevel("MEDIUM", "EXTREME")).toBe(true)
        expect(isWithinLevel("HIGH", "EXTREME")).toBe(true)
        expect(isWithinLevel("VERY_HIGH", "EXTREME")).toBe(true)
        expect(isWithinLevel("EXTREME", "EXTREME")).toBe(true)
        expect(isWithinLevel("INSANE", "EXTREME")).toBe(false)

        expect(isWithinLevel("MEDIUM", "VERY_HIGH")).toBe(true)
        expect(isWithinLevel("HIGH", "VERY_HIGH")).toBe(true)
        expect(isWithinLevel("VERY_HIGH", "VERY_HIGH")).toBe(true)
        expect(isWithinLevel("EXTREME", "VERY_HIGH")).toBe(false)
        expect(isWithinLevel("INSANE", "VERY_HIGH")).toBe(false)

        expect(isWithinLevel("MEDIUM", "HIGH")).toBe(true)
        expect(isWithinLevel("HIGH", "HIGH")).toBe(true)
        expect(isWithinLevel("VERY_HIGH", "HIGH")).toBe(false)
        expect(isWithinLevel("EXTREME", "HIGH")).toBe(false)
        expect(isWithinLevel("INSANE", "HIGH")).toBe(false)

        expect(isWithinLevel("MEDIUM", "MEDIUM")).toBe(true)
        expect(isWithinLevel("HIGH", "MEDIUM")).toBe(false)
        expect(isWithinLevel("VERY_HIGH", "MEDIUM")).toBe(false)
        expect(isWithinLevel("EXTREME", "MEDIUM")).toBe(false)
        expect(isWithinLevel("INSANE", "MEDIUM")).toBe(false)
    })
})
