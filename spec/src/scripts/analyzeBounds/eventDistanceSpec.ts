import { computeEventDistance } from "../../../../src/scripts/analyzeBounds/eventDistance"
import { HistoricalEvent, History } from "../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../src/utilities/types"

describe("computeEventDistance", () => {
    it("returns the difference in position between the event and the previous event in the history", () => {
        const event: HistoricalEvent = { position: 5 } as HistoricalEvent
        const history = [{ position: 3 }, event] as History
        const index = 1

        const result = computeEventDistance(event, index, history)

        expect(result).toBe(2 as Cents)
    })
})
