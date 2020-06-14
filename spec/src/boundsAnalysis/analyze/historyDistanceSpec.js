const {computeHistoryDistance} = require("../../../../src/boundsAnalysis/analyze/historyDistance")

describe("computeHistoryDistance", () => {
    it("sums up the distances of all the events in the history (they are already all positive)", () => {
       const events = [
           { distance: 4 },
           { distance: 5 },
           { distance: 6 },
       ]

        const result = computeHistoryDistance(events)

        expect(result).toBe(15)
    })
})
