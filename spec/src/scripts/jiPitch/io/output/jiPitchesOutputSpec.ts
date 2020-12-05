import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Direction,
    Io,
    Max,
    Monzo,
    Name,
    NEWLINE,
    Prime,
    Quotient,
    Scamon,
    Sopfr,
    Two3FreeClass,
} from "@sagittal/general"
import {ApotomeSlope, Ate, CommaClassId, N2D3P9, PotentiallyCommaAnalysis} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../../../../../src/scripts/jiPitch/globals"
import {computeJiPitchesOutput} from "../../../../../../src/scripts/jiPitch/io"
import {JiPitchScriptGroupField} from "../../../../../../src/scripts/jiPitch/types"
import {potentiallyCommaAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeJiPitchesOutput", (): void => {
    const potentiallyCommaAnalyses: PotentiallyCommaAnalysis[] = [
        {
            ...potentiallyCommaAnalysisFixture,
            name: "11M" as Name<Comma>,
            pitch: {
                monzo: [-5, 1, 0, 0, 1] as Monzo<{rational: true}>,
            } as Scamon<{rational: true}>,
            cents: 45.45 as Cents,
            monzo: [-5, 1, 0, 0, 1] as Monzo<{rational: true}>,
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
            ...potentiallyCommaAnalysisFixture,
            name: "25/49S" as Name<Comma>,
            pitch: {
                monzo: [1, 0, 2, -2] as Monzo<{rational: true}>,
            } as Scamon<{rational: true}>,
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

    it("returns a row for each JI pitch being analyzed", (): void => {
        const actual = computeJiPitchesOutput(potentiallyCommaAnalyses, maybeCommaClassIds)

        const expected =
            "        \t      \t        \t \t  \t     \t       \t       \t       \t       \t       \t \t               \t       \t       \t       \t2,3-free\t2,3-free\t \t  \t   \t2,3-free\t2,3-free\t2,3-free" + NEWLINE +
            "comma   \t      \tquotient\t \t  \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       \tprime   \t   class\t \t  \t   \tclass   \tclass   \tclass   " + NEWLINE +
            "class   \tname  \t       n\t/\td \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope  \tAAS    \tATE    \tlimit   \t       n\t/\td \t₂,₃\tCoPFR   \tSoPFR   \tN2D3P9  ".underline + NEWLINE +
            "    /|\\ \t11M   \t      33\t/\t32\t    [\t -5    \t  1    \t  0    \t  0    \t  1    \t⟩\t        45.450¢\t -4.000\t  4.000\t  0    \t 11     \t      11\t/\t1 \t₂,₃\t  1     \t 11     \t  6.722 " + NEWLINE +
            "        \t25/49S\t      50\t/\t49\t    [\t  1    \t  0    \t  2    \t -2    \t       \t⟩\t        33.400¢\t -2.154\t  2.154\t  0    \t  7     \t      49\t/\t25\t₂,₃\t  4     \t 24     \t 26.466 " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can reorder fields", (): void => {
        jiPitchScriptGroupSettings.orderedFields = [
            "ate",
            "monzo",
            "aas",
            "quotient",
            "two3FreeSopfr",
            "cents",
            "two3FreeClassName",
            "name",
        ] as JiPitchScriptGroupField[]
        jiPitchScriptGroupSettings.excludedFields = [] // This happens automatically when ordering fields

        const actual = computeJiPitchesOutput(potentiallyCommaAnalyses, maybeCommaClassIds)

        const expected =
            "       \t     \t       \t       \t       \t       \t       \t \t       \t        \t \t  \t2,3-free\t               \t2,3-free\t \t  \t   \t      " + NEWLINE +
            "       \tmonzo\t       \t       \t       \t       \t       \t \t       \tquotient\t \t  \tclass   \t               \t   class\t \t  \t   \t      " + NEWLINE +
            "ATE    \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tAAS    \t       n\t/\td \tSoPFR   \tcents          \t       n\t/\td \t₂,₃\tname  ".underline + NEWLINE +
            "  0    \t    [\t -5    \t  1    \t  0    \t  0    \t  1    \t⟩\t  4.000\t      33\t/\t32\t 11     \t        45.450¢\t      11\t/\t1 \t₂,₃\t11M   " + NEWLINE +
            "  0    \t    [\t  1    \t  0    \t  2    \t -2    \t       \t⟩\t  2.154\t      50\t/\t49\t 24     \t        33.400¢\t      49\t/\t25\t₂,₃\t25/49S" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
