import { Multiplier, Sum } from "../../../../../src/general"
import { Ina } from "../../../../../src/sagittal/notations/ji"
import { AnalyzedEvent } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeHistoryTotalInaDistance } from "../../../../../src/scripts/bound/analyzedHistory/historyTotalInaDistance"
import { analyzedEventFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeHistoryTotalInaDistance", () => {
    it("sums up the ina-distances of all the events in the history (they are already all positive)", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, inaDistance: 0.4 as Multiplier<Ina> },
            { ...analyzedEventFixture, inaDistance: 0.5 as Multiplier<Ina> },
            { ...analyzedEventFixture, inaDistance: 0.6 as Multiplier<Ina> },
        ]

        const actual = computeHistoryTotalInaDistance(analyzedEvents)

        const expected = 1.5 as Sum<Multiplier<Ina>>
        expect(actual).toBe(expected)
    })
})
