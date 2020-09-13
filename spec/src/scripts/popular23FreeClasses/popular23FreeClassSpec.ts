import { Formatted, Io, ioSettings, Rank, TwoThreeFreeClass } from "../../../../src/general"
import { Popularity, Votes } from "../../../../src/general/music"
import { N2D3P9 } from "../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computePopular23FreeClass } from "../../../../src/scripts/popular23FreeClasses/popular23FreeClass"
import { Popular23FreeClass } from "../../../../src/scripts/popular23FreeClasses/types"

describe("computePopular23FreeClass", (): void => {
    const twoThreeFreeClass = { monzo: [0, 0, 1] } as TwoThreeFreeClass
    const n2d3p9 = 1.388889 as N2D3P9

    it("assembles helpful information about a 2,3-free class, given a valid 2,3-free monzo & its N2D3P9", (): void => {
        const actual = computePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })

        const expected: Popular23FreeClass = {
            n2d3p9,
            formattedN2D3P9: "  1.389" as Formatted<N2D3P9>,
            formatted23FreeClass: "5/1" as Formatted<TwoThreeFreeClass>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            formattedExactlyNotatingJiSymbols: "    '|       /|  " as Io,
            symbolSubsets: "3, 0" as Io,
        }
        expect(actual).toEqual(expected)
    })

    it("formats the symbols for the forum if io settings are set that way", (): void => {
        ioSettings.forForum = true
        const actual = computePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })

        const expected: Popular23FreeClass = {
            n2d3p9,
            formattedN2D3P9: "  1.389" as Formatted<N2D3P9>,
            formatted23FreeClass: "5/1" as Formatted<TwoThreeFreeClass>,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            formattedExactlyNotatingJiSymbols: ":'::|: :/|:" as Io,
            symbolSubsets: "3, 0" as Io,
        }
        expect(actual).toEqual(expected)
    })
})
