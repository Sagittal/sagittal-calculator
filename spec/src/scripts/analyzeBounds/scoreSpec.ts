import { Level } from "../../../../src/notations/ji"
import { computeScore } from "../../../../src/scripts/analyzeBounds/score"
import { AnalyzedEvent, EventRank } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeScore", () => {
    it("scores histories with worse ranks worse", () => {
        const expectedWorseScoreHistories: AnalyzedEvent[] = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 2 as EventRank },
        ]
        const expectedBetterScoreHistories: AnalyzedEvent[] = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 1 as EventRank },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("if two histories have the same total ranks but one incurs a worse rank at a lower level, it gets a lower score", () => {
        const expectedWorseScoreHistories = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 2 as EventRank },
            { ...analyzedEventFixture, level: Level.HIGH, rank: 1 as EventRank },
        ]
        const expectedBetterScoreHistories = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 1 as EventRank },
            { ...analyzedEventFixture, level: Level.HIGH, rank: 2 as EventRank },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a history with the lowest event rank must get the lower score, even in the most case leaning as much as possible in favor of otherwise", () => {
        const expectedWorseScoreHistories = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 0 as EventRank },
            { ...analyzedEventFixture, level: Level.HIGH, rank: 0 as EventRank },
            { ...analyzedEventFixture, level: Level.ULTRA, rank: 0 as EventRank },
            { ...analyzedEventFixture, level: Level.EXTREME, rank: 0 as EventRank },
            { ...analyzedEventFixture, level: Level.INSANE, rank: 2 as EventRank },
        ]
        const expectedBetterScoreHistories = [
            { ...analyzedEventFixture, level: Level.MEDIUM, rank: 1 as EventRank },
            { ...analyzedEventFixture, level: Level.HIGH, rank: 1 as EventRank },
            { ...analyzedEventFixture, level: Level.ULTRA, rank: 1 as EventRank },
            { ...analyzedEventFixture, level: Level.EXTREME, rank: 1 as EventRank },
            { ...analyzedEventFixture, level: Level.INSANE, rank: 1 as EventRank },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
