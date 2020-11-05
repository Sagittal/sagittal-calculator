import {Cents, Direction, Index, Monzo, Rank, Two3FreeClass} from "../../../../src/general"
import {Popularity, Votes} from "../../../../src/general/music"
import {Two3FreeClassAnalysis} from "../../../../src/sagittal/ji/analyze"
import {N2D3P9} from "../../../../src/sagittal/ji/metrics/unpopularity/n2d3p9"
import {CommaClassId, SymbolClassId, SymbolSubsetId} from "../../../../src/sagittal/notation"
import {popular23FreeClassesScriptGroupSettings} from "../../../../src/scripts/popular23FreeClass/globals"
import {computePopular23FreeClass} from "../../../../src/scripts/popular23FreeClass/popular23FreeClass"
import {Popular23FreeClass} from "../../../../src/scripts/popular23FreeClass/types"
import {two3FreeClassAnalysisFixture} from "../../../helpers/src/scripts/jiPitch/fixtures"

describe("computePopular23FreeClass", (): void => {
    const two3FreeClassAnalysis: Two3FreeClassAnalysis = {
        ...two3FreeClassAnalysisFixture,
        n2d3p9: 1.388889 as N2D3P9,
        two3FreeClass: {
            monzo: [0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
        } as Two3FreeClass,
    }

    it("assembles helpful information about a 2,3-free class, given a valid 2,3-free monzo & its N2D3P9", (): void => {
        const actual = computePopular23FreeClass(two3FreeClassAnalysis)

        const expected: Popular23FreeClass = {
            ...two3FreeClassAnalysis,
            popularityRank: 2 as Rank<Popularity>,
            votes: 5371 as Votes,
            notatingSymbolClassIds: [SymbolClassId.TICK, SymbolClassId.LEFT_BARB],
            notatingSymbolClassSmallestSymbolSubsetIndices: [5, 1] as Array<Index<SymbolSubsetId>>,
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
            bestNotatingCommaMonzo: [-4, 4, -1] as Monzo<{rational: true}>,
            bestNotatingCommaMaybeCommaClassId: CommaClassId._1_5_C,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
