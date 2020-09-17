import { Io, JiPitch, LogTarget, saveLog } from "../../../general"
import { analyzeJiPitch, JiPitchAnalysis } from "../../../sagittal"
import { accommodateFindCommasOptionsToJiPitch } from "../accommodateFindCommasOptionsToJiPitch"
import {
    compute23FreeClassOutput,
    computeJiPitchOutput,
    computeNotatingCommasOutput,
    parseFindCommasOptions,
    parseJiPitchOptions,
    readJiPitchOptions,
} from "../io"
import { computeMaybeNotatingCommasWithMaybeSagittalSymbolClassesTable } from "../notatingCommas"
import { applySharedPitchCommandSetup } from "./shared"

readJiPitchOptions()

applySharedPitchCommandSetup()

const jiPitch: JiPitch = parseJiPitchOptions()
const jiPitchAnalysis: JiPitchAnalysis = analyzeJiPitch(jiPitch)
const jiPitchOutput: Io = computeJiPitchOutput(jiPitchAnalysis)
saveLog(jiPitchOutput, LogTarget.ALL)

const twoThreeFreeClassOutput: Io = compute23FreeClassOutput(jiPitchAnalysis)
saveLog(twoThreeFreeClassOutput, LogTarget.ALL)

// TODO: this is definitely moving along the right track, but I'm sure you can continue to improve this
//  I would not like to see parsing of find commas options here at the top-level of the analyze-ji-pitch script
//  perhaps you can just embed that inside of accommodateFindCommasOptionsToJiPitch method

const findCommasOptions = parseFindCommasOptions()
const accommodatedFindCommasOptions = accommodateFindCommasOptionsToJiPitch(jiPitchAnalysis, findCommasOptions)
const notatingCommaAnalysesWithMaybeSagittalSymbolClasses =
    computeMaybeNotatingCommasWithMaybeSagittalSymbolClassesTable(
        jiPitch,
        accommodatedFindCommasOptions,
    )
const notatingCommasOutput: Io = computeNotatingCommasOutput(notatingCommaAnalysesWithMaybeSagittalSymbolClasses)
saveLog(notatingCommasOutput, LogTarget.ALL)
