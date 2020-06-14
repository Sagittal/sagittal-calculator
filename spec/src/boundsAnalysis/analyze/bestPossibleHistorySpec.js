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

        expect(result).toEqual({
            score: 245444,
            position: 13.235,
        })
    })

    it("returns the best exact history even if its score is not the best", () => {
        const histories = [
            {
                score: 3436643,
                position: 12.909,
                exact: true,
            },
            {
                score: 45575474,
                position: 12.909,
                exact: true,
            },
            {
                score: 245444,
                position: 13.235,
            },
        ]

        const result = computeBestPossibleHistory(histories)

        expect(result).toEqual({
            score: 3436643,
            position: 12.909,
            exact: true,
        })
    })

    it("tie-breaks by distance", () => {
        const histories = [
            {
                score: 3436643,
                distance: 0.2,
                position: 12.909,
                exact: true,
            },
            {
                score: 3436643,
                distance: 0.1,
                position: 12.909,
                exact: true,
            },
        ]

        const result = computeBestPossibleHistory(histories)

        expect(result).toEqual({
            score: 3436643,
            distance: 0.1,
            position: 12.909,
            exact: true,
        },)
    })
})
