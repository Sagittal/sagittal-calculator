const {computeLevelSymbols, computeIsWithinLevel} = require("../../../../src/notations/ji/levelsSymbols")

describe("computeLevelSymbols", () => {
    it("returns the symbols for the levels up to and including the target level", () => {
        expect(computeLevelSymbols("MEDIUM").length).toBe(13)
        expect(computeLevelSymbols("HIGH").length).toBe(32)
        expect(computeLevelSymbols("ULTRA").length).toBe(55)
        expect(computeLevelSymbols("EXTREME").length).toBe(149)
    })

    it("returns only the symbol data (not the bound data)", () => {
        const levelCommas = computeLevelSymbols("MEDIUM")

        expect(levelCommas[0]).toEqual({
            id: 0,
            introducingLevel: "MEDIUM",
            ascii: "|",
            unicode: "",
            mina: 0,
            primaryComma: {
                position: 0,
                monzo: [],
            },
            elements: [],
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
