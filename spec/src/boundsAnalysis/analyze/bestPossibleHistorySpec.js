const {computeBestPossibleHistory} = require("../../../../src/boundsAnalysis/analyze/bestPossibleHistory")

describe("computeBestPossibleHistory", () => {
    it("returns the history with the best score (the not possible ones are all already filtered out)", () => {
        const histories = [
            {
                score: 3436643,
                position: 12.909,
            },
            {
                score: 245444,
                position: 13.235,
            },
            {
                score: 2422436,
                position: 13.47489,
            },
        ]

        const result = computeBestPossibleHistory(histories)

        expect(result).toEqual(
            {
                score: 245444,
                position: 13.235,
            },
        )
    })

    it("throws an error if two histories have the same score", () => {
        const histories = [
            {
                score: 3436643,
                position: 12.909,
            },
            {
                score: 2422436,
                position: 13.235,
            },
            {
                score: 2422436,
                position: 13.47489,
            },
        ]

        expect(() => computeBestPossibleHistory(histories)).toThrow()
    })
})
