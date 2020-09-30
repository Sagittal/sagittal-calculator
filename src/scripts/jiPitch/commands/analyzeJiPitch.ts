import { Id, Io, LogTarget, Maybe, Rational, saveLog } from "../../../general"
import {
    analyzeJiPitch,
    CommaAnalysis,
    computeMaybeSymbolClassId,
    JiPitchAnalysis,
    SymbolClass,
} from "../../../sagittal"
import { computeNotatingCommaAnalyses, parseJiPitch, parseNotatingCommasSettings } from "../analyzeJiPitch"
import { compute23FreeClassOutput, computeJiPitchOutput, computeNotatingCommasOutput, readJiPitchOptions } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readJiPitchOptions()

applySharedPitchCommandSetup()

const jiPitch: Rational = parseJiPitch()
const jiPitchAnalysis: JiPitchAnalysis = analyzeJiPitch(jiPitch)
const jiPitchOutput: Io = computeJiPitchOutput(jiPitchAnalysis)
saveLog(jiPitchOutput, LogTarget.FINAL)

const two3FreeClassOutput: Io = compute23FreeClassOutput(jiPitchAnalysis.two3FreeClassAnalysis)
saveLog(two3FreeClassOutput, LogTarget.FINAL)

const notatingCommasSettings = parseNotatingCommasSettings(jiPitchAnalysis)
const notatingCommaAnalyses: CommaAnalysis[] = computeNotatingCommaAnalyses(jiPitch, notatingCommasSettings)
const maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>> = notatingCommaAnalyses.map(computeMaybeSymbolClassId)
const notatingCommasOutput: Io = computeNotatingCommasOutput(notatingCommaAnalyses, maybeSymbolClassIds)
saveLog(notatingCommasOutput, LogTarget.FINAL)
