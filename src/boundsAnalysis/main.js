require("colors")
const {BOUNDS} = require("./data/bounds")
const {computeHistories} = require("./plot/histories")
const {analyzeBound} = require("./analyze/bound")
const {HEADER_ROW} = require("./present/headerRow")
const {presentBoundAnalysis} = require("./present/boundAnalysis")
const {presentRankAnalyses} = require("./present/rankAnalyses")
const {presentLevelAnalyses} = require("./present/levelAnalyses")
const {visualizeBounds} = require("./visualize/bounds")

const args = process.argv.slice(2)

let bound
let boundIndex
let testMode = false
if (args.length) {
    const arg = args[0]

    if (arg === "--test") {
        testMode = true
    } else {
        boundIndex = arg
        bound = BOUNDS[boundIndex]
    }
}

if (bound) {
    const histories = computeHistories(bound)
    const boundAnalysis = analyzeBound(histories, bound, boundIndex)

    console.log(presentBoundAnalysis(boundAnalysis, {bound, boundIndex, mode: "DETAILS"}))
} else {
    console.log(HEADER_ROW)

    const visualization = []
    BOUNDS.map((bound, boundIndex) => {
        const histories = computeHistories(bound)
        const boundAnalysis = analyzeBound(histories, bound, boundIndex)

        console.log(presentBoundAnalysis(boundAnalysis, {bound, boundIndex, mode: "SUMMARY"}))

        visualization.push(boundAnalysis)
    })

    console.log(presentLevelAnalyses())
    console.log(presentRankAnalyses())

    !testMode && visualizeBounds(visualization)
}
