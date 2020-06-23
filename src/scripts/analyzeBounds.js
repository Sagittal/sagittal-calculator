require("colors")
const {BOUNDS} = require("../notations/ji/bounds")
const {computeHistories} = require("./analyzeBounds/plot/histories")
const {analyzeBound} = require("../scripts/analyzeBounds/bound")
const {BOUNDS_ANALYSIS_HEADER_ROW} = require("./analyzeBounds/present/headerRow")
const {presentBoundAnalysis} = require("./analyzeBounds/present/boundAnalysis")
const {presentRankAnalyses} = require("./analyzeBounds/present/rankAnalyses")
const {presentLevelAnalyses} = require("./analyzeBounds/present/levelAnalyses")
const {visualizeBounds} = require("./analyzeBounds/visualize/bounds")

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
