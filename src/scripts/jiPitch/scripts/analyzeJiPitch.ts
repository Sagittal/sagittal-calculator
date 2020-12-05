import {LogTarget, Maybe, saveLog} from "@sagittal/general"
import {analyzeJiPitch, CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "@sagittal/system"
import {findNotatingCommaAnalyses} from "../analyzeJiPitch"
import {DEFAULT_ANALYZE_JI_PITCH_AND_FIND_COMMAS_SORT_KEY} from "../constants"
import {computeFindNotatingCommasOptions} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
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

jiPitchScriptGroupSettings.sortBy = DEFAULT_ANALYZE_JI_PITCH_AND_FIND_COMMAS_SORT_KEY
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
