// tslint:disable max-line-length

import {
    Abs,
    Cents,
    Comma,
    Decimal,
    Exponent,
    Id,
    Io,
    ioSettings,
    Monzo,
    Name,
    NEWLINE,
    Prime,
    Quotient,
    TableFormat,
} from "../../../../../../src/general"
import {ApotomeSlope, CommaAnalysis, CommaClass} from "../../../../../../src/sagittal/ji"
import {computeNotatingCommasOutput} from "../../../../../../src/scripts/jiPitch/io"
import {commaAnalysisFixture, two3FreeClassAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeNotatingCommasOutput", (): void => {
    const notatingCommaAnalyses: CommaAnalysis[] = [
        {
            ...commaAnalysisFixture,
            name: "11M" as Name<Comma>,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo<{rational: true}>,
            quotient: [33, 32] as Quotient<{rational: true}>,
            apotomeSlope: -4 as ApotomeSlope,
            aas: 4 as Abs<ApotomeSlope>,
            ate: 0 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
            two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
        },
        {
            ...commaAnalysisFixture,
            name: "25/49M" as Name<Comma>,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo<{rational: true}>,
            quotient: [50, 49] as Quotient<{rational: true}>,
            apotomeSlope: -2.154 as ApotomeSlope,
            aas: 2.154 as Abs<ApotomeSlope>,
            ate: 0 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
            two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
        },
    ]
    const maybeCommaClassIds = [114 as Id<CommaClass>, undefined]

    it("can format the notating commas for the terminal", (): void => {
        const actual = computeNotatingCommasOutput(notatingCommaAnalyses, maybeCommaClassIds)

        const expected =
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "comma   \t      \tquotient\t \t  \tmonzo\t       \t       \t       \t       \t \t               \tapotome\t       \t       " + NEWLINE +
            "class   \tname  \t       n\t/\td \t    [\t  2    \t  3    \t  5    \t  7    \t⟩\tcents          \tslope  \tAAS    \tATE    ".underline + NEWLINE +
            "    /|\\ \t11M   \t      33\t/\t32\t    [\t  0    \t  0    \t  1    \t       \t⟩\t        45.450¢\t -4.000\t  4.000\t  0    " + NEWLINE +
            "        \t25/49M\t      50\t/\t49\t    [\t  1    \t  0    \t  2    \t -2    \t⟩\t        33.400¢\t -2.154\t  2.154\t  0    " + NEWLINE as Io
        expect(actual).toBe(expected)
    })

    it("can format the notating commas for the forum", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = computeNotatingCommasOutput(notatingCommaAnalyses, maybeCommaClassIds)

        const expected =
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][pre]comma[/pre][/th][th][pre]      [/pre][/th][th][pre]        [/pre][/th][th][pre]monzo[/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre] [/pre][/th][th][pre]               [/pre][/th][th][pre]apotome[/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]class[/pre][/th][th][pre]name  [/pre][/th][th][pre]quotient[/pre][/th][th][pre]    [[/pre][/th][th][pre]  2    [/pre][/th][th][pre]  3    [/pre][/th][th][pre]  5    [/pre][/th][th][pre]  7    [/pre][/th][th][pre]⟩[/pre][/th][th][pre]cents          [/pre][/th][th][pre]slope  [/pre][/th][th][pre]AAS    [/pre][/th][th][pre]ATE    [/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre][/pre]:/|\\:[pre][/pre][/td][td][pre]11M   [/pre][/td][td][pre][/pre][latex]\\frac{33}{32}[/latex][pre][/pre][/td][td][pre]    [[/pre][/td][td][pre]  0    [/pre][/td][td][pre]  0    [/pre][/td][td][pre]  1    [/pre][/td][td][pre]       [/pre][/td][td][pre]⟩[/pre][/td][td][pre]        45.450¢[/pre][/td][td][pre] -4.000[/pre][/td][td][pre]  4.000[/pre][/td][td][pre]  0    [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]     [/pre][/td][td][pre]25/49M[/pre][/td][td][pre][/pre][latex]\\frac{50}{49}[/latex][pre][/pre][/td][td][pre]    [[/pre][/td][td][pre]  1    [/pre][/td][td][pre]  0    [/pre][/td][td][pre]  2    [/pre][/td][td][pre] -2    [/pre][/td][td][pre]⟩[/pre][/td][td][pre]        33.400¢[/pre][/td][td][pre] -2.154[/pre][/td][td][pre]  2.154[/pre][/td][td][pre]  0    [/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toBe(expected)
    })
})
