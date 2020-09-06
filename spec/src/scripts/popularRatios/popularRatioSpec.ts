import { Formatted, Io, ioSettings, Rank, Ratio } from "../../../../src/general"
import { Monzo } from "../../../../src/general/math"
import { Popularity, Votes } from "../../../../src/general/music"
import { N2D3P9 } from "../../../../src/sagittal/commaEvaluation/n2d3p9"
import { computePopularRatio } from "../../../../src/scripts/popularRatios/popularRatio"
import { PopularRatio } from "../../../../src/scripts/popularRatios/types"

describe("computePopularRatio", () => {
    it("gathers helpful information about a ratio with a valid monzo & N2D3P9", () => {
        const monzo = [0, 0, 1] as Monzo
        const n2d3p9 = 1.388889 as N2D3P9

        const actual = computePopularRatio({ monzo, n2d3p9 })

        const expected: PopularRatio = {
            n2d3p9,
            formattedN2D3P9: "  1.389" as Formatted<N2D3P9>,
            formattedRatio: "5/1" as Formatted<Ratio>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            formattedExactlyNotatingJiSymbols: "    '|       /|  " as Io,
            symbolSubsets: "3, 0" as Io,
        }
        expect(actual).toEqual(expected)
    })

    it("formats the symbols for the forum if io settings are set that way", () => {
        const monzo = [0, 0, 1] as Monzo
        const n2d3p9 = 1.388889 as N2D3P9

        ioSettings.forForum = true
        const actual = computePopularRatio({ monzo, n2d3p9 })

        const expected: PopularRatio = {
            n2d3p9,
            formattedN2D3P9: "  1.389" as Formatted<N2D3P9>,
            formattedRatio: "5/1" as Formatted<Ratio>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            formattedExactlyNotatingJiSymbols: ":'::|: :/|:" as Io,
            symbolSubsets: "3, 0" as Io,
        }
        expect(actual).toEqual(expected)
    })
})
