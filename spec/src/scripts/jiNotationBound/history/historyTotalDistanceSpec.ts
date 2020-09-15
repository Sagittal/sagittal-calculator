import { Sum } from "../../../../../src/general"
import { Cents } from "../../../../../src/general/music"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeHistoryTotalDistance } from "../../../../../src/scripts/jiNotationBound/history/historyTotalDistance"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeHistoryTotalDistance", (): void => {
    it("sums up the distances of all the events in the history (they are already all positive)", (): void => {
        const eventAnalyses: EventAnalysis[] = [
            { ...eventAnalysisFixture, distance: 4 as Sum<Cents> },
            { ...eventAnalysisFixture, distance: 5 as Sum<Cents> },
            { ...eventAnalysisFixture, distance: 6 as Sum<Cents> },
        ]

        const actual = computeHistoryTotalDistance(eventAnalyses)

        const expected = 15 as Sum<Cents>
        expect(actual).toBe(expected)
    })
})
