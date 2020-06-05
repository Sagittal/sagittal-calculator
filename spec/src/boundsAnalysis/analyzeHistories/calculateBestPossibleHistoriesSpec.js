const {calculateBestPossibleHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateBestPossibleHistories")

describe("calculateBestPossibleHistories", () => {
    it("returns the possible histories with the best rank", () => {
        const histories = [
            {
                rank: 3,
                possible: true,
                position: 12.909,
            },
            {
                rank: 2,
                possible: true,
                position: 13.235,
            },
            {
                rank: 2,
                possible: true,
                position: 13.47489,
            },
            {
                rank: 2,
                possible: false,
                position: 13.3252,
            },
            {
                rank: 1,
                possible: false,
                position: 13.436,
            },
        ]

        const result = calculateBestPossibleHistories(histories)

        expect(result).toEqual([
            {
                rank: 2,
                possible: true,
                position: 13.235,
            },
            {
                rank: 2,
                possible: true,
                position: 13.47489,
            },
        ])
    })
})
