import { Cents, Id, Monzo, Name, Prime, Ratio, Row, Sopfr } from "../../../../../src/general"
import { AnalyzedRationalPitch, ApotomeSlope, JiSymbol } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeCommaRow } from "../../../../../src/scripts/pitch/io/commaRow"

describe("computeCommaRow", () => {
    // Note: this comma is made up and internally inconsistent.
    // Only the name is important as it is used to find the symbol.
    const comma: AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> } = {
        symbolId: 44 as Id<JiSymbol>,
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        name: "1/5C" as Name<AnalyzedRationalPitch>,
        limit: 14 as Prime,
        apotomeSlope: 8.2 as ApotomeSlope,
        fiveRoughSopfr: 13 as Sopfr<5>,
        n2d3p9: 18.4567 as N2D3P9,
    }

    it("takes the properties of the comma and puts them in order in a row", () => {
        const actual = computeCommaRow(comma)

        const expected = [
            "    /|  ",
            "1/5C",
            "5/4",
            "[   0  -1   1 ⟩",
            " 11.200",
            "  8.200",
            " 14    ",
            " 13    ",
            " 18.457",
        ] as Row<AnalyzedRationalPitch>
        expect(actual).toEqual(expected)
    })
})
