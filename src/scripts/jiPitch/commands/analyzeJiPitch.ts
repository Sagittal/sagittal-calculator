import { program } from "commander"
import { addTexts, LogTarget, NEWLINE, saveLog } from "../../../general"
import { analyzeJiPitch } from "../../../sagittal"
import { accommodateJiPitchInSettings } from "../accommodateJiPitchInSettings"
import { computeNotatingCommasTable, formatJiPitch, formatSettings, parseJiPitch, readJiPitchOptions } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readJiPitchOptions()

applySharedPitchCommandSetup()

const jiPitch = parseJiPitch()

const jiPitchAnalysis = analyzeJiPitch(jiPitch)
saveLog(formatJiPitch(jiPitchAnalysis), LogTarget.ALL)

accommodateJiPitchInSettings(jiPitchAnalysis, { suppress: program.suppressAutomaticAdjustingOfNotatingCommaFilters })
saveLog(addTexts(NEWLINE, formatSettings(), NEWLINE), LogTarget.ALL)

const notatingCommasFormattedTable = computeNotatingCommasTable(jiPitch)
saveLog(notatingCommasFormattedTable, LogTarget.ALL)

// TODO: FIND COMMA ANALYZE JI PITCH NOTATING COMMAS 2,3 FREE CLEAN UP
//  okay so I guess we still didn't actually get to it, but I'd like to see this:
//  extricate the limit, 2,3-free sopfr, N2D3P9 from above and put it in a new chart at the bottom
//  --- 2,3-free class ---
//  and then it can have simpler column titles
//  and I think it'll be clearer how that shares all the stuff with the above
//  and actually include the 2,3-free class itself on it!
//  - and along with this, you should try to pull analyzeJiPitch out of sagittal/comma and into music/ji
