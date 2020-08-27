import { Max, Ranked } from "../../../../src/general"
import { N2D3P9 } from "../../../../src/general/music/n2d3p9"
import { computePopularRatios } from "../../../../src/scripts/popularRatios/popularRatios"
import { PopularRatio } from "../../../../src/scripts/popularRatios/types"

describe("computePopularRatios", () => {
    it("returns a ranked (and sorted) list of the most popular ratios with N2D3P9 less than the requested amount", () => {
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePopularRatios(maxN2D3P9)

        const expected = [
            {
                n2d3p9: 1,
                formattedN2D3P9: "1",
                formattedRatio: "1/1",
                popularityRank: 1,
                votes: 7624,
                smileys: ":|:",
                symbolSets: "0",
                rank: 1,
            },
            {
                n2d3p9: 1.388889,
                formattedN2D3P9: "1.39",
                formattedRatio: "5/1",
                popularityRank: 2,
                votes: 5371,
                smileys: ":'::|: :/|:",
                symbolSets: "3, 0",
                rank: 2,
            },
            {
                n2d3p9: 2.722222,
                formattedN2D3P9: "2.72",
                formattedRatio: "7/1",
                popularityRank: 3,
                votes: 3016,
                smileys: ":|): :'::/|): :.::(|\\:",
                symbolSets: "0, 3, 3",
                rank: 3,
            },
            {
                n2d3p9: 3.472222,
                formattedN2D3P9: "3.47",
                formattedRatio: "25/1",
                popularityRank: 4,
                votes: 1610,
                smileys: ":.::/|: :/ /|:",
                symbolSets: "3, 0",
                rank: 4,
            },
            {
                n2d3p9: 4.537037,
                formattedN2D3P9: "4.54",
                formattedRatio: "7/5",
                popularityRank: 5,
                votes: 1318,
                smileys: ":|(: :'::|):",
                symbolSets: "0, 3",
                rank: 5,
            },
        ] as Array<Ranked<PopularRatio>>
        expect(actual).toEqual(expected)
    })
})
