import { Formatted, IO, Rank, Ratio } from "../../../../src/general"
import { Monzo } from "../../../../src/general/math"
import { Popularity, Votes } from "../../../../src/general/music"
import { N2D3P9 } from "../../../../src/general/music/n2d3p9"
import { computePopularRatio } from "../../../../src/scripts/popularRatios/popularRatio"
import { PopularRatio } from "../../../../src/scripts/popularRatios/types"

describe("computePopularRatio", () => {
    it("gathers helpful information about a ratio with a valid monzo & N2D3P9", () => {
        const monzo = [0, 0, 1] as Monzo
        const n2d3p9 = 1.388889 as N2D3P9

        const actual = computePopularRatio({ monzo, n2d3p9 })

        const expected: PopularRatio = {
            n2d3p9,
            formattedN2D3P9: "1.39" as Formatted<N2D3P9>,
            formattedRatio: "5/1" as Formatted<Ratio>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            smileys: ":'::|: :/|:" as IO,
            symbolSets: "3, 0" as IO,
        }
        expect(actual).toEqual(expected)
    })
})
