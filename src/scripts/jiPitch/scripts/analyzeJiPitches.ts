import {Filename, Io, isEmpty, LogTarget, Maybe, readLines, saveLog, Scamon} from "../../../general"
import {analyzeJiPitch, CommaClassId, computeMaybeCommaClassId, JiPitchAnalysis} from "../../../sagittal"
import {computeJiPitchesOutput, parsePitch} from "../io"
import {applySharedJiPitchScriptSetup} from "./shared"

applySharedJiPitchScriptSetup()

const jiPitchIos = readLines("src/scripts/jiPitch/input/jiPitches.txt" as Filename) as Io[]
if (isEmpty(jiPitchIos)) throw new Error("No JI pitches found in src/scripts/jiPitch/input/jiPitches.txt to analyze.")
const jiPitches: Array<Scamon<{rational: true}>> = jiPitchIos.map((jiPitchIo: Io): Scamon<{rational: true}> => {
    return parsePitch(jiPitchIo) as Scamon<{rational: true}>
})
const jiPitchAnalyses: JiPitchAnalysis[] = jiPitches.map((jiPitch: Scamon<{rational: true}>): JiPitchAnalysis => {
    return analyzeJiPitch(jiPitch)
})
const maybeCommaClassIds: Array<Maybe<CommaClassId>> = jiPitchAnalyses
    .map((commaAnalysis: JiPitchAnalysis): Maybe<CommaClassId> => {
        return computeMaybeCommaClassId(commaAnalysis.pitch)
    })
const commasOutput: Io = computeJiPitchesOutput(jiPitchAnalyses, maybeCommaClassIds)
saveLog(commasOutput, LogTarget.FINAL)
