import { computeHistoryPosition } from "../../../../src/scripts/analyzeBounds/historyPosition"
import { Cents } from "../../../../src/utilities/types"
import { HistoricalEvent, History } from "../../../../src/scripts/analyzeBounds/types"

describe("computeHistoryPosition", () => {
    it("returns the position of the history's final event", () => {
        const history: History = [
            { position: 10.010 } as HistoricalEvent,
            { position: 10.030 } as HistoricalEvent,
            { position: 10.020 } as HistoricalEvent,
        ]

        const result = computeHistoryPosition(history)

        expect(result).toBe(10.020 as Cents)
    })
})
