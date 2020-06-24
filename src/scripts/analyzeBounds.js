require("colors")
const {BOUNDS} = require("../notations/ji/bounds")
const {computeHistories} = require("./analyzeBounds/plot/histories")
const {analyzeBound} = require("../scripts/analyzeBounds/bound")
const {BOUNDS_ANALYSIS_HEADER_ROW} = require("./analyzeBounds/present/headerRow")
const {presentBoundAnalysis} = require("./analyzeBounds/present/boundAnalysis")
const {presentRankAnalyses} = require("./analyzeBounds/present/rankAnalyses")
const {presentLevelAnalyses} = require("./analyzeBounds/present/levelAnalyses")
const {visualizeBounds} = require("./analyzeBounds/visualize/bounds")
const {updateFile} = require("./analyzeBounds/file")
const {BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE} = require("./analyzeBounds/constants")

const args = process.argv.slice(2)

let bound
let boundId
let testMode = false
if (args.length) {
    const arg = args[0]

    if (arg === "--test") {
        testMode = true
    } else {
        boundId = arg
        bound = BOUNDS.find(bound => bound.id === parseInt(boundId))
    }
}

let textOutput = ""

if (bound) {
    const histories = computeHistories(bound)
    const boundAnalysis = analyzeBound(histories, bound)

    textOutput = textOutput.concat(presentBoundAnalysis(boundAnalysis, {bound, boundId, mode: "DETAILS"}))
} else {
    textOutput = textOutput.concat(BOUNDS_ANALYSIS_HEADER_ROW)

    const boundsAnalysis = []
    BOUNDS.map((bound, boundId) => {
        const histories = computeHistories(bound)
        const boundAnalysis = analyzeBound(histories, bound, boundId)

        textOutput = textOutput.concat(presentBoundAnalysis(boundAnalysis, {bound, boundId, mode: "SUMMARY"}) + "\n")

        boundsAnalysis.push(boundAnalysis)
    })

    textOutput = textOutput.concat(presentLevelAnalyses())
    textOutput = textOutput.concat(presentRankAnalyses())

    if (!testMode) {
        updateFile(BOUNDS_ANALYSIS_TEXT_FILE, textOutput)

        const visualizationOutput = visualizeBounds(boundsAnalysis)
        updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput)
    }
}

console.log(textOutput)
