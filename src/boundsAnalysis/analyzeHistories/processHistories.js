const {analyzeAndStructureHistories} = require("./analyzeAndStructureHistories")
const {formatAnalyzedAndStructuredHistories, HEADER_ROWS} = require("../format/formatAnalyzedAndStructuredHistories")

const processHistories = (histories, bound, boundIndex, {summary}) => {
    const analyzedAndStructuredHistories = analyzeAndStructureHistories(histories, bound, boundIndex)

    return formatAnalyzedAndStructuredHistories(analyzedAndStructuredHistories, {boundIndex, summary})
}

module.exports = {
    processHistories,
    HEADER_ROWS,
}
