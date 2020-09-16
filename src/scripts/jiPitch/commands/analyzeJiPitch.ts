import { Io, JiPitch, LogTarget, saveLog } from "../../../general"
import { analyzeJiPitch, JiPitchAnalysis } from "../../../sagittal"
import { accommodateFindCommasOptionsToJiPitch } from "../accommodateFindCommasOptionsToJiPitch"
import {
    computeExactlyNotatingCommasOutput,
    computeJiPitchOutput,
    parseFindCommasOptions,
    parseJiPitch,
    readJiPitchOptions,
} from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readJiPitchOptions()

applySharedPitchCommandSetup()

const jiPitch: JiPitch = parseJiPitch()
const jiPitchAnalysis: JiPitchAnalysis = analyzeJiPitch(jiPitch)
const jiPitchOutput: Io = computeJiPitchOutput(jiPitchAnalysis)
saveLog(jiPitchOutput, LogTarget.ALL)

// TODO: this is definitely moving along the right track, but I'm sure you can continue to improve this
//  I would not like to see parsing of find commas options here at the top-level of the analyze-ji-pitch script
//  perhaps you can just embed that inside of accommodateFindCommasOptionsToJiPitch method

const findCommasOptions = parseFindCommasOptions()
const accommodatedFindCommasOptions = accommodateFindCommasOptionsToJiPitch(jiPitchAnalysis, findCommasOptions)

const exactlyNotatingCommasOutput: Io = computeExactlyNotatingCommasOutput(jiPitch, accommodatedFindCommasOptions)
saveLog(exactlyNotatingCommasOutput, LogTarget.ALL)

// TODO: FIND COMMA ANALYZE JI PITCH NOTATING COMMAS 2,3 FREE CLEAN UP
//  okay so I guess we still didn't actually get to it, but I'd like to see this:
//  extricate the limit, 2,3-free sopfr, N2D3P9 from above and put it in a new chart at the bottom
//  --- 2,3-free class ---
//  and then it can have simpler column titles
//  and I think it'll be clearer how that shares all the stuff with the above
//  and actually include the 2,3-free class itself on it!
//  - and along with this, you should try to pull analyzeJiPitch out of sagittal/comma and into music/ji
