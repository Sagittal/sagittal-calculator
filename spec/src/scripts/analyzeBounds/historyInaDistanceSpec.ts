import { computeHistoryInaDistance } from "../../../../src/scripts/analyzeBounds/historyInaDistance"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { Proportion } from "../../../../src/utilities/types"

describe("computeHistoryInaDistance", () => {
    it("sums up the ina-distances of all the events in the history (they are already all positive)", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { inaDistance: 0.4 } as AnalyzedEvent,
            { inaDistance: 0.5 } as AnalyzedEvent,
            { inaDistance: 0.6 } as AnalyzedEvent,
        ]

        const result = computeHistoryInaDistance(analyzedEvents)

        expect(result).toBe(1.5 as Proportion)
    })
})
