import { Integer, Rank } from "../../../../../src/general"
import { Cents } from "../../../../../src/general/music"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeRank } from "../../../../../src/scripts/jiNotationBound/history/rank"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeRank", (): void => {
    it("returns the worst rank of any of the events in the history", (): void => {
        const eventAnalyses: EventAnalysis[] = [
            {
                ...eventAnalysisFixture,
                type: EventType.INA,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.SIZE,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
                rank: 3 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                cents: 10.1 as Cents,
                rank: 2 as Integer & Rank<EventAnalysis>,
            },
        ]

        const actual = computeRank(eventAnalyses)

        const expected = 3 as Integer & Rank<EventAnalysis>
        expect(actual).toBe(expected)
    })
})
