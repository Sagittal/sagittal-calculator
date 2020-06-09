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

        const result = presentRankAnalyses()

        const expectedResult =
            "\n\n   ---   Rank Analyses   ---   \n\n\n" +
            "For 107 bounds (0, 1, 2, 4, 6, 7, 8, 10, 11, 12, 14, 15, 17, 19, 20, 21, 23, 26, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 42, 43, 44, 45, 48, 50, 53, 54, 56, 57, 58, 59, 60, 61, 62, 64, 67, 68, 69, 70, 71, 73, 75, 76, 77, 79, 83, 84, 85, 87, 88, 89, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 103, 104, 105, 107, 108, 109, 111, 112, 113, 114, 115, 116, 117, 118, 120, 122, 123, 124, 126, 128, 129, 130, 131, 132, 133, 134, 135, 137, 138, 139, 141, 142, 143, 145, 146, 147, 148), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint or a comma mean which is close to the position it was already at, where close is defined as within a half-step of that EDA.".brightBlue + "\n\n" +
            "For 22 bounds (3, 5, 9, 16, 18, 24, 25, 40, 47, 55, 63, 66, 72, 80, 81, 86, 102, 106, 121, 125, 140, 144), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA.".cyan + "\n\n" +
            "For 2 bounds (97, 149), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint which was further than a half-step of that EDA away.".green + "\n\n" +
            "For 4 bounds (27, 31, 35, 51), the best possible explanation for how they were set was by working up through each level they appear in, each time staying between the bounded commas of the bound, each time snapping only either to an EDA midpoint, a comma mean, or a size category bound which is close to the position it was already at, where close is defined as within a half-step of that EDA, or an EDA midpoint or comma mean which was further than a half-step of that EDA away.".yellow + "\n\n" +
            "For 15 bounds (13, 22, 41, 46, 49, 52, 65, 74, 78, 82, 90, 110, 119, 127, 136), the best possible explanation for how they were set was unfortunately that there was no way to explain how the bound was set at all.".red
        expect(result).toEqual(expectedResult)
    })
})
