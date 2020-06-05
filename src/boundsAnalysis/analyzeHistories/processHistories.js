const {analyzeAndStructureHistories} = require("./analyzeAndStructureHistories")
const {formatAnalyzedAndStructuredHistories, HEADER_ROW} = require("../format/formatAnalyzedAndStructuredHistories")

const processHistories = (histories, datum, datumIndex, {summary}) => {
    const analyzedAndStructuredHistories = analyzeAndStructureHistories(histories, datum)

    return formatAnalyzedAndStructuredHistories(analyzedAndStructuredHistories, {datumIndex, summary})
}

module.exports = {
    processHistories,
    HEADER_ROW,
}
