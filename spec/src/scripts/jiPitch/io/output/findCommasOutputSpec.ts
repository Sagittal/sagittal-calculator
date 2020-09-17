// tslint:disable max-line-length

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
} from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, DEFAULT_FIND_COMMAS_OPTIONS, SymbolClass } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeFindCommasOutput } from "../../../../../../src/scripts/jiPitch/io"

describe("computeFindCommasOutput", (): void => {
    // I'm pretty sure that this is not realistic comma data, since these commas are unrelated.
    const commaAnalysesWithMaybeSagittalSymbolClassId: Array<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }> = [
        {
            symbolClassId: 115 as Id<SymbolClass>,
            name: "11M" as Name<Comma>,
            primeLimit: 11 as Prime,
            twoThreeFreeSopfr: 11 as Sopfr<{ rough: 5 }>,
            twoThreeFreeClass: { monzo: [0, 0, 0, 0, 1] } as TwoThreeFreeClass,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo,
            ratio: [33, 32] as Ratio,
            apotomeSlope: -4 as ApotomeSlope,
            n2d3p9: 6.722 as N2D3P9,
        } as CommaAnalysis & { symbolClassId?: Id<SymbolClass> },
        {
            name: "25/49M" as Name<Comma>,
            primeLimit: 7 as Prime,
            twoThreeFreeSopfr: 24 as Sopfr<{ rough: 5 }>,
            twoThreeFreeClass: { monzo: [0, 0, -2, 2] } as TwoThreeFreeClass,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo,
            ratio: [50, 49] as Ratio,
            apotomeSlope: -2.154 as ApotomeSlope,
            n2d3p9: 26.466 as N2D3P9,
        } as CommaAnalysis & { symbolClassId?: Id<SymbolClass> },
    ]

    it("changes column widths so that each cell in a column has the same width", (): void => {
        const actual = computeFindCommasOutput(commaAnalysesWithMaybeSagittalSymbolClassId)

        const expected = 
            "" + NEWLINE +
            "cents range:       \t  0.000 -  56.843" + NEWLINE +
            "max ATE:           \t 15    " + NEWLINE +
            "max AAS:           \t 14.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "        \t      \t     \t                   \t       \t       \t       \t2,3-free\t2,3-free\t2,3-free" + NEWLINE +
            "symbol  \tcomma \t     \t                   \t       \tapotome\tprime  \tclass   \tclass   \tclass   " + NEWLINE +
            "class   \tname  \tratio\tmonzo              \tcents  \tslope  \tlimit  \tname    \tSoPFR   \tN2D3P9  ".underline + NEWLINE +
            "    /|\\ \t11M   \t33/32\t[   0   0   1 ⟩    \t 45.450\t -4.000\t 11    \t11/1    \t 11     \t  6.722 " + NEWLINE +
            "        \t25/49M\t50/49\t[   1   0   2  -2 ⟩\t 33.400\t -2.154\t  7    \t49/25   \t 24     \t 26.466 " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum", (): void => {
        ioSettings.forForum = true
        const actual = computeFindCommasOutput(commaAnalysesWithMaybeSagittalSymbolClassId)

        const expected =
            "" + NEWLINE +
            "cents range:       \t  0.000 -  56.843" + NEWLINE +
            "max ATE:           \t 15    " + NEWLINE +
            "max AAS:           \t 14.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]symbol[/pre][/th][th][pre]comma[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]apotome[/pre][/th][th][pre]prime[/pre][/th][th][pre]class[/pre][/th][th][pre]class[/pre][/th][th][pre]class[/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]class[/pre][/th][th][pre]name[/pre][/th][th][pre]ratio[/pre][/th][th][pre]monzo[/pre][/th][th][pre]cents[/pre][/th][th][pre]slope[/pre][/th][th][pre]limit[/pre][/th][th][pre]name[/pre][/th][th][pre]SoPFR[/pre][/th][th][pre]N2D3P9[/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre]:/|\\:[/pre][/td][td][pre]11M[/pre][/td][td][pre]33/32[/pre][/td][td][pre][   0   0   1 ⟩[/pre][/td][td][pre] 45.450[/pre][/td][td][pre] -4.000[/pre][/td][td][pre] 11    [/pre][/td][td][pre]11/1[/pre][/td][td][pre] 11    [/pre][/td][td][pre]  6.722[/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre][/pre][/td][td][pre]25/49M[/pre][/td][td][pre]50/49[/pre][/td][td][pre][   1   0   2  -2 ⟩[/pre][/td][td][pre] 33.400[/pre][/td][td][pre] -2.154[/pre][/td][td][pre]  7    [/pre][/td][td][pre]49/25[/pre][/td][td][pre] 24    [/pre][/td][td][pre] 26.466[/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
