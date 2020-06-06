const {calculateBestPossibleHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateBestPossibleHistories")

describe("calculateBestPossibleHistories", () => {
    it("returns the histories with the best rank (the not possible ones are all already filtered out)", () => {
        const histories = [
            {
                rank: 3,
                position: 12.909,
            },
            {
                rank: 2,
                position: 13.235,
            },
            {
                rank: 2,
                position: 13.47489,
            },
        ]

        const result = calculateBestPossibleHistories(histories)

        expect(result).toEqual([
            {
                rank: 2,
                position: 13.235,
            },
            {
                rank: 2,
                position: 13.47489,
            },
        ])
    })
})
