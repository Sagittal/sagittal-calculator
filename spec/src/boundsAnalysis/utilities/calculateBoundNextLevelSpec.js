const {calculateBoundNextLevel} = require("../../../../src/boundsAnalysis/utilities/calculateBoundNextLevel")

describe("calculateBoundNextLevel", () => {
    it("gives the next level for this bound (since some bounds skip levels)", () => {
        const bound = {
            levels: ["MEDIUM", "VERY_HIGH"],
        }

        const result = calculateBoundNextLevel(bound, "MEDIUM")

        expect(result).toBe("VERY_HIGH")
    })
})
