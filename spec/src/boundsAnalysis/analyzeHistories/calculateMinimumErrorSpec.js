const {calculateMinimumError} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateMinimumError")

describe("calculateMinimumError", () => {
    it("takes the absolute values of the errors in order to compare them", () => {
        const analyzedHistories = [
            {tinaError: 1},
            {tinaError: -0.5},
        ]

        const result = calculateMinimumError(analyzedHistories)

        expect(result).toBe(0.5)
    })
})
