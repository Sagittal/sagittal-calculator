import { Sum } from "../../../../../src/general"
import { Cents } from "../../../../../src/general/music"
import { AnalyzedEvent } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeHistoryTotalDistance } from "../../../../../src/scripts/bound/analyzedHistory/historyTotalDistance"
import { analyzedEventFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeHistoryTotalDistance", () => {
    it("sums up the distances of all the events in the history (they are already all positive)", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, distance: 4 as Sum<Cents> },
            { ...analyzedEventFixture, distance: 5 as Sum<Cents> },
            { ...analyzedEventFixture, distance: 6 as Sum<Cents> },
        ]

        const actual = computeHistoryTotalDistance(analyzedEvents)

        const expected = 15 as Sum<Cents>
        expect(actual).toBe(expected)
    })
})
