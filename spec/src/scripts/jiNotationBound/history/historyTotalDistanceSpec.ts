import { Abs, Sum } from "../../../../../src/general"
import { Cents } from "../../../../../src/general/music"
import { BoundEventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeBoundHistoryTotalDistance } from "../../../../../src/scripts/jiNotationBound/history/historyTotalDistance"
import { boundEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundHistoryTotalDistance", (): void => {
    it(
        "sums up the distances of all the bound events in the bound history (they are already all positive)",
        (): void => {
            const boundEventAnalyses: BoundEventAnalysis[] = [
                { ...boundEventAnalysisFixture, distance: 4 as Abs<Cents> },
                { ...boundEventAnalysisFixture, distance: 5 as Abs<Cents> },
                { ...boundEventAnalysisFixture, distance: 6 as Abs<Cents> },
            ]

            const actual = computeBoundHistoryTotalDistance(boundEventAnalyses)

            const expected = 15 as Sum<Abs<Cents>>
            expect(actual).toBe(expected)
        },
    )
})
