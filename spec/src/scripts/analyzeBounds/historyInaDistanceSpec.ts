import { Proportion, Sum } from "../../../../src/general"
import { computeHistoryInaDistance } from "../../../../src/scripts/analyzeBounds/historyInaDistance"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeHistoryInaDistance", () => {
    it("sums up the ina-distances of all the events in the history (they are already all positive)", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, inaDistance: 0.4 as Proportion },
            { ...analyzedEventFixture, inaDistance: 0.5 as Proportion },
            { ...analyzedEventFixture, inaDistance: 0.6 as Proportion },
        ]

        const result = computeHistoryInaDistance(analyzedEvents)

        expect(result).toBe(1.5 as Sum<Proportion>)
    })
})
