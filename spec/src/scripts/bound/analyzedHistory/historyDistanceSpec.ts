import { Cents } from "../../../../../src/general/music"
import { AnalyzedEvent } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeHistoryDistance } from "../../../../../src/scripts/bound/analyzedHistory/historyDistance"
import { analyzedEventFixture } from "../../../../helpers/src/scripts/bound/fixtures"

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
