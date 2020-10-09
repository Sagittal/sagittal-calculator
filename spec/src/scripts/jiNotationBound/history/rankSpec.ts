import { BoundType } from "../../../../../src/sagittal/notations/ji"
import { BoundEventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeRank } from "../../../../../src/scripts/jiNotationBound/history/rank"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { boundEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeRank", (): void => {
    it("returns the worst rank of any of the bound events in the bound history", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                rank: RANKS[ BoundType.INA_MIDPOINT ],          // 1 = best
            },
            {
                ...boundEventAnalysisFixture,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],   // 3 = worst
            },
            {
                ...boundEventAnalysisFixture,
                rank: RANKS[ BoundType.COMMA_MEAN ],            // 2 = in the middle
            },
        ]

        const actual = computeRank(boundEventAnalyses)

        const expected = RANKS[ BoundType.SIZE_CATEGORY_BOUND ] // 3 = worst
        expect(actual).toBe(expected)
    })
})
