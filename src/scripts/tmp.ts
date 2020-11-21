// tslint:disable no-reaching-imports

import {jiPitchAnalysisFixture, two3FreeClassAnalysisFixture} from "../../spec/helpers/src/scripts/jiPitch/fixtures"
import {
    Abs,
    Cents,
    Decimal,
    Exponent,
    Filename,
    Monzo,
    NEWLINE, Prime,
    Quotient,
    readLines,
    setupScriptAndIo,
} from "../general"
import {JiPitchAnalysis} from "../sagittal/ji/analyze"
import {ApotomeSlope} from "../sagittal/ji/badness/complexity/uselessness"
import {jiPitchScriptGroupSettings} from "./jiPitch/globals"
import {computeJiPitchOutput} from "./jiPitch/io/output"
import {JiPitchScriptGroupField} from "./jiPitch/types"
import {ScriptGroup} from "./types"

setupScriptAndIo(ScriptGroup.TMP as Filename)

// This is a great place to paste stuff you need to run without Jasmine swallowing the stacktrace!
// Just paste whatever you need here and run `npm run tmp`.

const tmp = JSON.parse(readLines("src/scripts/tmp.txt" as Filename).join(NEWLINE))

jiPitchScriptGroupSettings.orderedFields = ["cents", "quotient", "monzo", "aas"] as Array<JiPitchScriptGroupField>

const jiPitchAnalysis: JiPitchAnalysis = {
    ...jiPitchAnalysisFixture,
    cents: 11.2 as Cents,
    monzo: [0, -1, 1] as Monzo<{rational: true}>,
    quotient: [5, 4] as Quotient<{rational: true}>,
    apotomeSlope: 8.2 as ApotomeSlope,
    aas: 8.2 as Abs<ApotomeSlope>,
    ate: 1 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
}
const actual = computeJiPitchOutput(jiPitchAnalysis)
