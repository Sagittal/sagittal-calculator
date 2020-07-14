import { Cents } from "../../../../src/general/music"
import { computeHistoryDistance } from "../../../../src/scripts/analyzeBounds/historyDistance"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeHistoryDistance", () => {
    it("sums up the distances of all the events in the history (they are already all positive)", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, distance: 4 as Cents },
            { ...analyzedEventFixture, distance: 5 as Cents },
            { ...analyzedEventFixture, distance: 6 as Cents },
        ]

        const result = computeHistoryDistance(analyzedEvents)

        expect(result).toBe(15 as Cents)
    })
})
