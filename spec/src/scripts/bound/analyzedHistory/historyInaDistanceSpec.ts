import { Proportion, Sum } from "../../../../../src/general"
import { AnalyzedEvent } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeHistoryInaDistance } from "../../../../../src/scripts/bound/analyzedHistory/historyInaDistance"
import { analyzedEventFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeHistoryInaDistance", () => {
    it("sums up the ina-distances of all the events in the history (they are already all positive)", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, inaDistance: 0.4 as Proportion },
            { ...analyzedEventFixture, inaDistance: 0.5 as Proportion },
            { ...analyzedEventFixture, inaDistance: 0.6 as Proportion },
        ]

        const actual = computeHistoryInaDistance(analyzedEvents)

        const expected = 1.5 as Sum<Proportion>
        expect(actual).toBe(expected)
    })
})