import { Id, LogTarget, Maybe, saveLog } from "../../../general"
import { analyzeJiPitch, CommaAnalysis, CommaClass, computeMaybeCommaClassId } from "../../../sagittal"
import { computeNotatingCommaAnalyses, parseJiPitch, parseNotatingCommasSettings } from "../analyzeJiPitch"
import { compute23FreeClassOutput, computeJiPitchOutput, computeNotatingCommasOutput, readJiPitchOptions } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readJiPitchOptions()

applySharedPitchCommandSetup()

const jiPitch = parseJiPitch()
const jiPitchAnalysis = analyzeJiPitch(jiPitch)
const jiPitchOutput = computeJiPitchOutput(jiPitchAnalysis)
saveLog(jiPitchOutput, LogTarget.FINAL)

const two3FreeClassOutput = compute23FreeClassOutput(jiPitchAnalysis.two3FreeClassAnalysis)
saveLog(two3FreeClassOutput, LogTarget.FINAL)

const notatingCommasSettings = parseNotatingCommasSettings(jiPitchAnalysis)
const notatingCommaAnalyses = computeNotatingCommaAnalyses(jiPitch, notatingCommasSettings)
const maybeCommaClassIds = notatingCommaAnalyses.map((commaAnalysis: CommaAnalysis): Maybe<Id<CommaClass>> => {
    return computeMaybeCommaClassId(commaAnalysis.pitch)
})
const notatingCommasOutput = computeNotatingCommasOutput(notatingCommaAnalyses, maybeCommaClassIds)
saveLog(notatingCommasOutput, LogTarget.FINAL)
