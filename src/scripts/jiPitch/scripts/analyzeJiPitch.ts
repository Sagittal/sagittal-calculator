import {LogTarget, Maybe, saveLog} from "../../../general"
import {analyzeJiPitch, CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "../../../sagittal"
import {findNotatingCommaAnalyses} from "../analyzeJiPitch"
import {computeFindNotatingCommasOptions} from "../findCommas"
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

const findNotatingCommasOptions = computeFindNotatingCommasOptions(jiPitchAnalysis)
const notatingCommaAnalyses = findNotatingCommaAnalyses(jiPitch, findNotatingCommasOptions)
const maybeCommaClassIds = notatingCommaAnalyses.map((commaAnalysis: CommaAnalysis): Maybe<CommaClassId> => {
    return computeMaybeCommaClassId(commaAnalysis.pitch)
})
const notatingCommasOutput = computeNotatingCommasOutput(notatingCommaAnalyses, maybeCommaClassIds)
saveLog(notatingCommasOutput, LogTarget.FINAL)
