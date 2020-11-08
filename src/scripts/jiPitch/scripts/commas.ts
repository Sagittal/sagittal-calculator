import {Comma, Filename, Io, LogTarget, Maybe, readLines, saveLog} from "../../../general"
import {analyzeComma, CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "../../../sagittal"
import {computeCommasOutput, parsePitch} from "../io"
import {applySharedJiPitchScriptSetup} from "./shared"

applySharedJiPitchScriptSetup()

const commaIos = readLines("src/scripts/jiPitch/input/commas.txt" as Filename) as Io[]
const commas: Comma[] = commaIos.map(parsePitch) as Comma[]
const commaAnalyses: CommaAnalysis[] = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))
const maybeCommaClassIds: Array<Maybe<CommaClassId>> = commaAnalyses
    .map((commaAnalysis: CommaAnalysis): Maybe<CommaClassId> => {
        return computeMaybeCommaClassId(commaAnalysis.pitch)
    })
const commasOutput: Io = computeCommasOutput(commaAnalyses, maybeCommaClassIds)
saveLog(commasOutput, LogTarget.FINAL)
