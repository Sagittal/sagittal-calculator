const {updateRankSummary, rankSummary, rankBounds} = require("../../../../src/boundsAnalysis/analyzeHistories/rankSummary")

describe("updateRankSummary", () => {
    const bestRank = 2
    const datumIndex = 88

    let previousRankSummary
    let previousRankBounds

    beforeAll(() => {
        previousRankSummary = rankSummary[bestRank]
        previousRankBounds = rankBounds[bestRank].slice()

        updateRankSummary(bestRank, datumIndex)
    })

    it("updates the count of bounds with this rank as their best rank", () => {
        expect(rankSummary[bestRank]).toBe(previousRankSummary + 1)
    })

    it("updates the rank to include this bound in the list of bounds with it as their best rank", () => {
        expect(rankBounds[bestRank]).toEqual(previousRankBounds.concat([datumIndex]))
    })
})
