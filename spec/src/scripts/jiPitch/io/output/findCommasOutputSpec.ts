// tslint:disable max-line-length

import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Direction,
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
import {ApotomeSlope, Ate, CommaAnalysis, CommaClassId, N2D3P9} from "../../../../../../src/sagittal"
import {DEFAULT_FIND_COMMAS_OPTIONS} from "../../../../../../src/scripts/jiPitch/findCommas"
import {jiPitchScriptGroupSettings} from "../../../../../../src/scripts/jiPitch/globals"
import {computeFindCommasOutput} from "../../../../../../src/scripts/jiPitch/io"
import {JiPitchScriptGroupField} from "../../../../../../src/scripts/jiPitch/types"
import {OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} from "../../../../../helpers/src/scripts/jiPitch/constants"
import {commaAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeFindCommasOutput", (): void => {
    // I'm pretty sure that this is not legitimate comma data, since these commas are unrelated.
    const commaAnalyses: CommaAnalysis[] = [
        {
            ...commaAnalysisFixture,
            name: "11M" as Name<Comma>,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo<{rational: true}>,
            quotient: [33, 32] as Quotient<{rational: true}>,
            apotomeSlope: -4 as ApotomeSlope,
            aas: 4 as Abs<ApotomeSlope>,
            ate: 0 as Ate,
            two3FreeClassAnalysis: {
                name: "11/1" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<{rough: 5}>>,
                two3FreeCopfr: 1 as Copfr<{rough: 5}>,
                two3FreeSopfr: 11 as Sopfr<{rough: 5}>,
                two3FreeClass: {
                    monzo: [0, 0, 0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                n2d3p9: 6.722 as N2D3P9,
            },
        },
        {
            ...commaAnalysisFixture,
            name: "25/49M" as Name<Comma>,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo<{rational: true}>,
            quotient: [50, 49] as Quotient<{rational: true}>,
            apotomeSlope: -2.154 as ApotomeSlope,
            aas: 2.154 as Abs<ApotomeSlope>,
            ate: 0 as Ate,
            two3FreeClassAnalysis: {
                name: "49/25" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<{rough: 5}>>,
                two3FreeCopfr: 4 as Copfr<{rough: 5}>,
                two3FreeSopfr: 24 as Sopfr<{rough: 5}>,
                two3FreeClass: {
                    monzo: [0, 0, -2, 2] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                n2d3p9: 26.466 as N2D3P9,
            },
        },
    ]
    const maybeCommaClassIds = [CommaClassId._11_M, undefined]
    const findCommasOptions = {
        ...DEFAULT_FIND_COMMAS_OPTIONS,
        maxN2D3P9: OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS,
    }

    it("changes column widths so that each cell in a column has the same width", (): void => {
        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasOptions)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩ (inclusive)" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2) (inclusive)" + NEWLINE +
            "max ATE:           \t 20    " + NEWLINE +
            "max AAS:           \t 20.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "        \t      \t        \t \t  \t     \t       \t       \t       \t       \t \t               \t       \t       \t       \t2,3-free\t2,3-free\t \t  \t   \t2,3-free\t2,3-free\t2,3-free" + NEWLINE +
            "comma   \t      \tquotient\t \t  \tmonzo\t       \t       \t       \t       \t \t               \tapotome\t       \t       \tprime   \t   class\t \t  \t   \tclass   \tclass   \tclass   " + NEWLINE +
            "class   \tname  \t       n\t/\td \t     \t  2    \t  3    \t  5    \t  7    \t \tcents          \tslope  \tAAS    \tATE    \tlimit   \t       n\t/\td \t₂,₃\tCoPFR   \tSoPFR   \tN2D3P9  ".underline + NEWLINE +
            "    /|\\ \t11M   \t      33\t/\t32\t    [\t  0    \t  0    \t  1    \t       \t⟩\t        45.450¢\t -4.000\t  4.000\t  0    \t 11     \t      11\t/\t1 \t₂,₃\t  1     \t 11     \t  6.722 " + NEWLINE +
            "        \t25/49M\t      50\t/\t49\t    [\t  1    \t  0    \t  2    \t -2    \t⟩\t        33.400¢\t -2.154\t  2.154\t  0    \t  7     \t      49\t/\t25\t₂,₃\t  4     \t 24     \t 26.466 " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasOptions)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩ (inclusive)" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2) (inclusive)" + NEWLINE +
            "max ATE:           \t 20    " + NEWLINE +
            "max AAS:           \t 20.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][/th][th][/th][th][/th][thr][/thr][th][/th][th][/th][th][/th][th][/th][thl][/thl][th][/th][th][/th][th][/th][th][/th][th]2,3-free[/th][th]2,3-free[/th][th]2,3-free[/th][th]2,3-free[/th][th]2,3-free[/th][/tr]" + NEWLINE +
            "[tr][th]comma[/th][th][/th][th][/th][th=6]monzo[/th][th][/th][th]apotome[/th][th][/th][th][/th][th]prime[/th][th]class[/th][th]class[/th][th]class[/th][th]class[/th][/tr]" + NEWLINE +
            "[tr][th]class[/th][th]name[/th][th]quotient[/th][thr] [/thr][th]  2    [/th][th]  3    [/th][th]  5    [/th][th]  7    [/th][thl] [/thl][th]cents[/th][th]slope[/th][th]AAS[/th][th]ATE[/th][th]limit[/th][th]name[/th][th]CoPFR[/th][th]SoPFR[/th][th]N2D3P9[/th][/tr]" + NEWLINE +
            "[tr][td]:/|\\:[/td][td]11M[/td][td][latex]\\frac{33}{32}[/latex][/td][tdr][[/tdr][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc]  1    [/tdc][tdc][/tdc][td]⟩[/td][td] 45.450¢[/td][td] -4.000[/td][td]  4.000[/td][td]  0    [/td][td] 11    [/td][td][latex]\\{11\\}_{\\scriptsize{2,3}}[/latex][/td][td]  1    [/td][td] 11    [/td][td]  6.722[/td][/tr]" + NEWLINE +
            "[tr][td][/td][td]25/49M[/td][td][latex]\\frac{50}{49}[/latex][/td][tdr][[/tdr][tdc]  1    [/tdc][tdc]  0    [/tdc][tdc]  2    [/tdc][tdc] -2    [/tdc][td]⟩[/td][td] 33.400¢[/td][td] -2.154[/td][td]  2.154[/td][td]  0    [/td][td]  7    [/td][td][latex]\\{\\frac{49}{25}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  4    [/td][td] 24    [/td][td] 26.466[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum, but where the splitting of quotients and 2,3-free classes is preferred", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM_WITH_SPLIT_QUOTIENTS
        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasOptions)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩ (inclusive)" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2) (inclusive)" + NEWLINE +
            "max ATE:           \t 20    " + NEWLINE +
            "max AAS:           \t 20.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][/th][th][/th][thr][/thr][th][/th][thl][/thl][thr][/thr][th][/th][th][/th][th][/th][th][/th][thl][/thl][th][/th][th][/th][th][/th][th][/th][th]2,3-free[/th][th=4]2,3-free[/th][th]2,3-free[/th][th]2,3-free[/th][th]2,3-free[/th][/tr]" + NEWLINE +
            "[tr][th]comma[/th][th][/th][th=3]quotient[/th][th=6]monzo[/th][th][/th][th]apotome[/th][th][/th][th][/th][th]prime[/th][th=4]class[/th][th]class[/th][th]class[/th][th]class[/th][/tr]" + NEWLINE +
            "[tr][th]class[/th][th]name[/th][thr]n[/thr][th]/[/th][thl]d[/thl][thr] [/thr][th]  2    [/th][th]  3    [/th][th]  5    [/th][th]  7    [/th][thl] [/thl][th]cents[/th][th]slope[/th][th]AAS[/th][th]ATE[/th][th]limit[/th][thr]n[/thr][th]/[/th][thl]d[/thl][th][latex]_{\\scriptsize{2,3}}[/latex][/th][th]CoPFR[/th][th]SoPFR[/th][th]N2D3P9[/th][/tr]" + NEWLINE +
            "[tr][td]:/|\\:[/td][td]11M[/td][tdr]33[/tdr][tdc]/[/tdc][td]32[/td][tdr][[/tdr][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc]  1    [/tdc][tdc][/tdc][td]⟩[/td][td] 45.450¢[/td][td] -4.000[/td][td]  4.000[/td][td]  0    [/td][td] 11    [/td][tdr]11[/tdr][tdc]/[/tdc][td]1[/td][td][latex]_{\\scriptsize{2,3}}[/latex][/td][td]  1    [/td][td] 11    [/td][td]  6.722[/td][/tr]" + NEWLINE +
            "[tr][td][/td][td]25/49M[/td][tdr]50[/tdr][tdc]/[/tdc][td]49[/td][tdr][[/tdr][tdc]  1    [/tdc][tdc]  0    [/tdc][tdc]  2    [/tdc][tdc] -2    [/tdc][td]⟩[/td][td] 33.400¢[/td][td] -2.154[/td][td]  2.154[/td][td]  0    [/td][td]  7    [/td][tdr]49[/tdr][tdc]/[/tdc][td]25[/td][td][latex]_{\\scriptsize{2,3}}[/latex][/td][td]  4    [/td][td] 24    [/td][td] 26.466[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format it for a spreadsheet", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasOptions)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩ (inclusive)" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2) (inclusive)" + NEWLINE +
            "max ATE:           \t20" + NEWLINE +
            "max AAS:           \t20.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t61" + NEWLINE +
            "max 2,3-free copfr:\t555" + NEWLINE +
            "max prime limit:   \t47" + NEWLINE +
            "" + NEWLINE +
            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2,3-free\t2,3-free\t\t\t\t2,3-free\t2,3-free\t2,3-free" + NEWLINE +
            "comma\t\tquotient\t\t\tmonzo\t\t\t\t\t\t\tapotome\t\t\tprime\tclass\t\t\t\tclass\tclass\tclass" + NEWLINE +
            "class\tname\tn\t/\td\t \t2\t3\t5\t7\t \tcents\tslope\tAAS\tATE\tlimit\tn\t/\td\t₂,₃\tCoPFR\tSoPFR\tN2D3P9".underline + NEWLINE +
            "\t11M\t33\t/\t32\t[\t0\t0\t1\t\t⟩\t45.450¢\t-4.000\t4.000\t0\t11\t11\t/\t1\t₂,₃\t1\t11\t6.722" + NEWLINE +
            "\t25/49M\t50\t/\t49\t[\t1\t0\t2\t-2\t⟩\t33.400¢\t-2.154\t2.154\t0\t7\t49\t/\t25\t₂,₃\t4\t24\t26.466" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can reorder fields", (): void => {
        jiPitchScriptGroupSettings.orderedFields = ["monzo", "two3FreeClassName", "quotient", "cents"] as JiPitchScriptGroupField[]
        jiPitchScriptGroupSettings.excludedFields = [] // This happens automatically when ordering fields

        const actual = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasOptions)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩ (inclusive)" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2) (inclusive)" + NEWLINE +
            "max ATE:           \t 20    " + NEWLINE +
            "max AAS:           \t 20.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "     \t       \t       \t       \t       \t \t2,3-free\t \t  \t   \t        \t \t  \t               " + NEWLINE +
            "monzo\t       \t       \t       \t       \t \t   class\t \t  \t   \tquotient\t \t  \t               " + NEWLINE +
            "     \t  2    \t  3    \t  5    \t  7    \t \t       n\t/\td \t₂,₃\t       n\t/\td \tcents          ".underline + NEWLINE +
            "    [\t  0    \t  0    \t  1    \t       \t⟩\t      11\t/\t1 \t₂,₃\t      33\t/\t32\t        45.450¢" + NEWLINE +
            "    [\t  1    \t  0    \t  2    \t -2    \t⟩\t      49\t/\t25\t₂,₃\t      50\t/\t49\t        33.400¢" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("does not create an empty table if there are no results", (): void => {
        const actual = computeFindCommasOutput([], maybeCommaClassIds, findCommasOptions)

        const expected =
            "" + NEWLINE +
            "lower bound:       \t[  ⟩ (inclusive)" + NEWLINE +
            "upper bound:       \t[ -11   7 ⟩(1/2) (inclusive)" + NEWLINE +
            "max ATE:           \t 20    " + NEWLINE +
            "max AAS:           \t 20.000" + NEWLINE +
            "max N2D3P9:        \t307.000" + NEWLINE +
            "max 2,3-free sopfr:\t 61    " + NEWLINE +
            "max 2,3-free copfr:\t555    " + NEWLINE +
            "max prime limit:   \t 47    " + NEWLINE +
            "" + NEWLINE +
            "(no results)" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
