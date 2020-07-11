import { computeHistoryDistance } from "../../../../src/scripts/analyzeBounds/historyDistance"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../src/utilities/types"

describe("computeHistoryDistance", () => {
    it("sums up the distances of all the events in the history (they are already all positive)", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { distance: 4 } as AnalyzedEvent,
            { distance: 5 } as AnalyzedEvent,
            { distance: 6 } as AnalyzedEvent,
        ]

        const result = computeHistoryDistance(analyzedEvents)

        expect(result).toBe(15 as Cents)
    })
})
