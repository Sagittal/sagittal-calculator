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
                presentedN2D3P9: 1,
                presentedRatio: "1/1",
                popularityRank: 1,
                votes: 7624,
                smileys: ":|:",
                symbolSets: "0",
                rank: 1,
            },
            {
                presentedN2D3P9: 1.39,
                presentedRatio: "5/1",
                popularityRank: 2,
                votes: 5371,
                smileys: ":'::|: :/|:",
                symbolSets: "3, 0",
                rank: 2,
            },
            {
                presentedN2D3P9: 2.72,
                presentedRatio: "7/1",
                popularityRank: 3,
                votes: 3016,
                smileys: ":|): :'::/|): :.::(|\\:",
                symbolSets: "0, 3, 3",
                rank: 3,
            },
            {
                presentedN2D3P9: 3.47,
                presentedRatio: "25/1",
                popularityRank: 4,
                votes: 1610,
                smileys: ":.::/|: :/ /|:",
                symbolSets: "3, 0",
                rank: 4,
            },
            {
                presentedN2D3P9: 4.54,
                presentedRatio: "7/5",
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
