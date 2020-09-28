// tslint:disable max-line-length

import {
    Abs,
    Cents,
    Comma,
    Exponent,
    Id,
    IntegerDecimal,
    Io,
    ioSettings,
    Name,
    NEWLINE,
    Prime,
    RationalMonzo,
    RationalQuotient,
    TableFormat,
} from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis } from "../../../../../../src/sagittal/ji"
import { SymbolClass } from "../../../../../../src/sagittal/notations"
import { computeNotatingCommasOutput } from "../../../../../../src/scripts/jiPitch/io"
import { twoThreeFreeClassAnalysisFixture } from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeNotatingCommasOutput", (): void => {
    const notatingCommaAnalyses: CommaAnalysis[] = [
        {
            name: "11M" as Name<Comma>,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as RationalMonzo,
            quotient: [33, 32] as RationalQuotient,
            apotomeSlope: -4 as ApotomeSlope,
            aas: 4 as Abs<ApotomeSlope>,
            ate: 0 as Abs<IntegerDecimal & Exponent<3 & Prime>>,
            twoThreeFreeClassAnalysis: twoThreeFreeClassAnalysisFixture,
        },
        {
            name: "25/49M" as Name<Comma>,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as RationalMonzo,
            quotient: [50, 49] as RationalQuotient,
            apotomeSlope: -2.154 as ApotomeSlope,
            aas: 2.154 as Abs<ApotomeSlope>,
            ate: 0 as Abs<IntegerDecimal & Exponent<3 & Prime>>,
            twoThreeFreeClassAnalysis: twoThreeFreeClassAnalysisFixture,
        },
    ] as CommaAnalysis[]
    const maybeSymbolClassIds = [114 as Id<SymbolClass>, undefined]

    it("can format the symbols for the terminal", (): void => {
        const actual = computeNotatingCommasOutput(notatingCommaAnalyses, maybeSymbolClassIds)

        const expected =
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "symbol  \t      \t        \t                   \t               \tapotome\t       \t       " + NEWLINE +
            "class   \tname  \tquotient\tmonzo              \tcents          \tslope  \tAAS    \tATE    ".underline + NEWLINE +
            "    /|\\ \t11M   \t33/32   \t[   0   0   1 ⟩    \t        45.450¢\t -4.000\t  4.000\t  0    " + NEWLINE +
            "        \t25/49M\t50/49   \t[   1   0   2  -2 ⟩\t        33.400¢\t -2.154\t  2.154\t  0    " + NEWLINE as Io
        expect(actual).toBe(expected)
    })

    it("can format the symbols for the forum", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = computeNotatingCommasOutput(notatingCommaAnalyses, maybeSymbolClassIds)

        const expected =
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][pre]symbol[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]apotome[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]class[/pre][/th][th][pre]name[/pre][/th][th][pre]quotient[/pre][/th][th][pre]monzo[/pre][/th][th][pre]cents[/pre][/th][th][pre]slope[/pre][/th][th][pre]AAS[/pre][/th][th][pre]ATE[/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre]:/|\\:[/pre][/td][td][pre]11M[/pre][/td][td][pre]33/32[/pre][/td][td][pre][   0   0   1 ⟩[/pre][/td][td][pre]        45.450¢[/pre][/td][td][pre] -4.000[/pre][/td][td][pre]  4.000[/pre][/td][td][pre]  0    [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre][/pre][/td][td][pre]25/49M[/pre][/td][td][pre]50/49[/pre][/td][td][pre][   1   0   2  -2 ⟩[/pre][/td][td][pre]        33.400¢[/pre][/td][td][pre] -2.154[/pre][/td][td][pre]  2.154[/pre][/td][td][pre]  0    [/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toBe(expected)
    })
})
