const {calculateRank} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateRank")

describe("calculateRank", () => {
    it("returns the worst rank of any of the events in the history", () => {
        const analyzedEvents = [
            {
                type: "EDA",
                level: "HIGH",
                position: 10.0,
                rank: 1,
            },
            {
                type: "SIZE",
                level: "VERY_HIGH",
                position: 10.2,
                rank: 3,
            },
            {
                type: "MEAN",
                level: "EXTREME",
                position: 10.1,
                rank: 2,
            },
        ]

        const result = calculateRank(analyzedEvents)

        expect(result).toBe(3)
    })
})
