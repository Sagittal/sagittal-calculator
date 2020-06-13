const {computeLevelCommas, computeIsWithinLevel} = require("../../../../src/boundsAnalysis/data/levels")

describe("computeLevelCommas", () => {
    it("returns the commas for the levels up to and including the target level", () => {
        expect(computeLevelCommas("MEDIUM").length).toBe(13)
        expect(computeLevelCommas("HIGH").length).toBe(32)
        expect(computeLevelCommas("VERY_HIGH").length).toBe(55)
        expect(computeLevelCommas("EXTREME").length).toBe(150)
    })

    it("returns only the comma data (not the bound data)", () => {
        const levelCommas = computeLevelCommas("MEDIUM")

        expect(levelCommas[0]).toEqual({
            introducingLevel: "MEDIUM",
            position: 0,
            symbol: "|",
            unicode: '', // TODO: really symbols should be separate still, like their own file, like how i seaparated commas and bounds already
            mina: 0,
        })
    })
})

describe("computeIsWithinLevel", () => {
    it("returns true if the level is below or at to the target level; false otherwise", () => {
        expect(computeIsWithinLevel("MEDIUM", "INSANE")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "INSANE")).toBe(true)
        expect(computeIsWithinLevel("VERY_HIGH", "INSANE")).toBe(true)
        expect(computeIsWithinLevel("EXTREME", "INSANE")).toBe(true)
        expect(computeIsWithinLevel("INSANE", "INSANE")).toBe(true)

        expect(computeIsWithinLevel("MEDIUM", "EXTREME")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "EXTREME")).toBe(true)
        expect(computeIsWithinLevel("VERY_HIGH", "EXTREME")).toBe(true)
        expect(computeIsWithinLevel("EXTREME", "EXTREME")).toBe(true)
        expect(computeIsWithinLevel("INSANE", "EXTREME")).toBe(false)

        expect(computeIsWithinLevel("MEDIUM", "VERY_HIGH")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "VERY_HIGH")).toBe(true)
        expect(computeIsWithinLevel("VERY_HIGH", "VERY_HIGH")).toBe(true)
        expect(computeIsWithinLevel("EXTREME", "VERY_HIGH")).toBe(false)
        expect(computeIsWithinLevel("INSANE", "VERY_HIGH")).toBe(false)

        expect(computeIsWithinLevel("MEDIUM", "HIGH")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "HIGH")).toBe(true)
        expect(computeIsWithinLevel("VERY_HIGH", "HIGH")).toBe(false)
        expect(computeIsWithinLevel("EXTREME", "HIGH")).toBe(false)
        expect(computeIsWithinLevel("INSANE", "HIGH")).toBe(false)

        expect(computeIsWithinLevel("MEDIUM", "MEDIUM")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "MEDIUM")).toBe(false)
        expect(computeIsWithinLevel("VERY_HIGH", "MEDIUM")).toBe(false)
        expect(computeIsWithinLevel("EXTREME", "MEDIUM")).toBe(false)
        expect(computeIsWithinLevel("INSANE", "MEDIUM")).toBe(false)
    })
})
