// tslint:disable max-line-length

import {
    Abs,
    Cents,
    Comma,
    Decimal,
    Exponent,
    Io,
    ioSettings,
    Monzo,
    Name,
    NEWLINE,
    Prime,
    Quotient,
    TableFormat,
} from "../../../../../../src/general"
import {ApotomeSlope, CommaAnalysis} from "../../../../../../src/sagittal/ji"
import {CommaClassId} from "../../../../../../src/sagittal/notation"
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
    const maybeCommaClassIds = [CommaClassId._11_M, undefined]

    it("can format the notating commas for the terminal", (): void => {
        const actual = computeNotatingCommasOutput(notatingCommaAnalyses, maybeCommaClassIds)

        const expected =
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "comma   \t      \tquotient\t \t  \tmonzo\t       \t       \t       \t       \t \t               \tapotome\t       \t       " + NEWLINE +
            "class   \tname  \t       n\t/\td \t     \t  2    \t  3    \t  5    \t  7    \t \tcents          \tslope  \tAAS    \tATE    ".underline + NEWLINE +
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
            "[tr][th]comma[/th][th][/th][th][/th][th=6]monzo[/th][th][/th][th]apotome[/th][th][/th][th][/th][/tr]" + NEWLINE +
            "[tr][th]class[/th][th]name[/th][th]quotient[/th][thr] [/thr][th]  2    [/th][th]  3    [/th][th]  5    [/th][th]  7    [/th][thl] [/thl][th]cents[/th][th]slope[/th][th]AAS[/th][th]ATE[/th][/tr]" + NEWLINE +
            "[tr][td]:/|\\:[/td][td]11M[/td][td][latex]\\frac{33}{32}[/latex][/td][tdr][[/tdr][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc]  1    [/tdc][tdc][/tdc][td]⟩[/td][td] 45.450¢[/td][td] -4.000[/td][td]  4.000[/td][td]  0    [/td][/tr]" + NEWLINE +
            "[tr][td][/td][td]25/49M[/td][td][latex]\\frac{50}{49}[/latex][/td][tdr][[/tdr][tdc]  1    [/tdc][tdc]  0    [/tdc][tdc]  2    [/tdc][tdc] -2    [/tdc][td]⟩[/td][td] 33.400¢[/td][td] -2.154[/td][td]  2.154[/td][td]  0    [/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toBe(expected)
    })
})
