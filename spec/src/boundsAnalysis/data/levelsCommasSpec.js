const {computeLevelCommas, computeIsWithinLevel} = require("../../../../src/boundsAnalysis/data/levelsCommas")

describe("computeLevelCommas", () => {
    it("returns the commas for the levels up to and including the target level", () => {
        expect(computeLevelCommas("MEDIUM").length).toBe(13)
        expect(computeLevelCommas("HIGH").length).toBe(32)
        expect(computeLevelCommas("ULTRA").length).toBe(55)
        expect(computeLevelCommas("EXTREME").length).toBe(149)
    })

    it("returns only the comma data (not the bound data)", () => {
        const levelCommas = computeLevelCommas("MEDIUM")

        expect(levelCommas[0]).toEqual({
            introducingLevel: "MEDIUM",
            position: 0,
            ascii: "|",
            unicode: "",
            mina: 0,
            monzo: [],
            id: 0,
        })
    })
})

describe("computeIsWithinLevel", () => {
    it("returns true if the level is below or at to the target level; false otherwise", () => {
        expect(computeIsWithinLevel("MEDIUM", "INSANE")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "INSANE")).toBe(true)
        expect(computeIsWithinLevel("ULTRA", "INSANE")).toBe(true)
        expect(computeIsWithinLevel("EXTREME", "INSANE")).toBe(true)
        expect(computeIsWithinLevel("INSANE", "INSANE")).toBe(true)

        expect(computeIsWithinLevel("MEDIUM", "EXTREME")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "EXTREME")).toBe(true)
        expect(computeIsWithinLevel("ULTRA", "EXTREME")).toBe(true)
        expect(computeIsWithinLevel("EXTREME", "EXTREME")).toBe(true)
        expect(computeIsWithinLevel("INSANE", "EXTREME")).toBe(false)

        expect(computeIsWithinLevel("MEDIUM", "ULTRA")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "ULTRA")).toBe(true)
        expect(computeIsWithinLevel("ULTRA", "ULTRA")).toBe(true)
        expect(computeIsWithinLevel("EXTREME", "ULTRA")).toBe(false)
        expect(computeIsWithinLevel("INSANE", "ULTRA")).toBe(false)

        expect(computeIsWithinLevel("MEDIUM", "HIGH")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "HIGH")).toBe(true)
        expect(computeIsWithinLevel("ULTRA", "HIGH")).toBe(false)
        expect(computeIsWithinLevel("EXTREME", "HIGH")).toBe(false)
        expect(computeIsWithinLevel("INSANE", "HIGH")).toBe(false)

        expect(computeIsWithinLevel("MEDIUM", "MEDIUM")).toBe(true)
        expect(computeIsWithinLevel("HIGH", "MEDIUM")).toBe(false)
        expect(computeIsWithinLevel("ULTRA", "MEDIUM")).toBe(false)
        expect(computeIsWithinLevel("EXTREME", "MEDIUM")).toBe(false)
        expect(computeIsWithinLevel("INSANE", "MEDIUM")).toBe(false)
    })
})
