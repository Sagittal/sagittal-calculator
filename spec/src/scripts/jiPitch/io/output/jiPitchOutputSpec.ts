// tslint:disable max-line-length

import {Abs, Cents, Io, ioSettings, Monzo, NEWLINE, Quotient, TableFormat} from "../../../../../../src/general"
import {ApotomeSlope, Ate, JiPitchAnalysis} from "../../../../../../src/sagittal"
import {jiPitchScriptGroupSettings} from "../../../../../../src/scripts/jiPitch/globals"
import {computeJiPitchOutput} from "../../../../../../src/scripts/jiPitch/io"
import {JiPitchScriptGroupField} from "../../../../../../src/scripts/jiPitch/types"
import {
    jiPitchAnalysisFixture,
    two3FreeClassAnalysisFixture,
} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeJiPitchOutput", (): void => {
    const jiPitchAnalysis: JiPitchAnalysis = {
        ...jiPitchAnalysisFixture,
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo<{rational: true}>,
        quotient: [5, 4] as Quotient<{rational: true}>,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Ate,
        two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
    }

    it("formats it in a multi-line output with titles for each line", (): void => {
        const actual = computeJiPitchOutput(jiPitchAnalysis)

        const expected =
            "   --- JI pitch ---" + NEWLINE +
            "" + NEWLINE +
            "quotient\t \t \tmonzo\t       \t       \t       \t \t               \tapotome\t       \t       " + NEWLINE +
            "       n\t/\td\t     \t  2    \t  3    \t  5    \t \tcents          \tslope  \tAAS    \tATE    ".underline + NEWLINE +
            "       5\t/\t4\t    [\t  0    \t -1    \t  1    \t⟩\t        11.200¢\t  8.200\t  8.200\t  1    " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can format it for a spreadsheet", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = computeJiPitchOutput(jiPitchAnalysis)

        const expected =
            "   --- JI pitch ---" + NEWLINE +
            "" + NEWLINE +
            "quotient\t\t\tmonzo\t\t\t\t\t\tapotome\t\t" + NEWLINE +
            "n\t/\td\t \t2\t3\t5\t \tcents\tslope\tAAS\tATE".underline + NEWLINE +
            "5\t/\t4\t[\t0\t-1\t1\t⟩\t11.200¢\t8.200\t8.200\t1" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can reorder fields", (): void => {
        jiPitchScriptGroupSettings.orderedFields = ["cents", "quotient", "monzo", "aas"] as Array<JiPitchScriptGroupField>
        jiPitchScriptGroupSettings.excludedFields = [] // This happens automatically when ordering fields

        const actual = computeJiPitchOutput(jiPitchAnalysis)

        const expected =
            "   --- JI pitch ---" + NEWLINE +
            "" + NEWLINE +
            "               \tquotient\t \t \tmonzo\t       \t       \t       \t \t       " + NEWLINE +
            "cents          \t       n\t/\td\t     \t  2    \t  3    \t  5    \t \tAAS    ".underline + NEWLINE +
            "        11.200¢\t       5\t/\t4\t    [\t  0    \t -1    \t  1    \t⟩\t  8.200" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
