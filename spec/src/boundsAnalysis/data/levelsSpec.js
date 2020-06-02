const {calculateLevelCommas} = require("../../../../src/boundsAnalysis/data/levels")

describe("calculateLevelCommas", () => {
    it("returns the commas for the levels up to and including the target level", () => {
        expect(calculateLevelCommas("Medium").length).toBe(13)
        expect(calculateLevelCommas("High").length).toBe(32)
        expect(calculateLevelCommas("VeryHigh").length).toBe(55)
        expect(calculateLevelCommas("Extreme").length).toBe(150)
    })

    it("returns only the comma data (not the bound data)", () => {
        const levelCommas = calculateLevelCommas("Medium")

        expect(levelCommas[0]).toEqual({
            introducingLevel: "Medium",
            position: 0,
            symbol: "|",
            mina: 0,
        })
    })
})
