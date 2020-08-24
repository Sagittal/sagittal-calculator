import { Cents } from "../../../../src/general/music"
import { computeHistoryDistance } from "../../../../src/scripts/analyzeBounds/historyDistance"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeHistoryDistance", () => {
    it("sums up the distances of all the events in the history (they are already all positive)", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, distance: 4 as Cents },
            { ...analyzedEventFixture, distance: 5 as Cents },
            { ...analyzedEventFixture, distance: 6 as Cents },
        ]

        const actual = computeHistoryDistance(analyzedEvents)

        const expected = 15 as Cents
        expect(actual).toBe(expected)
    })
})
