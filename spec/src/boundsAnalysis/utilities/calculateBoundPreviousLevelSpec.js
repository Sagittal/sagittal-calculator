const {calculateBoundPreviousLevel} = require("../../../../src/boundsAnalysis/utilities/calculateBoundPreviousLevel")

describe("calculateBoundPreviousLevel", () => {
    it("gives the previous level for this bound (since some bounds skip levels)", () => {
        const bound = {
            levels: ["Medium", "VeryHigh"]
        }

        const result = calculateBoundPreviousLevel(bound, "VeryHigh")

        expect(result).toBe("Medium")
    })
})
