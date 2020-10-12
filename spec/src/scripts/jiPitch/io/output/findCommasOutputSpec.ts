// tslint:disable max-line-length

import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Direction,
    Exponent,
    Id,
    Io,
    ioSettings,
    Max,
    Monzo,
    Name,
    NEWLINE,
    Prime,
    Quotient,
    Sopfr,
    TableFormat,
    Two3FreeClass,
} from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, CommaClass } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import { computeFindCommasOutput } from "../../../../../../src/scripts/jiPitch/io"
import { commaAnalysisFixture } from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeFindCommasOutput", (): void => {
    // I'm pretty sure that this is not legitimate comma data, since these commas are unrelated.
    const commaAnalyses: CommaAnalysis[] = [
        {
            ...commaAnalysisFixture,
            name: "11M" as Name<Comma>,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo<{ rational: true }>,
            quotient: [33, 32] as Quotient<{ rational: true }>,
            apotomeSlope: -4 as ApotomeSlope,
            aas: 4 as Abs<ApotomeSlope>,
            ate: 0 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
            two3FreeClassAnalysis: {
                name: "11/1" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                two3FreeSopfr: 11 as Sopfr<{ rough: 5 }>,
                two3FreeClass: {
                    monzo: [0, 0, 0, 0, 1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                } as Two3FreeClass,
                n2d3p9: 6.722 as N2D3P9,
            },
        },
        {
            ...commaAnalysisFixture,
            name: "25/49M" as Name<Comma>,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo<{ rational: true }>,
            quotient: [50, 49] as Quotient<{ rational: true }>,
            apotomeSlope: -2.154 as ApotomeSlope,
            aas: 2.154 as Abs<ApotomeSlope>,
            ate: 0 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
            two3FreeClassAnalysis: {
                name: "49/25" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                two3FreeClass: {
                    monzo: [0, 0, -2, 2] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                } as Two3FreeClass,
                n2d3p9: 26.466 as N2D3P9,
            },
        },
    ]
    const maybeCommaClassIds = [114 as Id<CommaClass>, undefined]

    it("changes column widths so that each cell in a column has the same width", (): void => {
        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2)" + NEWLINE +
            "max ATE:           \t 15    " + NEWLINE +
            "max AAS:           \t 14.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "        \t      \t        \t \t  \t     \t       \t       \t       \t       \t \t               \t       \t       \t       \t2,3-free\t2,3-free\t \t  \t     \t2,3-free\t2,3-free\t2,3-free" + NEWLINE +
            "comma   \t      \tquotient\t \t  \tmonzo\t       \t       \t       \t       \t \t               \tapotome\t       \t       \tprime   \t   class\t \t  \t     \tclass   \tclass   \tclass   " + NEWLINE +
            "class   \tname  \t       n\t/\td \t    [\t  2    \t  3    \t  5    \t  7    \t⟩\tcents          \tslope  \tAAS    \tATE    \tlimit   \t       n\t/\td \t₍₂,₃₎\tCoPFR   \tSoPFR   \tN2D3P9  ".underline + NEWLINE +
            "    /|\\ \t11M   \t      33\t/\t32\t    [\t  0    \t  0    \t  1    \t       \t⟩\t        45.450¢\t -4.000\t  4.000\t  0    \t 11     \t      11\t/\t1 \t₍₂,₃₎\t  1     \t 11     \t  6.722 " + NEWLINE +
            "        \t25/49M\t      50\t/\t49\t    [\t  1    \t  0    \t  2    \t -2    \t⟩\t        33.400¢\t -2.154\t  2.154\t  0    \t  7     \t      49\t/\t25\t₍₂,₃₎\t  4     \t 24     \t 26.466 " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2)" + NEWLINE +
            "max ATE:           \t 15    " + NEWLINE +
            "max AAS:           \t 14.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][pre]     [/pre][/th][th][pre]      [/pre][/th][th][pre]        [/pre][/th][th][pre]     [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre] [/pre][/th][th][pre]               [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]comma[/pre][/th][th][pre]      [/pre][/th][th][pre]        [/pre][/th][th][pre]monzo[/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre] [/pre][/th][th][pre]               [/pre][/th][th][pre]apotome[/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]prime   [/pre][/th][th][pre]class   [/pre][/th][th][pre]class   [/pre][/th][th][pre]class   [/pre][/th][th][pre]class   [/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]class[/pre][/th][th][pre]name  [/pre][/th][th][pre]quotient[/pre][/th][th][pre]    [[/pre][/th][th][pre]  2    [/pre][/th][th][pre]  3    [/pre][/th][th][pre]  5    [/pre][/th][th][pre]  7    [/pre][/th][th][pre]⟩[/pre][/th][th][pre]cents          [/pre][/th][th][pre]slope  [/pre][/th][th][pre]AAS    [/pre][/th][th][pre]ATE    [/pre][/th][th][pre]limit   [/pre][/th][th][pre]name    [/pre][/th][th][pre]CoPFR   [/pre][/th][th][pre]SoPFR   [/pre][/th][th][pre]N2D3P9  [/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre][/pre]:/|\\:[pre][/pre][/td][td][pre]11M   [/pre][/td][td][pre][/pre][latex]\\frac{33}{32}[/latex][pre][/pre][/td][td][pre]    [[/pre][/td][td][pre]  0    [/pre][/td][td][pre]  0    [/pre][/td][td][pre]  1    [/pre][/td][td][pre]       [/pre][/td][td][pre]⟩[/pre][/td][td][pre]        45.450¢[/pre][/td][td][pre] -4.000[/pre][/td][td][pre]  4.000[/pre][/td][td][pre]  0    [/pre][/td][td][pre] 11     [/pre][/td][td][pre][/pre][latex]\\frac{11}{1}_{\\scriptsize{(2,3)}}[/latex][pre][/pre][/td][td][pre]  1     [/pre][/td][td][pre] 11     [/pre][/td][td][pre]  6.722 [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]     [/pre][/td][td][pre]25/49M[/pre][/td][td][pre][/pre][latex]\\frac{50}{49}[/latex][pre][/pre][/td][td][pre]    [[/pre][/td][td][pre]  1    [/pre][/td][td][pre]  0    [/pre][/td][td][pre]  2    [/pre][/td][td][pre] -2    [/pre][/td][td][pre]⟩[/pre][/td][td][pre]        33.400¢[/pre][/td][td][pre] -2.154[/pre][/td][td][pre]  2.154[/pre][/td][td][pre]  0    [/pre][/td][td][pre]  7     [/pre][/td][td][pre][/pre][latex]\\frac{49}{25}_{\\scriptsize{(2,3)}}[/latex][pre][/pre][/td][td][pre]  4     [/pre][/td][td][pre] 24     [/pre][/td][td][pre] 26.466 [/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum, but where the splitting of quotients and 2,3-free classes is preferred", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM_WITH_SPLIT_QUOTIENTS
        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2)" + NEWLINE +
            "max ATE:           \t 15    " + NEWLINE +
            "max AAS:           \t 14.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][pre]     [/pre][/th][th][pre]      [/pre][/th][th][pre]        [/pre][/th][th][pre] [/pre][/th][th][pre]  [/pre][/th][th][pre]     [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre] [/pre][/th][th][pre]               [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][th][pre] [/pre][/th][th][pre]  [/pre][/th][th][pre][/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]2,3-free[/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]comma[/pre][/th][th][pre]      [/pre][/th][th][pre]quotient[/pre][/th][th][pre] [/pre][/th][th][pre]  [/pre][/th][th][pre]monzo[/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre] [/pre][/th][th][pre]               [/pre][/th][th][pre]apotome[/pre][/th][th][pre]       [/pre][/th][th][pre]       [/pre][/th][th][pre]prime   [/pre][/th][th][pre]   class[/pre][/th][th][pre] [/pre][/th][th][pre]  [/pre][/th][th][pre][/pre][/th][th][pre]class   [/pre][/th][th][pre]class   [/pre][/th][th][pre]class   [/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]class[/pre][/th][th][pre]name  [/pre][/th][th][pre]       n[/pre][/th][th][pre]/[/pre][/th][th][pre]d [/pre][/th][th][pre]    [[/pre][/th][th][pre]  2    [/pre][/th][th][pre]  3    [/pre][/th][th][pre]  5    [/pre][/th][th][pre]  7    [/pre][/th][th][pre]⟩[/pre][/th][th][pre]cents          [/pre][/th][th][pre]slope  [/pre][/th][th][pre]AAS    [/pre][/th][th][pre]ATE    [/pre][/th][th][pre]limit   [/pre][/th][th][pre]       n[/pre][/th][th][pre]/[/pre][/th][th][pre]d [/pre][/th][th][pre][/pre][latex]_{\\scriptsize{(2,3)}}[/latex][pre][/pre][/th][th][pre]CoPFR   [/pre][/th][th][pre]SoPFR   [/pre][/th][th][pre]N2D3P9  [/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre][/pre]:/|\\:[pre][/pre][/td][td][pre]11M   [/pre][/td][td][pre]      33[/pre][/td][td][pre]/[/pre][/td][td][pre]32[/pre][/td][td][pre]    [[/pre][/td][td][pre]  0    [/pre][/td][td][pre]  0    [/pre][/td][td][pre]  1    [/pre][/td][td][pre]       [/pre][/td][td][pre]⟩[/pre][/td][td][pre]        45.450¢[/pre][/td][td][pre] -4.000[/pre][/td][td][pre]  4.000[/pre][/td][td][pre]  0    [/pre][/td][td][pre] 11     [/pre][/td][td][pre]      11[/pre][/td][td][pre]/[/pre][/td][td][pre]1 [/pre][/td][td][pre][/pre][latex]_{\\scriptsize{(2,3)}}[/latex][pre][/pre][/td][td][pre]  1     [/pre][/td][td][pre] 11     [/pre][/td][td][pre]  6.722 [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]     [/pre][/td][td][pre]25/49M[/pre][/td][td][pre]      50[/pre][/td][td][pre]/[/pre][/td][td][pre]49[/pre][/td][td][pre]    [[/pre][/td][td][pre]  1    [/pre][/td][td][pre]  0    [/pre][/td][td][pre]  2    [/pre][/td][td][pre] -2    [/pre][/td][td][pre]⟩[/pre][/td][td][pre]        33.400¢[/pre][/td][td][pre] -2.154[/pre][/td][td][pre]  2.154[/pre][/td][td][pre]  0    [/pre][/td][td][pre]  7     [/pre][/td][td][pre]      49[/pre][/td][td][pre]/[/pre][/td][td][pre]25[/pre][/td][td][pre][/pre][latex]_{\\scriptsize{(2,3)}}[/latex][pre][/pre][/td][td][pre]  4     [/pre][/td][td][pre] 24     [/pre][/td][td][pre] 26.466 [/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format it for a spreadsheet", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2)" + NEWLINE +
            "max ATE:           \t15" + NEWLINE +
            "max AAS:           \t14.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t61" + NEWLINE +
            "max 2,3-free copfr:\t555" + NEWLINE +
            "max prime limit:   \t47" + NEWLINE +
            "" + NEWLINE +
            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2,3-free\t2,3-free\t\t\t\t2,3-free\t2,3-free\t2,3-free" + NEWLINE +
            "comma\t\tquotient\t\t\tmonzo\t\t\t\t\t\t\tapotome\t\t\tprime\tclass\t\t\t\tclass\tclass\tclass" + NEWLINE +
            "class\tname\tn\t/\td\t[\t2\t3\t5\t7\t⟩\tcents\tslope\tAAS\tATE\tlimit\tn\t/\td\t₍₂,₃₎\tCoPFR\tSoPFR\tN2D3P9".underline + NEWLINE +
            "\t11M\t33\t/\t32\t[\t0\t0\t1\t\t⟩\t45.450¢\t-4.000\t4.000\t0\t11\t11\t/\t1\t₍₂,₃₎\t1\t11\t6.722" + NEWLINE +
            "\t25/49M\t50\t/\t49\t[\t1\t0\t2\t-2\t⟩\t33.400¢\t-2.154\t2.154\t0\t7\t49\t/\t25\t₍₂,₃₎\t4\t24\t26.466" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
