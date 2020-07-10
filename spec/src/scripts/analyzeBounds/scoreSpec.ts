import {computeScore} from "../../../../src/scripts/analyzeBounds/score"

describe("computeScore", () => {
    it("scores histories with worse ranks worse", () => {
        const expectedWorseScoreHistories = [
            {level: "MEDIUM", rank: 2},
        ]
        const expectedBetterScoreHistories = [
            {level: "MEDIUM", rank: 1},
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("if two histories have the same total ranks but one incurs a worse rank at a lower level, it gets a lower score", () => {
        const expectedWorseScoreHistories = [
            {level: "MEDIUM", rank: 2},
            {level: "HIGH", rank: 1},
        ]
        const expectedBetterScoreHistories = [
            {level: "MEDIUM", rank: 1},
            {level: "HIGH", rank: 2},
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a history with the lowest event rank must get the lower score, even in the most case leaning as much as possible in favor of otherwise", () => {
        const expectedWorseScoreHistories = [
            {level: "MEDIUM", rank: 0},
            {level: "HIGH", rank: 0},
            {level: "ULTRA", rank: 0},
            {level: "EXTREME", rank: 0},
            {level: "INSANE", rank: 2},
        ]
        const expectedBetterScoreHistories = [
            {level: "MEDIUM", rank: 1},
            {level: "HIGH", rank: 1},
            {level: "ULTRA", rank: 1},
            {level: "EXTREME", rank: 1},
            {level: "INSANE", rank: 1},
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
