import { Integer, Rank } from "../../../../../src/general"
import { Cents } from "../../../../../src/general/music"
import { Level } from "../../../../../src/sagittal/notations/ji"
import { EventAnalysis } from "../../../../../src/scripts/bound/analyzeHistory"
import { computeRank } from "../../../../../src/scripts/bound/analyzeHistory/rank"
import { EventType } from "../../../../../src/scripts/bound/histories"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeRank", (): void => {
    it("returns the worst rank of any of the events in the history", (): void => {
        const eventAnalyses: EventAnalysis[] = [
            {
                ...eventAnalysisFixture,
                type: EventType.INA,
                level: Level.HIGH,
                cents: 10.0 as Cents,
                rank: 1 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.SIZE,
                level: Level.ULTRA,
                cents: 10.2 as Cents,
                rank: 3 as Integer & Rank<EventAnalysis>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.MEAN,
                level: Level.EXTREME,
                cents: 10.1 as Cents,
                rank: 2 as Integer & Rank<EventAnalysis>,
            },
        ]

        const actual = computeRank(eventAnalyses)

        const expected = 3 as Integer & Rank<EventAnalysis>
        expect(actual).toBe(expected)
    })
})
