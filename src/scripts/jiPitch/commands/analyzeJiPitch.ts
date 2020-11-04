import {LogTarget, Maybe, saveLog} from "../../../general"
import {analyzeJiPitch, CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "../../../sagittal"
import {computeNotatingCommaAnalyses} from "../analyzeJiPitch"
import {
    compute23FreeClassOutput,
    computeJiPitchOutput,
    computeNotatingCommasOutput,
    parseJiPitch,
    parseNotatingCommasSettings,
    readAnalyzeJiPitchOptions,
} from "../io"
import {applySharedJiPitchCommandSetup} from "./shared"

readAnalyzeJiPitchOptions()

applySharedJiPitchCommandSetup()

const jiPitch = parseJiPitch()
const jiPitchAnalysis = analyzeJiPitch(jiPitch)
const jiPitchOutput = computeJiPitchOutput(jiPitchAnalysis)
saveLog(jiPitchOutput, LogTarget.FINAL)

const two3FreeClassOutput = compute23FreeClassOutput(jiPitchAnalysis.two3FreeClassAnalysis)
saveLog(two3FreeClassOutput, LogTarget.FINAL)

const notatingCommasSettings = parseNotatingCommasSettings(jiPitchAnalysis)
const notatingCommaAnalyses = computeNotatingCommaAnalyses(jiPitch, notatingCommasSettings)
const maybeCommaClassIds = notatingCommaAnalyses.map((commaAnalysis: CommaAnalysis): Maybe<CommaClassId> => {
    return computeMaybeCommaClassId(commaAnalysis.pitch)
})
const notatingCommasOutput = computeNotatingCommasOutput(notatingCommaAnalyses, maybeCommaClassIds)
saveLog(notatingCommasOutput, LogTarget.FINAL)
