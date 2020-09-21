import { Cents } from "../../../../../src/general/music"
import { BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundEventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeRank } from "../../../../../src/scripts/jiNotationBound/history/rank"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { boundEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeRank", (): void => {
    it("returns the worst rank of any of the bound events in the bound history", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                cents: 10.1 as Cents,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
        ]

        const actual = computeRank(boundEventAnalyses)

        const expected = RANKS[ BoundType.SIZE_CATEGORY_BOUND ]
        expect(actual).toBe(expected)
    })
})
