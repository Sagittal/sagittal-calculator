import { Cents, Io, ioSettings, Monzo, Name, NEWLINE, Prime, Ratio, Sopfr } from "../../../../../src/general"
import { AnalyzedRationalPitch, ApotomeSlope, SymbolLongAscii } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/commaEvaluation/n2d3p9"
import { computeFindCommasTable } from "../../../../../src/scripts/pitch/io"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "../../../../../src/scripts/pitch/types"

describe("computeFindCommasTable", () => {
    // note: I'm pretty sure that this is not realistic comma data, since these commas are unrelated
    const commas: AnalyzedRationalPitchWithMaybeSagittalSymbol[] = [
        {
            symbol: "/|\\" as SymbolLongAscii,
            name: "11M" as Name<AnalyzedRationalPitch>,
            limit: 11 as Prime,
            fiveRoughSopfr: 11 as Sopfr<5>,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo,
            ratio: [33, 32] as Ratio,
            apotomeSlope: -4 as ApotomeSlope,
            n2d3p9: 6.722 as N2D3P9,
        },
        {
            symbol: undefined,
            name: "25/49M" as Name<AnalyzedRationalPitch>,
            limit: 7 as Prime,
            fiveRoughSopfr: 24 as Sopfr<5>,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo,
            ratio: [50, 49] as Ratio,
            apotomeSlope: -2.154 as ApotomeSlope,
            n2d3p9: 26.466 as N2D3P9,
        },
    ]

    it("changes column widths so that each cell in a column has the same width", () => {
        const actual = computeFindCommasTable(commas)

        const expected =
            // tslint:disable:max-line-length
            "symbol  \tname  \tratio\tmonzo              \tcents \tapotome slope\tlimit\t5-rough sopfr\tN2D3P9".underline + NEWLINE +
            "    /|\\ \t11M   \t33/32\t[   0   0   1 ⟩    \t45.450\t-4.000       \t11   \t11           \t6.72  " + NEWLINE +
            "        \t25/49M\t50/49\t[   1   0   2  -2 ⟩\t33.400\t-2.154       \t7    \t24           \t26.47 " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum", () => {
        // TODO: it might be preferable to have a test helper which resets ioSettings
        //  like the other globals for like LFC
        ioSettings.forForum = true
        const actual = computeFindCommasTable(commas)
        ioSettings.forForum = false

        const expected =
            "[table]" + NEWLINE +
            "[tr][th]symbol[/th][th]name[/th][th]ratio[/th][th]monzo[/th][th]cents[/th][th]apotome slope[/th][th]limit[/th][th]5-rough sopfr[/th][th]N2D3P9[/th][/tr]" + NEWLINE +
            "[tr][td]    /|\\ [/td][td]11M[/td][td]33/32[/td][td][   0   0   1 ⟩[/td][td]45.450[/td][td]-4.000[/td][td]11[/td][td]11[/td][td]6.72[/td][/tr]" + NEWLINE +
            "[tr][td][/td][td]25/49M[/td][td]50/49[/td][td][   1   0   2  -2 ⟩[/td][td]33.400[/td][td]-2.154[/td][td]7[/td][td]24[/td][td]26.47[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
