import { Id, Io, JiPitch, LogTarget, Maybe, saveLog } from "../../../general"
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

const jiPitch: JiPitch = parseJiPitch()
const jiPitchAnalysis: JiPitchAnalysis = analyzeJiPitch(jiPitch)
const jiPitchOutput: Io = computeJiPitchOutput(jiPitchAnalysis)
saveLog(jiPitchOutput, LogTarget.FINAL)

const twoThreeFreeClassOutput: Io = compute23FreeClassOutput(jiPitchAnalysis.twoThreeFreeClassAnalysis)
saveLog(twoThreeFreeClassOutput, LogTarget.FINAL)

const notatingCommasSettings = parseNotatingCommasSettings(jiPitchAnalysis)
const notatingCommaAnalyses: CommaAnalysis[] = computeNotatingCommaAnalyses(jiPitch, notatingCommasSettings)
const maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>> = notatingCommaAnalyses.map(computeMaybeSymbolClassId)
const notatingCommasOutput: Io = computeNotatingCommasOutput(notatingCommaAnalyses, maybeSymbolClassIds)
saveLog(notatingCommasOutput, LogTarget.FINAL)
