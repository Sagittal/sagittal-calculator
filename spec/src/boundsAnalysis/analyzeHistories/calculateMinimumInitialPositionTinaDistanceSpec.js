const {calculateMinimumInitialPositionTinaDistance} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateMinimumInitialPositionTinaDistance")

describe("calculateMinimumInitialPositionTinaDistance", () => {
    it("takes the absolute values of the initial position tina errors in order to compare them", () => {
        const analyzedHistories = [
            {initialPositionTinaDistance: 1},
            {initialPositionTinaDistance: -0.5},
        ]

        const result = calculateMinimumInitialPositionTinaDistance(analyzedHistories)

        expect(result).toBe(0.5)
    })
})
