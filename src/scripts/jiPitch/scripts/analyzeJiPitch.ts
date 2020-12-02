import {LogTarget, Maybe, saveLog} from "../../../general"
import {analyzeJiPitch, CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "../../../sagittal"
import {computeNotatingCommaAnalyses} from "../analyzeJiPitch"
import {computeFindNotatingCommasSettings} from "../findCommas"
import {
    compute23FreeClassOutput,
    computeJiPitchOutput,
    computeNotatingCommasOutput,
    parseJiPitch,
    readAnalyzeJiPitchOptions,
    readJiPitchIoAndFormat,
} from "../io"
import {applySharedJiPitchScriptSetup} from "./shared"

readAnalyzeJiPitchOptions()

applySharedJiPitchScriptSetup()

const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()
const jiPitch = parseJiPitch(jiPitchIo, pitchFormat)
const jiPitchAnalysis = analyzeJiPitch(jiPitch)
const jiPitchOutput = computeJiPitchOutput(jiPitchAnalysis)
saveLog(jiPitchOutput, LogTarget.FINAL)

const two3FreeClassOutput = compute23FreeClassOutput(jiPitchAnalysis.two3FreeClassAnalysis)
saveLog(two3FreeClassOutput, LogTarget.FINAL)

const findNotatingCommasSettings = computeFindNotatingCommasSettings(jiPitchAnalysis)
// TODO: should this be "findNotatingCommaAnalyses"? and "findCommaAnalyses" too?
//  And then what's the difference between Settings and Options if you update the type param name?
const notatingCommaAnalyses = computeNotatingCommaAnalyses(jiPitch, findNotatingCommasSettings)
const maybeCommaClassIds = notatingCommaAnalyses.map((commaAnalysis: CommaAnalysis): Maybe<CommaClassId> => {
    return computeMaybeCommaClassId(commaAnalysis.pitch)
})
const notatingCommasOutput = computeNotatingCommasOutput(notatingCommaAnalyses, maybeCommaClassIds)
saveLog(notatingCommasOutput, LogTarget.FINAL)
