import { Id, Index, Monzo, Name, Ranked, Two3FreeClass } from "../../../../../../src/general"
import { Rank } from "../../../../../../src/general/code"
import { Row } from "../../../../../../src/general/io/table"
import { Direction } from "../../../../../../src/general/math/numeric"
import { Popularity, Votes } from "../../../../../../src/general/music/ji"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import { SymbolClass, SymbolSubset } from "../../../../../../src/sagittal/notations"
import {
    computePopular23FreeClassWithExactlyNotatingSymbolClassRow,
    ExactlyNotatingSymbolClassProperties,
} from "../../../../../../src/scripts/popular23FreeClass/exactlyNotatingSymbolClass"
import { Popular23FreeClass } from "../../../../../../src/scripts/popular23FreeClass/types"
import { two3FreeClassAnalysisFixture } from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computePopular23FreeClassWithExactlyNotatingSymbolClassRow", (): void => {
    it("works", (): void => {
        const rankedPopular23FreeClassWithExactlyNotatingSymbolClass:
            Ranked<Popular23FreeClass & ExactlyNotatingSymbolClassProperties> = {
            ...two3FreeClassAnalysisFixture,
            name: "7/5₍₂,₃₎" as Name<Two3FreeClass>,
            rank: 4 as Rank<Popular23FreeClass & ExactlyNotatingSymbolClassProperties>,
            exactlyNotatingSymbolClassSmallestSymbolSubsetIndices: [1, 3] as Array<Index<SymbolSubset>>,
            exactlyNotatingSymbolClassIds: [20, 40] as Array<Id<SymbolClass>>,
            n2d3p9: 2 as N2D3P9,
            votes: 7 as Votes,
            popularityRank: 3 as Rank<Popularity>,
            monzo: [0, 0, -1, 1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
        }

        const actual = computePopular23FreeClassWithExactlyNotatingSymbolClassRow(
            rankedPopular23FreeClassWithExactlyNotatingSymbolClass,
        )

        const expected = [
            "7/5₍₂,₃₎",             // 2,3-free class name
            "  2.000",              // N2D3P9
            "    )|(     ./|  ",    // Exactly notating symbol classes
            "1, 3",                 // Exactly notating symbol class smallest symbol subset indices
            "4",                    // Estimated rank
            "3",                    // Actual rank
            "7",                    // Votes
        ] as Row<{ of: Popular23FreeClass & ExactlyNotatingSymbolClassProperties, header: true }>
        expect(actual).toEqual(expected)
    })
})
