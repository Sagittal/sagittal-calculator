import { Max, Ranked } from "../../../../src/general"
import { N2D3P9 } from "../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computePopularTwoThreeFreeClasses } from "../../../../src/scripts/popularTwoThreeFreeClasses/popularTwoThreeFreeClasses"
import { Popular23FreeClass } from "../../../../src/scripts/popularTwoThreeFreeClasses/types"

describe("computePopularTwoThreeFreeClasses", () => {
    it(
        `returns a ranked (and sorted) list of the most popular 2,3-free classes with N2D3P9 less than the requested max`,
        () => {
            const maxN2D3P9 = 5 as Max<N2D3P9>

            const actual = computePopularTwoThreeFreeClasses(maxN2D3P9)

            const expected = [
                {
                    n2d3p9: 1,
                    formattedN2D3P9: "  1.000",
                    formattedTwoThreeFreeClass: "1/1",
                    popularityRank: 1,
                    votes: 7624,
                    formattedExactlyNotatingJiSymbols: "     |  ",
                    symbolSubsets: "0",
                    rank: 1,
                },
                {
                    n2d3p9: 1.388889,
                    formattedN2D3P9: "  1.389",
                    formattedTwoThreeFreeClass: "5/1",
                    popularityRank: 2,
                    votes: 5371,
                    formattedExactlyNotatingJiSymbols: "    '|       /|  ",
                    symbolSubsets: "3, 0",
                    rank: 2,
                },
                {
                    n2d3p9: 2.722222,
                    formattedN2D3P9: "  2.722",
                    formattedTwoThreeFreeClass: "7/1",
                    popularityRank: 3,
                    votes: 3016,
                    formattedExactlyNotatingJiSymbols: "     |)     '/|)     .(|\\ ",
                    symbolSubsets: "0, 3, 3",
                    rank: 3,
                },
                {
                    n2d3p9: 3.472222,
                    formattedN2D3P9: "  3.472",
                    formattedTwoThreeFreeClass: "25/1",
                    popularityRank: 4,
                    votes: 1610,
                    formattedExactlyNotatingJiSymbols: "   ./|      //|  ",
                    symbolSubsets: "3, 0",
                    rank: 4,
                },
                {
                    n2d3p9: 4.537037,
                    formattedN2D3P9: "  4.537",
                    formattedTwoThreeFreeClass: "7/5",
                    popularityRank: 5,
                    votes: 1318,
                    formattedExactlyNotatingJiSymbols: "     |(      '|) ",
                    symbolSubsets: "0, 3",
                    rank: 5,
                },
            ] as Array<Ranked<Popular23FreeClass>>
            expect(actual).toEqual(expected)
        },
    )
})
