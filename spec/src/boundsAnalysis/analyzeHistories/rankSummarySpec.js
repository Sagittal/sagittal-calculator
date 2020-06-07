const {updateRankSummary, rankCounts, rankBoundIndices} = require("../../../../src/boundsAnalysis/analyzeHistories/rankSummary")

describe("updateRankSummary", () => {
    const bestRank = 2
    const boundIndex = 88

    let previousRankSummary
    let previousRankBounds

    beforeAll(() => {
        previousRankSummary = rankCounts[bestRank]
        previousRankBounds = rankBoundIndices[bestRank].slice()

        updateRankSummary(bestRank, boundIndex)
    })

    it("updates the count of bounds with this rank as their best rank", () => {
        expect(rankCounts[bestRank]).toBe(previousRankSummary + 1)
    })

    it("updates the rank to include this bound in the list of bounds with it as their best rank", () => {
        expect(rankBoundIndices[bestRank]).toEqual(previousRankBounds.concat([boundIndex]))
    })
})
