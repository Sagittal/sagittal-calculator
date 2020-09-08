import { Formatted, Io, ioSettings, Rank } from "../../../../src/general"
import { Popularity, Votes } from "../../../../src/general/music"
import { TwoThreeFreeClass } from "../../../../src/sagittal/comma"
import { N2D3P9 } from "../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computePopularTwoThreeFreeClass } from "../../../../src/scripts/popularTwoThreeFreeClasses/popularTwoThreeFreeClass"
import { Popular23FreeClass } from "../../../../src/scripts/popularTwoThreeFreeClasses/types"

describe("computePopularTwoThreeFreeClass", () => {
    it("assembles helpful information about a 2,3-free class, given a valid 2,3-free monzo & its N2D3P9", () => {
        const twoThreeFreeClass = [5, 1] as TwoThreeFreeClass
        const n2d3p9 = 1.388889 as N2D3P9

        const actual = computePopularTwoThreeFreeClass({ twoThreeFreeClass, n2d3p9 })

        const expected: Popular23FreeClass = {
            n2d3p9,
            formattedN2D3P9: "  1.389" as Formatted<N2D3P9>,
            formattedTwoThreeFreeClass: "5/1" as Formatted<TwoThreeFreeClass>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            formattedExactlyNotatingJiSymbols: "    '|       /|  " as Io,
            symbolSubsets: "3, 0" as Io,
        }
        expect(actual).toEqual(expected)
    })

    it("formats the symbols for the forum if io settings are set that way", () => {
        const twoThreeFreeClass = [5, 1] as TwoThreeFreeClass
        const n2d3p9 = 1.388889 as N2D3P9

        ioSettings.forForum = true
        const actual = computePopularTwoThreeFreeClass({ twoThreeFreeClass, n2d3p9 })

        const expected: Popular23FreeClass = {
            n2d3p9,
            formattedN2D3P9: "  1.389" as Formatted<N2D3P9>,
            formattedTwoThreeFreeClass: "5/1" as Formatted<TwoThreeFreeClass>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            formattedExactlyNotatingJiSymbols: ":'::|: :/|:" as Io,
            symbolSubsets: "3, 0" as Io,
        }
        expect(actual).toEqual(expected)
    })
})
