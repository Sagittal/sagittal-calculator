import { Proportion, Sum } from "../../../../src/general"
import { computeHistoryInaDistance } from "../../../../src/scripts/analyzeBounds/historyInaDistance"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/src/scripts/analyzeBounds/fixtures"

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
