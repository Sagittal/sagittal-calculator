require("colors")
const {BOUNDS} = require("./data/bounds")
const {computeHistories} = require("./plot/histories")
const {analyzeBound} = require("./analyze/bound")
const {HEADER_ROW} = require("./present/headerRow")
const {presentBound} = require("./present/bound")
const {presentBoundAnalysis} = require("./present/boundAnalysis")
const {presentRankAnalyses} = require("./present/rankAnalyses")
const {presentLevelAnalyses} = require("./present/levelAnalyses")
const {visualizeBounds} = require("./visual/bounds")

const args = process.argv.slice(2)

if (args.length) {
    const boundIndex = args[0]
    const bound = BOUNDS[boundIndex]

    const histories = computeHistories(bound)
    const boundAnalysis = analyzeBound(histories, bound, boundIndex)
    const presentedBound = presentBound(bound, boundIndex)

    console.log(presentBoundAnalysis(boundAnalysis, presentedBound, {boundIndex, mode: "DETAILS"}))
} else {
    console.log(HEADER_ROW)

    const visualization = []
    BOUNDS.map((bound, boundIndex) => {
        const histories = computeHistories(bound)
        const boundAnalysis = analyzeBound(histories, bound, boundIndex)
        const presentedBound = presentBound(bound, boundIndex)

        console.log(presentBoundAnalysis(boundAnalysis,  presentedBound, {boundIndex, mode: "SUMMARY"}))

        visualization.push(boundAnalysis)
    })

    console.log(presentLevelAnalyses())
    console.log(presentRankAnalyses())

    visualizeBounds(visualization)
}
