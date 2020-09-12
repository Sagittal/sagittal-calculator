import { Integer, Rank } from "../../../../../src/general"
import { Level } from "../../../../../src/sagittal/notations/ji"
import { AnalyzedEvent } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeScore } from "../../../../../src/scripts/bound/analyzedHistory/score"
import { analyzedEventFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeScore", () => {
    it("scores histories with worse ranks worse", () => {
        const expectedWorseScoreHistories: AnalyzedEvent[] = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 2 as Integer & Rank<AnalyzedEvent> },
        ]
        const expectedBetterScoreHistories: AnalyzedEvent[] = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 1 as Integer & Rank<AnalyzedEvent> },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("if two histories have the same total ranks but one incurs a worse rank at an earlier level, it gets a lesser score", () => {
        const expectedWorseScoreHistories = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 2 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.HIGH, rank: 1 as Integer & Rank<AnalyzedEvent> },
        ]
        const expectedBetterScoreHistories = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 1 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.HIGH, rank: 2 as Integer & Rank<AnalyzedEvent> },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a history with the lowest event rank must get the lesser score, even in the most case leaning as much as possible in favor of otherwise", () => {
        const expectedWorseScoreHistories = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 0 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.HIGH, rank: 0 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.ULTRA, rank: 0 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.EXTREME, rank: 0 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.INSANE, rank: 2 as Integer & Rank<AnalyzedEvent> },
        ]
        const expectedBetterScoreHistories = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 1 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.HIGH, rank: 1 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.ULTRA, rank: 1 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.EXTREME, rank: 1 as Integer & Rank<AnalyzedEvent> },
            { ...analyzedEventFixture, level: Level.INSANE, rank: 1 as Integer & Rank<AnalyzedEvent> },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
