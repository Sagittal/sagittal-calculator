import { Abs, Sum } from "../../../../../src/general"
import { Cents } from "../../../../../src/general/music"
import { BoundClassEventAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { computeBoundClassHistoryTotalDistance } from "../../../../../src/scripts/jiNotationBoundClass/history/historyTotalDistance"
import { boundClassEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundClassHistoryTotalDistance", (): void => {
    it("sums up the distances of all the bound class events in the bound class history (they are already all positive)              ", (): void => {
        const boundClassEventAnalyses: BoundClassEventAnalysis[] = [
            { ...boundClassEventAnalysisFixture, distance: 4 as Abs<Cents> },
            { ...boundClassEventAnalysisFixture, distance: 5 as Abs<Cents> },
            { ...boundClassEventAnalysisFixture, distance: 6 as Abs<Cents> },
        ]

        const actual = computeBoundClassHistoryTotalDistance(boundClassEventAnalyses)

        const expected = 15 as Sum<Abs<Cents>>
        expect(actual).toBe(expected)
    })
})
