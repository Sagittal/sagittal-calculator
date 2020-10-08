import { Id, LogTarget, Maybe, saveLog } from "../../../general"
import { analyzeJiPitch, CommaAnalysis, computeMaybeSymbolClassId, SymbolClass } from "../../../sagittal"
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
const maybeSymbolClassIds = notatingCommaAnalyses.map((commaAnalysis: CommaAnalysis): Maybe<Id<SymbolClass>> => {
    return computeMaybeSymbolClassId(commaAnalysis.pitch)
})
const notatingCommasOutput = computeNotatingCommasOutput(notatingCommaAnalyses, maybeSymbolClassIds)
saveLog(notatingCommasOutput, LogTarget.FINAL)
