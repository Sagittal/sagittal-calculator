import { Multiplier, Sum } from "../../../../../src/general"
import { Ina } from "../../../../../src/sagittal/notations/ji"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeHistoryTotalInaDistance } from "../../../../../src/scripts/jiNotationBound/history/historyTotalInaDistance"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeHistoryTotalInaDistance", (): void => {
    it("sums up the ina-distances of all the events in the history (they are already all positive)", (): void => {
        const eventAnalyses: EventAnalysis[] = [
            { ...eventAnalysisFixture, inaDistance: 0.4 as Multiplier<Ina> },
            { ...eventAnalysisFixture, inaDistance: 0.5 as Multiplier<Ina> },
            { ...eventAnalysisFixture, inaDistance: 0.6 as Multiplier<Ina> },
        ]

        const actual = computeHistoryTotalInaDistance(eventAnalyses)

        const expected = 1.5 as Sum<Multiplier<Ina>>
        expect(actual).toBe(expected)
    })
})
