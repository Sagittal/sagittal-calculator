import {
    Decimal,
    Direction,
    Grade,
    Index,
    ioSettings,
    Monzo,
    Name,
    Rank,
    Ranked,
    Row,
    ScalaPopularityStat,
    TableFormat,
    Two3FreeClass,
} from "@sagittal/general"
import {N2D3P9, SymbolClassId, SymbolSubsetId} from "../../../../../../src/sagittal"
import {
    computePopular23FreeClassWithNotatingSymbolClassesRow,
    NotatingSymbolClassesProperties,
} from "../../../../../../src/scripts/popular23FreeClass/notatingSymbolClasses"
import {Popular23FreeClass} from "../../../../../../src/scripts/popular23FreeClass/types"
import {two3FreeClassAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computePopular23FreeClassWithNotatingSymbolClassesRow", (): void => {
    const rankedPopular23FreeClassWithNotatingSymbolClasses:
        Ranked<Popular23FreeClass & NotatingSymbolClassesProperties> = {
        ...two3FreeClassAnalysisFixture,
        name: "{7/5}₂,₃" as Name<Two3FreeClass>,
        rank: 4 as Rank<Popular23FreeClass & NotatingSymbolClassesProperties>,
        notatingSymbolClassSmallestSymbolSubsetIndices: [1, 3] as Array<Index<SymbolSubsetId>>,
        notatingSymbolClassIds: [SymbolClassId.DOUBLE_SCROLL, SymbolClassId.ANTITICK_AND_LEFT_BARB],
        n2d3p9: 2 as N2D3P9,
        votes: 7 as Decimal<{integer: true}> & Grade<ScalaPopularityStat>,
        popularityRank: 3 as Rank<ScalaPopularityStat>,
        two3FreeClass: {
            monzo: [0, 0, -1, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
        } as Two3FreeClass,
    }

    it("works", (): void => {
        const actual = computePopular23FreeClassWithNotatingSymbolClassesRow(
            rankedPopular23FreeClassWithNotatingSymbolClasses,
        )

        const expected = [
            "{7/5}₂,₃",             // 2,3-free class name
            "  2.000",              // N2D3P9
            "    )|(     ./|  ",    // Notating symbol classes
            "1, 3",                 // Notating symbol classes smallest symbol subset indices
            "4",                    // Estimated rank
            "3",                    // Actual rank
            "7",                    // Votes
        ] as Row<{of: Popular23FreeClass & NotatingSymbolClassesProperties, header: true}>
        expect(actual).toEqual(expected)
    })

    it("when formatting for the forum, prevents multi-line cells for symbols by not having each one have its own pre-tag disabling", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = computePopular23FreeClassWithNotatingSymbolClassesRow(
            rankedPopular23FreeClassWithNotatingSymbolClasses
            ,
        )

        const expected = [
            "[latex]\\{\\frac{7}{5}\\}_{\\scriptsize{2,3}}[/latex]", // 2,3-free class name
            "  2.000",                                                          // N2D3P9
            ":)|(: :.::/|:",                                         // Notating symbol classes
            "1, 3",                                                             // Notating symbol classes smallest symbol subset indices
            "4",                                                                // Estimated rank
            "3",                                                                // Actual rank
            "7",                                                                // Votes
        ] as Row<{of: Popular23FreeClass & NotatingSymbolClassesProperties, header: true}>
        expect(actual).toEqual(expected)
    })
})
