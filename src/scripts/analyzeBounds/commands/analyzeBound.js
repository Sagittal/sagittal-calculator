require("colors")
const {program} = require("commander")
const {BOUNDS} = require("../../../notations/ji/bounds")
const {computeHistories} = require("../plot/histories")
const {analyzeBound} = require("../bound")
const {BOUNDS_ANALYSIS_HEADER_ROW} = require("../present/headerRow")
const {presentBoundAnalysis} = require("../present/boundAnalysis")
const {presentRankAnalyses} = require("../present/rankAnalyses")
const {presentLevelAnalyses} = require("../present/levelAnalyses")
const {visualizeBounds} = require("../visualize/bounds")
const {updateFile} = require("../file")
const {BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE} = require("../constants")

program
  .option("-b, --boundId <boundId>", "specific bound", parseInt) // todo: don't even accept it as a flag... just arg it
  .parse(process.argv)

const boundId = program.details || program.args[0]

const bound = boundId && BOUNDS.find(bound => bound.id === parseInt(boundId))

if (bound) {
  const histories = computeHistories(bound)
  const boundAnalysis = analyzeBound(histories, bound)

  console.log(presentBoundAnalysis(boundAnalysis, {bound, boundId, mode: "DETAILS"}))
} else {
  throw new Error(`Could not find bound with ID ${boundId}`)
}
