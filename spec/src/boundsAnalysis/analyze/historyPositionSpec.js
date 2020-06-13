const {computeHistoryPosition} = require("../../../../src/boundsAnalysis/analyze/historyPosition")

describe("computeHistoryPosition", () => {
    it("returns the position of the history's final event", () => {
        const history = [
            {position: 10.010},
            {position: 10.030},
            {position: 10.020},
        ]

        const result = computeHistoryPosition(history)

        expect(result).toBe(10.020)
    })
})
