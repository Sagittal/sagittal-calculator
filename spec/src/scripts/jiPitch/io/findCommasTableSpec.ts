import {
    Cents,
    Comma,
    Id,
    Io,
    ioSettings,
    Monzo,
    Name,
    NEWLINE,
    Prime,
    Ratio,
    Sopfr,
    TwoThreeFreeClass,
} from "../../../../../src/general"
import { AnalyzedComma, ApotomeSlope, JiSymbol } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeFindCommasTable } from "../../../../../src/scripts/jiPitch/io"

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
            "[tr][th][pre]symbol  [/pre][/th][th][pre]name[/pre][/th][th][pre]ratio[/pre][/th][th][pre]monzo[/pre][/th][th][pre]cents[/pre][/th][th][pre]apotome slope[/pre][/th][th][pre]limit[/pre][/th][th][pre]2,3-free sopfr[/pre][/th][th][pre]2,3-free class N2D3P9[/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre]:/|\\:[/pre][/td][td][pre]11M[/pre][/td][td][pre]33/32[/pre][/td][td][pre][   0   0   1 ⟩[/pre][/td][td][pre] 45.450[/pre][/td][td][pre] -4.000[/pre][/td][td][pre] 11    [/pre][/td][td][pre] 11    [/pre][/td][td][pre]  6.722[/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre][/pre][/td][td][pre]25/49M[/pre][/td][td][pre]50/49[/pre][/td][td][pre][   1   0   2  -2 ⟩[/pre][/td][td][pre] 33.400[/pre][/td][td][pre] -2.154[/pre][/td][td][pre]  7    [/pre][/td][td][pre] 24    [/pre][/td][td][pre] 26.466[/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
