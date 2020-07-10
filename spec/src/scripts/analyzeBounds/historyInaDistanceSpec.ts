import {computeHistoryInaDistance} from "../../../../src/scripts/analyzeBounds/historyInaDistance"

describe("computeHistoryInaDistance", () => {
    it("sums up the ina-distances of all the events in the history (they are already all positive)", () => {
        const events = [
            {inaDistance: 0.4},
            {inaDistance: 0.5},
            {inaDistance: 0.6},
        ]

        const result = computeHistoryInaDistance(events)

        expect(result).toBe(1.5)
    })
})
