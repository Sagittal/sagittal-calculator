const {computeBoundNextLevel} = require("../../../../src/boundsAnalysis/plot/boundNextLevel")

describe("computeBoundNextLevel", () => {
    it("gives the next level for this bound (since some bounds skip levels)", () => {
        const bound = {
            levels: ["MEDIUM", "VERY_HIGH"],
        }

        const result = computeBoundNextLevel(bound, "MEDIUM")

        expect(result).toBe("VERY_HIGH")
    })
})
