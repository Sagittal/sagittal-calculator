const {calculateBoundPreviousLevel} = require("../../../../src/boundsAnalysis/utilities/calculateBoundPreviousLevel")

describe("calculateBoundPreviousLevel", () => {
    it("gives the previous level for this bound (since some bounds skip levels)", () => {
        const bound = {
            levels: ["medium", "veryHigh"],
        }

        const result = calculateBoundPreviousLevel(bound, "veryHigh")

        expect(result).toBe("medium")
    })
})
