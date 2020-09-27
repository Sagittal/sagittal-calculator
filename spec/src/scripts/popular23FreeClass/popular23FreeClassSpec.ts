import { Cents, Id, Index, Rank, RationalMonzo, TwoThreeFreeClass } from "../../../../src/general"
import { Popularity, Votes } from "../../../../src/general/music"
import { N2D3P9 } from "../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { SymbolClass, SymbolSubset } from "../../../../src/sagittal/notations"
import { popular23FreeClassesScriptGroupSettings } from "../../../../src/scripts/popular23FreeClass/globals"
import { computePopular23FreeClass } from "../../../../src/scripts/popular23FreeClass/popular23FreeClass"
import { Popular23FreeClass } from "../../../../src/scripts/popular23FreeClass/types"

describe("computePopular23FreeClass", (): void => {
    const twoThreeFreeClass = { monzo: [0, 0, 1] } as TwoThreeFreeClass
    const n2d3p9 = 1.388889 as N2D3P9

    it("assembles helpful information about a 2,3-free class, given a valid 2,3-free monzo & its N2D3P9", (): void => {
        const actual = computePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })

        const expected: Popular23FreeClass = {
            ...twoThreeFreeClass,
            n2d3p9,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            exactlyNotatingSymbolClassIds: [4, 44] as Array<Id<SymbolClass>>,
            exactlyNotatingSymbolClassSmallestSymbolSubsetIndices: [5, 1] as Array<Index<SymbolSubset>>,
        }
        expect(actual).toEqual(expected)
    })

    it("also works when associating the popular 2,3-free class with its best notating comma", (): void => {
        popular23FreeClassesScriptGroupSettings.useBestNotatingCommas = true
        const actual = computePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })

        const expected: Popular23FreeClass = {
            ...twoThreeFreeClass,
            n2d3p9,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            bestNotatingCommaCents: 21.506290 as Cents,
            bestNotatingCommaMonzo: [-4, 4, -1] as RationalMonzo,
            bestNotatingCommaMaybeSymbolClassId: 44 as Id<SymbolClass>,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
