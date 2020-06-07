require("colors")
const {BOUNDS} = require("./data/bounds")
const {calculateBoundHistories} = require("./calculateHistories/calculateBoundHistories")
const {analyzeAndStructureHistories} = require("./analyzeHistories/analyzeAndStructureHistories")
const {HEADER_ROW} = require("./format/headerRow")
const {formatAnalyzedAndStructuredHistories} = require("./format/formatAnalyzedAndStructuredHistories")
const {formatRankSummaries} = require("./format/formatRankSummaries")
const {formatLevelSummaries} = require("./format/formatLevelSummaries")

const args = process.argv.slice(2)

if (args.length) {
    const boundIndex = args[0]
    const bound = BOUNDS[boundIndex]

    const histories = calculateBoundHistories(bound)
    const analyzedAndStructuredHistories = analyzeAndStructureHistories(histories, bound, boundIndex)

    console.log(formatAnalyzedAndStructuredHistories(analyzedAndStructuredHistories, {boundIndex, mode: "DETAILS"}))
} else {
    console.log(HEADER_ROW)

    BOUNDS.map((bound, boundIndex) => {
        const histories = calculateBoundHistories(bound)
        const analyzedAndStructuredHistories = analyzeAndStructureHistories(histories, bound, boundIndex)

        console.log(formatAnalyzedAndStructuredHistories(analyzedAndStructuredHistories, {boundIndex, mode: "SUMMARY"}))
    })

    console.log(formatLevelSummaries())
    console.log(formatRankSummaries())
}
