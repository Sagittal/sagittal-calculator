import { Formatted, Io, ioSettings, Rank, TwoThreeFreeClass } from "../../../../src/general"
import { Popularity, Votes } from "../../../../src/general/music"
import { N2D3P9 } from "../../../../src/sagittal/comma/evaluation/n2d3p9"
import { analyzePopular23FreeClass } from "../../../../src/scripts/popular23FreeClass/popular23FreeClass"
import { Popular23FreeClassAnalysis } from "../../../../src/scripts/popular23FreeClass/types"

describe("analyzePopular23FreeClass", (): void => {
    const twoThreeFreeClass = { monzo: [0, 0, 1] } as TwoThreeFreeClass
    const n2d3p9 = 1.388889 as N2D3P9

    it("assembles helpful information about a 2,3-free class, given a valid 2,3-free monzo & its N2D3P9", (): void => {
        const actual = analyzePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })

        const expected: Popular23FreeClassAnalysis = {
            n2d3p9,
            formattedN2D3P9: "  1.389" as Formatted<N2D3P9>,
            formatted23FreeClass: "5/1" as Formatted<TwoThreeFreeClass>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            formattedExactlyNotatingSymbolClasses: "    '|       /|  " as Io,
            symbolSubsets: "3, 0" as Io,
        }
        expect(actual).toEqual(expected)
    })

    it("formats the symbols for the forum if io settings are set that way", (): void => {
        ioSettings.forForum = true
        const actual = analyzePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })

        const expected: Popular23FreeClassAnalysis = {
            n2d3p9,
            formattedN2D3P9: "  1.389" as Formatted<N2D3P9>,
            formatted23FreeClass: "5/1" as Formatted<TwoThreeFreeClass>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            formattedExactlyNotatingSymbolClasses: ":'::|: :/|:" as Io,
            symbolSubsets: "3, 0" as Io,
        }
        expect(actual).toEqual(expected)
    })
})
