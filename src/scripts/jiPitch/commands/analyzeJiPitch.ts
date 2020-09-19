import { Id, Io, JiPitch, LogTarget, Maybe, saveLog } from "../../../general"
import {
    analyzeJiPitch,
    CommaAnalysis,
    computeMaybeSymbolClassId,
    JiPitchAnalysis,
    SymbolClass,
} from "../../../sagittal"
import {
    accommodateFindCommasSettingsToJiPitch,
    computeNotatingCommaAnalyses,
    parseJiPitch,
} from "../analyzeJiPitch"
import { parseFindCommasSettings } from "../findCommas"
import { compute23FreeClassOutput, computeJiPitchOutput, computeNotatingCommasOutput, readJiPitchOptions } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readJiPitchOptions()

applySharedPitchCommandSetup()

const jiPitch: JiPitch = parseJiPitch()
const jiPitchAnalysis: JiPitchAnalysis = analyzeJiPitch(jiPitch)
const jiPitchOutput: Io = computeJiPitchOutput(jiPitchAnalysis)
saveLog(jiPitchOutput, LogTarget.ALL)

const twoThreeFreeClassOutput: Io = compute23FreeClassOutput(jiPitchAnalysis.twoThreeFreeClassAnalysis)
saveLog(twoThreeFreeClassOutput, LogTarget.ALL)

// TODO: this is definitely moving along the right track, but I'm sure you can continue to improve this
//  I would not like to see parsing of find commas options here at the top-level of the analyze-ji-pitch script
//  perhaps you can just embed that inside of accommodateFindCommasSettingsToJiPitch method
//  (and when you look into this, also glance at what the other two commands are doing)

const findCommasSettings = parseFindCommasSettings()
const accommodatedFindCommasOptions = accommodateFindCommasSettingsToJiPitch(jiPitchAnalysis, findCommasSettings)
const notatingCommaAnalyses: CommaAnalysis[] =
    computeNotatingCommaAnalyses(
        jiPitch,
        accommodatedFindCommasOptions,
    )
const maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>> = notatingCommaAnalyses.map(computeMaybeSymbolClassId)
const notatingCommasOutput: Io = computeNotatingCommasOutput(notatingCommaAnalyses, maybeSymbolClassIds)
saveLog(notatingCommasOutput, LogTarget.ALL)
