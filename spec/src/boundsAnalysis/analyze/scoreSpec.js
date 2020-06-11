const {computeScore, computeBinaryScoreRepresentationIndex} = require("../../../../src/boundsAnalysis/analyze/score")

describe("computeBinaryScoreRepresentationIndex", () => {
    it("gives the correct index for the power of two based score", () => {
        expect(computeBinaryScoreRepresentationIndex(1, 4)).toBe(0)
        expect(computeBinaryScoreRepresentationIndex(1, 3)).toBe(1)
        expect(computeBinaryScoreRepresentationIndex(1, 2)).toBe(2)
        expect(computeBinaryScoreRepresentationIndex(1, 1)).toBe(3)
        expect(computeBinaryScoreRepresentationIndex(1, 0)).toBe(4)

        expect(computeBinaryScoreRepresentationIndex(2, 4)).toBe(5)
        expect(computeBinaryScoreRepresentationIndex(2, 3)).toBe(6)
        expect(computeBinaryScoreRepresentationIndex(2, 2)).toBe(7)
        expect(computeBinaryScoreRepresentationIndex(2, 1)).toBe(8)
        expect(computeBinaryScoreRepresentationIndex(2, 0)).toBe(9)

        expect(computeBinaryScoreRepresentationIndex(3, 4)).toBe(10)
        expect(computeBinaryScoreRepresentationIndex(3, 3)).toBe(11)
        expect(computeBinaryScoreRepresentationIndex(3, 2)).toBe(12)
        expect(computeBinaryScoreRepresentationIndex(3, 1)).toBe(13)
        expect(computeBinaryScoreRepresentationIndex(3, 0)).toBe(14)
    })
})

describe("computeScore", () => {
    it("scores histories with worse ranks worse", () => {
        const expectedWorseScoreHistories = [
            {level: "MEDIUM", rank: 3},
        ]
        const expectedBetterScoreHistories = [
            {level: "MEDIUM", rank: 2},
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("if two histories have the same total ranks but one incurs a worse rank at a lower level, it gets a lower score", () => {
        const expectedWorseScoreHistories = [
            {level: "MEDIUM", rank: 3},
            {level: "HIGH", rank: 2},
        ]
        const expectedBetterScoreHistories = [
            {level: "MEDIUM", rank: 2},
            {level: "HIGH", rank: 3},
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a history with the lowest event rank must get the lower score, even in the most case leaning as much as possible in favor of otherwise", () => {
        const expectedWorseScoreHistories = [
            {level: "MEDIUM", rank: 1},
            {level: "HIGH", rank: 1},
            {level: "VERY_HIGH", rank: 1},
            {level: "EXTREME", rank: 1},
            {level: "INSANE", rank: 6},
        ]
        const expectedBetterScoreHistories = [
            {level: "MEDIUM", rank: 5},
            {level: "HIGH", rank: 5},
            {level: "VERY_HIGH", rank: 5},
            {level: "EXTREME", rank: 5},
            {level: "INSANE", rank: 5},
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
