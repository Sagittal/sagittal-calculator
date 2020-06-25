require("colors")
const {program} = require("commander")
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

program
    .option("-x, --do-not-update-files", "do not update files")
    .option("-d, --details <boundId>", "details mode on specific bound", parseInt)
    .parse(process.argv)

const shouldUpdateFiles = !program.doNotUpdateFiles
const boundId = program.details || program.args[0]

const bound = boundId &&  BOUNDS.find(bound => bound.id === parseInt(boundId))

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

    if (shouldUpdateFiles) {
        updateFile(BOUNDS_ANALYSIS_TEXT_FILE, textOutput.replace(/\[\d\dm/g, "")) // remove colors

        const visualizationOutput = visualizeBounds(boundsAnalysis)
        updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput)
    }
}

console.log(textOutput)
