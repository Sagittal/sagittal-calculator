// tslint:disable max-line-length

import { Cents, Comma, Id, Io, ioSettings, Monzo, Name, NEWLINE, Ratio } from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis } from "../../../../../../src/sagittal/ji"
import { SymbolClass } from "../../../../../../src/sagittal/notations"
import { computeNotatingCommasOutput } from "../../../../../../src/scripts/jiPitch/io"
import { twoThreeFreeClassAnalysisFixture } from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeNotatingCommasOutput", (): void => {
    const notatingCommaAnalyses: CommaAnalysis[] = [
        {
            name: "11M" as Name<Comma>,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo,
            ratio: [33, 32] as Ratio,
            apotomeSlope: -4 as ApotomeSlope,
            twoThreeFreeClassAnalysis: twoThreeFreeClassAnalysisFixture,
        },
        {
            name: "25/49M" as Name<Comma>,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo,
            ratio: [50, 49] as Ratio,
            apotomeSlope: -2.154 as ApotomeSlope,
            twoThreeFreeClassAnalysis: twoThreeFreeClassAnalysisFixture,
        },
    ] as CommaAnalysis[]
    const maybeSymbolClassIds = [115 as Id<SymbolClass>, undefined]

    it("can format the symbols for the terminal", (): void => {
        const actual = computeNotatingCommasOutput(notatingCommaAnalyses, maybeSymbolClassIds)

        const expected =
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "symbol  \tcomma \t     \t                   \t       \tapotome" + NEWLINE +
            "class   \tname  \tratio\tmonzo              \tcents  \tslope  ".underline + NEWLINE +
            "    /|\\ \t11M   \t33/32\t[   0   0   1 ⟩    \t 45.450\t -4.000" + NEWLINE +
            "        \t25/49M\t50/49\t[   1   0   2  -2 ⟩\t 33.400\t -2.154" + NEWLINE as Io
        expect(actual).toBe(expected)
    })

    it("can format the symbols for the forum", (): void => {
        ioSettings.forForum = true
        const actual = computeNotatingCommasOutput(notatingCommaAnalyses, maybeSymbolClassIds)

        const expected =
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][pre]symbol[/pre][/th][th][pre]comma[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]apotome[/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]class[/pre][/th][th][pre]name[/pre][/th][th][pre]ratio[/pre][/th][th][pre]monzo[/pre][/th][th][pre]cents[/pre][/th][th][pre]slope[/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre]:/|\\:[/pre][/td][td][pre]11M[/pre][/td][td][pre]33/32[/pre][/td][td][pre][   0   0   1 ⟩[/pre][/td][td][pre] 45.450[/pre][/td][td][pre] -4.000[/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre][/pre][/td][td][pre]25/49M[/pre][/td][td][pre]50/49[/pre][/td][td][pre][   1   0   2  -2 ⟩[/pre][/td][td][pre] 33.400[/pre][/td][td][pre] -2.154[/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toBe(expected)
    })
})
