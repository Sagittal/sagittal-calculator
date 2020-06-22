require("colors")
const {BOUNDS} = require("./data/bounds")
const {computeHistories} = require("./plot/histories")
const {analyzeBound} = require("./analyze/bound")
const {BOUNDS_ANALYSIS_HEADER_ROW} = require("./present/headerRow")
const {presentBoundAnalysis} = require("./present/boundAnalysis")
const {presentRankAnalyses} = require("./present/rankAnalyses")
const {presentLevelAnalyses} = require("./present/levelAnalyses")
const {visualizeBounds} = require("./visualize/bounds")

const args = process.argv.slice(2)

// TODO: this should also use Commander.js like the tina-comma script

let bound
let boundId
let testMode = false
if (args.length) {
    const arg = args[0]

    if (arg === "--test") {
        testMode = true
    } else {
        boundId = arg
        bound = BOUNDS.find(bound => bound.id === boundId)
    }
}

if (bound) {
    const histories = computeHistories(bound)
    const boundAnalysis = analyzeBound(histories, bound)

    console.log(presentBoundAnalysis(boundAnalysis, {bound, boundId, mode: "DETAILS"}))
} else {
    console.log(BOUNDS_ANALYSIS_HEADER_ROW)

    const visualization = []
    BOUNDS.map((bound, boundId) => {
        const histories = computeHistories(bound)
        const boundAnalysis = analyzeBound(histories, bound, boundId)

        console.log(presentBoundAnalysis(boundAnalysis, {bound, boundId, mode: "SUMMARY"}))

        visualization.push(boundAnalysis)
    })

    console.log(presentLevelAnalyses())
    console.log(presentRankAnalyses())

    !testMode && visualizeBounds(visualization)
}
