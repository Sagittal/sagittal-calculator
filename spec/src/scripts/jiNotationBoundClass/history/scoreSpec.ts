import { BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundClassEventAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { computeScore } from "../../../../../src/scripts/jiNotationBoundClass/history/score"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import { boundClassEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeScore", (): void => {
    it("scores histories with worse ranks worse", (): void => {
        const expectedWorseScoreHistories: BoundClassEventAnalysis[] = [
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
        ]
        const expectedBetterScoreHistories: BoundClassEventAnalysis[] = [
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("if two histories have the same total ranks but one incurs a worse rank at an earlier JI notation level, it gets a lesser score", (): void => {
        const expectedWorseScoreHistories = [
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
        ]
        const expectedBetterScoreHistories = [
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a bound class history with the lowest event rank must get the lesser score, even in the most case leaning as much as possible in favor of otherwise", (): void => {
        const expectedWorseScoreHistories = [
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.ULTRA,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.EXTREME,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.INSANE,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
        ]
        const expectedBetterScoreHistories = [
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.ULTRA,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.EXTREME,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundClassEventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.INSANE,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
