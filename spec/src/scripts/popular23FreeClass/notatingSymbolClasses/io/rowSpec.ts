import {Index, ioSettings, Ranked, Row, TableFormat} from "@sagittal/general"
import {SymbolClassId, SymbolSubsetId} from "@sagittal/system"
import {
    computePopular23FreeClassWithNotatingSymbolClassesRow,
    NotatingSymbolClassesProperties,
} from "../../../../../../src/scripts/popular23FreeClass/notatingSymbolClasses"
import {Popular23FreeClass} from "../../../../../../src/scripts/popular23FreeClass/types"
import {rankedPopular23FreeClassFixture} from "../../../../../helpers/src/scripts/popular23FreeClass/fixtures"

describe("computePopular23FreeClassWithNotatingSymbolClassesRow", (): void => {
    const rankedPopular23FreeClassWithNotatingSymbolClasses:
        Ranked<Popular23FreeClass & NotatingSymbolClassesProperties> = {
        ...rankedPopular23FreeClassFixture,
        notatingSymbolClassSmallestSymbolSubsetIndices: [1, 3] as Array<Index<SymbolSubsetId>>,
        notatingSymbolClassIds: [SymbolClassId.DOUBLE_SCROLL, SymbolClassId.ANTITICK_AND_LEFT_BARB],
    } as Ranked<Popular23FreeClass & NotatingSymbolClassesProperties>

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
