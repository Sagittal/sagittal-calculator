import { Integer, Rank } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeScore } from "../../../../../src/scripts/jiNotationBound/history/score"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeScore", (): void => {
    it("scores histories with worse ranks worse", (): void => {
        const expectedWorseScoreHistories: EventAnalysis[] = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: 2 as Integer & Rank<EventAnalysis>,
            },
        ]
        const expectedBetterScoreHistories: EventAnalysis[] = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: 1 as Integer & Rank<EventAnalysis>,
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
                rank: 2 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
        ]
        const expectedBetterScoreHistories = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: 2 as Integer & Rank<EventAnalysis>,
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
                rank: 0 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: 0 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.ULTRA,
                rank: 0 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.EXTREME,
                rank: 0 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.INSANE,
                rank: 2 as Integer & Rank<EventAnalysis>,
            },
        ]
        const expectedBetterScoreHistories = [
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.MEDIUM,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.HIGH,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.ULTRA,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.EXTREME,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                jiNotationLevel: JiNotationLevel.INSANE,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
