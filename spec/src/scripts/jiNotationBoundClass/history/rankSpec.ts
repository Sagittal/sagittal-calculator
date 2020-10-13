import { BoundType } from "../../../../../src/sagittal/notations/ji"
import { BoundClassEventAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { computeRank } from "../../../../../src/scripts/jiNotationBoundClass/history/rank"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import { boundClassEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeRank", (): void => {
    it("returns the worst rank of any of the bound class events in the bound class history", (): void => {
        const boundClassEventAnalyses: BoundClassEventAnalysis[] = [
            {
                ...boundClassEventAnalysisFixture,
                rank: RANKS[ BoundType.INA_MIDPOINT ],          // 1 = best
            },
            {
                ...boundClassEventAnalysisFixture,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],   // 3 = worst
            },
            {
                ...boundClassEventAnalysisFixture,
                rank: RANKS[ BoundType.COMMA_MEAN ],            // 2 = in the middle
            },
        ]

        const actual = computeRank(boundClassEventAnalyses)

        const expected = RANKS[ BoundType.SIZE_CATEGORY_BOUND ] // 3 = worst
        expect(actual).toBe(expected)
    })
})
