import { Count } from "../../../../../src/general"
import { BOUNDS } from "../../../../../src/notations/ji"
import { analyzeBound } from "../../../../../src/scripts/analyzeBounds/bound"
import { computeHistories } from "../../../../../src/scripts/analyzeBounds/plot"
import { presentRankAnalyses } from "../../../../../src/scripts/analyzeBounds/present"
import { rankBoundIndices, rankCounts } from "../../../../../src/scripts/analyzeBounds/ranks"
import { EventRank } from "../../../../../src/scripts/analyzeBounds/types"

describe("presentRankAnalyses", () => {
    it("gives the correct answer", () => {
        // reset and then compute and analyze all the bounds as you would when running the main script in summary mode
        rankCounts.forEach((_, index) => rankCounts[ index ] = 0 as Count<EventRank>)
        rankBoundIndices.forEach((_, index) => rankBoundIndices[ index ] = [])
        BOUNDS.map(bound => {
            const histories = computeHistories(bound)
            analyzeBound(histories, bound)
        })

        const result = presentRankAnalyses()

        const expectedResult =
            "\n\n\n   ---   Rank Analyses   ---   " +
            "\n\n\n" +
            "INA midpoint snap event was worst-ranked snap event:\n\ttotal: 122 bounds\n\tbounds: 0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 48, 50, 51, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 79, 83, 84, 85, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 105, 107, 108, 109, 111, 112, 113, 114, 115, 116, 117, 118, 120, 122, 123, 124, 125, 126, 128, 129, 130, 131, 132, 133, 134, 135, 137, 138, 139, 141, 142, 143, 144, 145, 146, 147, 148"[ "blue" ] +
            "\n\n" +
            "comma mean snap event was worst-ranked snap event:\n\ttotal: 25 bounds\n\tbounds: 3, 13, 16, 18, 24, 31, 35, 40, 47, 49, 52, 65, 66, 74, 80, 81, 82, 86, 106, 110, 119, 121, 127, 136, 140"[ "cyan" ] +
            "\n\n" +
            "size category bound snap event was worst-ranked snap event:\n\ttotal: 2 bounds\n\tbounds: 97, 149"[ "green" ]

        expect(result).toEqual(expectedResult)
    })
})
