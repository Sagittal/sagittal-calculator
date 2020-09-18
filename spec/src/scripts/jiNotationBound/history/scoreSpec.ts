import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeScore } from "../../../../../src/scripts/jiNotationBound/history/score"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeScore", (): void => {
    it("scores histories with worse ranks worse", (): void => {
        const expectedWorseScoreHistories: EventAnalysis[] = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            },
        ]
        const expectedBetterScoreHistories: EventAnalysis[] = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("if two histories have the same total ranks but one incurs a worse rank at an earlier JI notation level, it gets a lesser score", (): void => {
        const expectedWorseScoreHistories = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
        ]
        const expectedBetterScoreHistories = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a history with the lowest event rank must get the lesser score, even in the most case leaning as much as possible in favor of otherwise", (): void => {
        const expectedWorseScoreHistories = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ EventType.INA_MIDPOINT ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: RANKS[ EventType.INA_MIDPOINT ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.ULTRA,
                rank: RANKS[ EventType.INA_MIDPOINT ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.EXTREME,
                rank: RANKS[ EventType.INA_MIDPOINT ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.INSANE,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            },
        ]
        const expectedBetterScoreHistories = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.ULTRA,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.EXTREME,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.INSANE,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
