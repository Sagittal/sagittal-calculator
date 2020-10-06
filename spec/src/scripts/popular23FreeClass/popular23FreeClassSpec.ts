import { Cents, Direction, Id, Index, Monzo, Rank } from "../../../../src/general"
import { Popularity, Votes } from "../../../../src/general/music"
import { Two3FreeClassAnalysis } from "../../../../src/sagittal/ji/two3FreeClass"
import { N2D3P9 } from "../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import { SymbolClass, SymbolSubset } from "../../../../src/sagittal/notations"
import { popular23FreeClassesScriptGroupSettings } from "../../../../src/scripts/popular23FreeClass/globals"
import { computePopular23FreeClass } from "../../../../src/scripts/popular23FreeClass/popular23FreeClass"
import { Popular23FreeClass } from "../../../../src/scripts/popular23FreeClass/types"
import { two3FreeClassAnalysisFixture } from "../../../helpers/src/scripts/jiPitch/fixtures"

describe("computePopular23FreeClass", (): void => {
    const two3FreeClassAnalysis: Two3FreeClassAnalysis = {
        ...two3FreeClassAnalysisFixture,
        n2d3p9: 1.388889 as N2D3P9,
        monzo: [0, 0, 1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
    }

    it("assembles helpful information about a 2,3-free class, given a valid 2,3-free monzo & its N2D3P9", (): void => {
        const actual = computePopular23FreeClass(two3FreeClassAnalysis)

        const expected: Popular23FreeClass = {
            ...two3FreeClassAnalysis,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            exactlyNotatingSymbolClassIds: [4, 44] as Array<Id<SymbolClass>>,
            exactlyNotatingSymbolClassSmallestSymbolSubsetIndices: [5, 1] as Array<Index<SymbolSubset>>,
        }
        expect(actual).toEqual(expected)
    })

    it("also works when associating the popular 2,3-free class with its best notating comma", (): void => {
        popular23FreeClassesScriptGroupSettings.useBestNotatingCommas = true
        const actual = computePopular23FreeClass(two3FreeClassAnalysis)

        const expected: Popular23FreeClass = {
            ...two3FreeClassAnalysis,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            bestNotatingCommaCents: 21.506290 as Cents,
            bestNotatingCommaMonzo: [-4, 4, -1] as Monzo<{ rational: true }>,
            bestNotatingCommaMaybeSymbolClassId: 44 as Id<SymbolClass>,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
