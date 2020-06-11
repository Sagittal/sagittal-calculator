const {presentRankAnalyses} = require("../../../../src/boundsAnalysis/present/rankAnalyses")
const {rankCounts, rankBoundIndices} = require("../../../../src/boundsAnalysis/analyze/ranks")
const {BOUNDS} = require("../../../../src/boundsAnalysis/data/bounds")
const {computeHistories} = require("../../../../src/boundsAnalysis/plot/histories")
const {analyzeBound} = require("../../../../src/boundsAnalysis/analyze/bound")

describe("presentRankAnalyses", () => {
    it("gives the correct answer", () => {
        // reset and then compute and analyze all the bounds as you would when running the main script in summary mode
        rankCounts.forEach((_, index) => rankCounts[index] = 0)
        rankBoundIndices.forEach((_, index) => rankBoundIndices[index] = [])
        BOUNDS.map((bound, boundIndex) => {
            const histories = computeHistories(bound)
            analyzeBound(histories, bound, boundIndex)
        })

        const result = presentRankAnalyses() // TODO: hey maybe if the svg's background was also dark grey the colors would work out alright?

        const expectedResult =
            "\n\n   ---   Rank Analyses   ---   " +
            "\n\n\n" +
            "EDA midpoint snap event was worst-ranked snap event:\n\ttotal: 112 bounds\n\tbounds: 0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19, 20, 21, 23, 25, 26, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 42, 43, 44, 45, 48, 50, 51, 53, 54, 56, 57, 58, 59, 60, 61, 62, 64, 67, 68, 69, 70, 71, 73, 75, 76, 77, 79, 83, 84, 85, 87, 88, 89, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 103, 104, 105, 107, 108, 109, 111, 112, 113, 114, 115, 116, 117, 118, 120, 122, 123, 124, 125, 126, 128, 129, 130, 131, 132, 133, 134, 135, 137, 138, 139, 141, 142, 143, 145, 146, 147, 148".brightBlue +
            "\n\n" +
            "comma mean snap event was worst-ranked snap event:\n\ttotal: 21 bounds\n\tbounds: 3, 16, 18, 24, 27, 31, 35, 40, 47, 55, 63, 66, 72, 80, 81, 86, 102, 106, 121, 140, 144".cyan +
            "\n\n" +
            "size category bound snap event was worst-ranked snap event:\n\ttotal: 2 bounds\n\tbounds: 97, 149".green +
            "\n\n" +
            "override snap event was worst-ranked snap event:\n\ttotal: 15 bounds\n\tbounds: 13, 22, 41, 46, 49, 52, 65, 74, 78, 82, 90, 110, 119, 127, 136".red

        expect(result).toEqual(expectedResult)
    })
})
