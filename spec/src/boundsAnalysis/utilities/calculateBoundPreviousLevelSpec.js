const {calculateBoundPreviousLevel} = require("../../../../src/boundsAnalysis/utilities/calculateBoundPreviousLevel")

describe("calculateBoundPreviousLevel", () => {
    it("gives the previous level for this bound (since some bounds skip levels)", () => {
        const bound = {
            levels: ["MEDIUM", "VERY_HIGH"],
        }

        const result = calculateBoundPreviousLevel(bound, "VERY_HIGH")

        expect(result).toBe("MEDIUM")
    })
})
