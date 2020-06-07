const {calculateBestPossibleHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateBestPossibleHistories")

describe("calculateBestPossibleHistories", () => {
    it("returns the histories with the best score (the not possible ones are all already filtered out)", () => {
        const histories = [
            {
                score: 3,
                position: 12.909,
            },
            {
                score: 2,
                position: 13.235,
            },
            {
                score: 2,
                position: 13.47489,
            },
        ]

        const result = calculateBestPossibleHistories(histories)

        expect(result).toEqual([
            {
                score: 2,
                position: 13.235,
            },
            {
                score: 2,
                position: 13.47489,
            },
        ])
    })
})
