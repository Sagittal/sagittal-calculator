import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Direction,
    Exponent,
    Id,
    Integer,
    Monzo,
    Name,
    Prime,
    Ratio,
    Row,
    Sopfr,
} from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, SymbolClass, TwoThreeFreeClassAnalysis } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { jiPitchScriptGroupSettings } from "../../../../../../src/scripts/jiPitch/globals"
import { computeNotatingCommasRow } from "../../../../../../src/scripts/jiPitch/io/row"
import { NotatingCommasField } from "../../../../../../src/scripts/jiPitch/types"

describe("computeNotatingCommasRow", (): void => {
    // This comma is made up and internally inconsistent.
    // Only the name is important as it is used to find the symbol.
    const commaAnalysis: CommaAnalysis = {
        name: "1/5C" as Name<Comma>,
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Abs<Integer & Exponent<3 & Prime>>,
        twoThreeFreeClassAnalysis: {
            twoThreeFreePrimeLimit: 14 as Prime,
            twoThreeFreeCopfr: 1 as Copfr<{ rough: 5 }>,
            twoThreeFreeSopfr: 13 as Sopfr<{ rough: 5 }>,
            monzo: [0, 0, 1] as Monzo<{ rough: 5, direction: Direction.SUPER }>,
            n2d3p9: 18.4567 as N2D3P9,
        } as TwoThreeFreeClassAnalysis,
    } as CommaAnalysis
    const symbolClassId = 44 as Id<SymbolClass>

    it("takes the properties of the comma and puts them in order in a row", (): void => {
        const actual = computeNotatingCommasRow(commaAnalysis, symbolClassId)

        const expected = [
            "    /|  ",         // symbol class
            "1/5C",             // comma name
            "5/4",              // ratio
            "[   0  -1   1 ⟩",  // monzo
            "        11.200¢",  // cents
            "  8.200",          // apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{ of: CommaAnalysis }>
        expect(actual).toEqual(expected)
    })

    it("can filter the excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields = [NotatingCommasField.CENTS, NotatingCommasField.MONZO]

        const actual = computeNotatingCommasRow(commaAnalysis, symbolClassId)

        const expected = [
            "    /|  ",         // symbol class
            "1/5C",             // comma name
            "5/4",              // ratio
            "  8.200",          // apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{ of: CommaAnalysis }>
        expect(actual).toEqual(expected)
    })
})
