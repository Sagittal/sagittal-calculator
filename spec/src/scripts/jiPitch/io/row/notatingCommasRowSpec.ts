import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Direction,
    Exponent,
    Id, Max,
    Monzo,
    Name,
    Prime,
    Quotient,
    Row,
    Sopfr,
    Two3FreeClass,
} from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, SymbolClass, Two3FreeClassAnalysis } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import { jiPitchScriptGroupSettings } from "../../../../../../src/scripts/jiPitch/globals"
import { computeNotatingCommasRow } from "../../../../../../src/scripts/jiPitch/io/row"
import { NotatingCommasField } from "../../../../../../src/scripts/jiPitch/types"
import { commaAnalysisFixture, two3FreeClassAnalysisFixture } from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeNotatingCommasRow", (): void => {
    // This comma is made up and internally inconsistent.
    // Only the name is important as it is used to find the symbol.
    const commaAnalysis: CommaAnalysis = {
        ...commaAnalysisFixture,
        name: "1/5C" as Name<Comma>,
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo<{ rational: true }>,
        quotient: [5, 4] as Quotient<{ rational: true }>,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
        two3FreeClassAnalysis: {
            ...two3FreeClassAnalysisFixture,
            two3FreePrimeLimit: 14 as Max<Prime<{ rough: 5 }>>,
            two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
            two3FreeSopfr: 13 as Sopfr<{ rough: 5 }>,
            n2d3p9: 18.4567 as N2D3P9,
            two3FreeClass: {
                monzo: [0, 0, 1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
            } as Two3FreeClass,
        },
    }
    const symbolClassId = 44 as Id<SymbolClass>

    it("takes the properties of the comma and puts them in order in a row", (): void => {
        const actual = computeNotatingCommasRow(commaAnalysis, symbolClassId)

        const expected = [
            "    /|  ",         // Symbol class
            "1/5C",             // Comma name
            "5/4",              // Quotient
            "[   0  -1   1 ⟩",  // Monzo
            "        11.200¢",  // Cents
            "  8.200",          // Apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{ of: CommaAnalysis }>
        expect(actual).toEqual(expected)
    })

    it("can filter the excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields = [NotatingCommasField.CENTS, NotatingCommasField.MONZO]

        const actual = computeNotatingCommasRow(commaAnalysis, symbolClassId)

        const expected = [
            "    /|  ",         // Symbol class
            "1/5C",             // Comma name
            "5/4",              // Quotient
            "  8.200",          // Apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{ of: CommaAnalysis }>
        expect(actual).toEqual(expected)
    })
})
