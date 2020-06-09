const {updateRankAnalysis, rankCounts, rankBoundIndices} = require("../../../../src/boundsAnalysis/analyze/ranks")

describe("updateRankAnalysis", () => {
    const bestRank = 2
    const boundIndex = 88

    let previousRankAnalysis
    let previousRankBounds

    beforeAll(() => {
        previousRankAnalysis = rankCounts[bestRank]
        previousRankBounds = rankBoundIndices[bestRank].slice()

        updateRankAnalysis(bestRank, boundIndex)
    })

    it("updates the count of bounds with this rank as their best rank", () => {
        expect(rankCounts[bestRank]).toBe(previousRankAnalysis + 1)
    })

    it("updates the rank to include this bound in the list of bounds with it as their best rank", () => {
        expect(rankBoundIndices[bestRank]).toEqual(previousRankBounds.concat([boundIndex]))
    })
})
