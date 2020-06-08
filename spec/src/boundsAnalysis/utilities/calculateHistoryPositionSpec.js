const {calculateHistoryPosition} = require("../../../../src/boundsAnalysis/utilities/calculateHistoryPosition")

describe("calculateHistoryPosition", () => {
    it("returns the position of the history's final event", () => {
        const history = [
            {position: 10.010},
            {position: 10.030},
            {position: 10.020},
        ]

        const result = calculateHistoryPosition(history)

        expect(result).toBe(10.020)
    })
})
