const {calculateScore, calculateScoreIndex} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateScore")

describe("calculateScoreIndex", () => {
    it("gives the correct index for the power of two based score", () => {
        expect(calculateScoreIndex(1, 4)).toBe(0)
        expect(calculateScoreIndex(1, 3)).toBe(1)
        expect(calculateScoreIndex(1, 2)).toBe(2)
        expect(calculateScoreIndex(1, 1)).toBe(3)
        expect(calculateScoreIndex(1, 0)).toBe(4)

        expect(calculateScoreIndex(2, 4)).toBe(5)
        expect(calculateScoreIndex(2, 3)).toBe(6)
        expect(calculateScoreIndex(2, 2)).toBe(7)
        expect(calculateScoreIndex(2, 1)).toBe(8)
        expect(calculateScoreIndex(2, 0)).toBe(9)

        expect(calculateScoreIndex(3, 4)).toBe(10)
        expect(calculateScoreIndex(3, 3)).toBe(11)
        expect(calculateScoreIndex(3, 2)).toBe(12)
        expect(calculateScoreIndex(3, 1)).toBe(13)
        expect(calculateScoreIndex(3, 0)).toBe(14)
    })
})

describe("calculateScore", () => {
    it("scores histories with worse ranks worse", () => {
        const expectedWorseScoreHistories = [
            {level: "MEDIUM", rank: 3},
        ]
        const expectedBetterScoreHistories = [
            {level: "MEDIUM", rank: 2},
        ]

        const expectedWorseResult = calculateScore(expectedWorseScoreHistories)
        const expectedBetterResult = calculateScore(expectedBetterScoreHistories)

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

        const expectedWorseResult = calculateScore(expectedWorseScoreHistories)
        const expectedBetterResult = calculateScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a history with the lowest event rank must get the lower score, even in the most case leaning as much as possible in favor of otherwise", () => {
        const expectedWorseScoreHistories = [
            {level: "MEDIUM", rank: 1},
            {level: "HIGH", rank: 1},
            {level: "VERY_HIGH", rank: 1},
            {level: "EXTREME", rank: 1},
            {level: "INSANE", rank: 8},
        ]
        const expectedBetterScoreHistories = [
            {level: "MEDIUM", rank: 7},
            {level: "HIGH", rank: 7},
            {level: "VERY_HIGH", rank: 7},
            {level: "EXTREME", rank: 7},
            {level: "INSANE", rank: 7},
        ]

        const expectedWorseResult = calculateScore(expectedWorseScoreHistories)
        const expectedBetterResult = calculateScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
