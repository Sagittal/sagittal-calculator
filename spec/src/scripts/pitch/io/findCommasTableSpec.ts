import { Cents, Id, Io, ioSettings, Monzo, Name, NEWLINE, Prime, Ratio, Sopfr } from "../../../../../src/general"
import { AnalyzedComma, ApotomeSlope, Comma, JiSymbol, TwoThreeFreeClass } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeFindCommasTable } from "../../../../../src/scripts/pitch/io"

describe("computeFindCommasTable", () => {
    // note: I'm pretty sure that this is not realistic comma data, since these commas are unrelated
    const commas: Array<AnalyzedComma & { symbolId?: Id<JiSymbol> }> = [
        {
            symbolId: 115 as Id<JiSymbol>,
            name: "11M" as Name<Comma>,
            limit: 11 as Prime,
            twoThreeFreeSopfr: 11 as Sopfr<5>,
            twoThreeFreeClass: { monzo: [0, 0, 0, 0, 1] } as TwoThreeFreeClass,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo,
            ratio: [33, 32] as Ratio,
            apotomeSlope: -4 as ApotomeSlope,
            n2d3p9: 6.722 as N2D3P9,
        } as AnalyzedComma & { symbolId?: Id<JiSymbol> },
        {
            name: "25/49M" as Name<Comma>,
            limit: 7 as Prime,
            twoThreeFreeSopfr: 24 as Sopfr<5>,
            twoThreeFreeClass: { monzo: [0, 0, -2, 2] } as TwoThreeFreeClass,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo,
            ratio: [50, 49] as Ratio,
            apotomeSlope: -2.154 as ApotomeSlope,
            n2d3p9: 26.466 as N2D3P9,
        } as AnalyzedComma & { symbolId?: Id<JiSymbol> },
    ]

    it("changes column widths so that each cell in a column has the same width", () => {
        const actual = computeFindCommasTable(commas)

        const expected =
            // tslint:disable:max-line-length
            "symbol  \tname  \tratio\tmonzo              \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9".underline + NEWLINE +
            "    /|\\ \t11M   \t33/32\t[   0   0   1 ⟩    \t 45.450\t -4.000      \t 11    \t 11           \t  6.722              " + NEWLINE +
            "        \t25/49M\t50/49\t[   1   0   2  -2 ⟩\t 33.400\t -2.154      \t  7    \t 24           \t 26.466              " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum", () => {
        ioSettings.forForum = true
        const actual = computeFindCommasTable(commas)

        const expected =
            "[table]" + NEWLINE +
            "[tr][th]symbol  [/th][th]name[/th][th]ratio[/th][th]monzo[/th][th]cents[/th][th]apotome slope[/th][th]limit[/th][th]2,3-free sopfr[/th][th]2,3-free class N2D3P9[/th][/tr]" + NEWLINE +
            "[tr][td]:/|\\:[/td][td]11M[/td][td]33/32[/td][td][   0   0   1 ⟩[/td][td] 45.450[/td][td] -4.000[/td][td] 11    [/td][td] 11    [/td][td]  6.722[/td][/tr]" + NEWLINE +
            "[tr][td][/td][td]25/49M[/td][td]50/49[/td][td][   1   0   2  -2 ⟩[/td][td] 33.400[/td][td] -2.154[/td][td]  7    [/td][td] 24    [/td][td] 26.466[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
