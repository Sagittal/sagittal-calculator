import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Direction,
    Exponent,
    Id,
    Monzo,
    Name,
    Prime,
    Quotient,
    Row,
    Sopfr,
} from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, SymbolClass, Two3FreeClassAnalysis } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import { jiPitchScriptGroupSettings } from "../../../../../../src/scripts/jiPitch/globals"
import { computeFindCommasRow } from "../../../../../../src/scripts/jiPitch/io/row"
import { FindCommasField } from "../../../../../../src/scripts/jiPitch/types"

describe("computeFindCommasRow", (): void => {
    // This comma is made up and internally inconsistent.
    // Only the name is important as it is used to find the symbol.
    const commaAnalysis: CommaAnalysis = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo<{ rational: true }>,
        quotient: [5, 4] as Quotient<{ rational: true }>,
        name: "1/5C" as Name<Comma>,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
        two3FreeClassAnalysis: {
            two3FreePrimeLimit: 14 as Prime,
            two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
            two3FreeSopfr: 13 as Sopfr<{ rough: 5 }>,
            monzo: [0, 0, 1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
            n2d3p9: 18.4567 as N2D3P9,
        } as Two3FreeClassAnalysis,
    } as CommaAnalysis
    const symbolClassId = 44 as Id<SymbolClass>

    it("takes the properties of the comma and puts them in order in a row", (): void => {
        const actual = computeFindCommasRow(commaAnalysis, symbolClassId)

        const expected = [
            "    /|  ",         // Symbol class
            "1/5C",             // Comma name
            "5/4",              // Quotient
            "[   0  -1   1 ⟩",  // Monzo
            "        11.200¢",  // Cents
            "  8.200",          // Apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
            " 14    ",          // Prime limit
            "5/1₍₂,₃₎",         // 2,3-free class name
            "  1    ",          // 2,3-free CoPFR
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // N2D3P9
        ] as Row<{ of: CommaAnalysis }>
        expect(actual).toEqual(expected)
    })

    it("can filter excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields = [FindCommasField.AAS, FindCommasField.ATE]
        const actual = computeFindCommasRow(commaAnalysis, symbolClassId)

        const expected = [
            "    /|  ",         // Symbol class
            "1/5C",             // Comma name
            "5/4",              // Quotient
            "[   0  -1   1 ⟩",  // Monzo
            "        11.200¢",  // Cents
            "  8.200",          // Apotome slope
            " 14    ",          // Prime limit
            "5/1₍₂,₃₎",         // 2,3-free class name
            "  1    ",          // 2,3-free CoPFR
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // N2D3P9
        ] as Row<{ of: CommaAnalysis }>
        expect(actual).toEqual(expected)
    })
})
