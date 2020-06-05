const {formatPosition} = require("./formatPosition")
const {formatSymbol} = require("./formatSymbol")

const HEADER_ROW = [
    "index",
    "   symbol",
    "bound ¢",
    "bst rnk",
    "min err",
].join("\t")

const formatAnalyzedAndStructuredHistories = (analyzedAndStructuredHistories, {datumIndex, summary = false} = {}) => {
    let formattedAnalyzedAndStructuredHistories
    if (summary) {
        const {
            bound: {
                extremeLevelLesserNeighborCommaSymbol,
                position,
            },
            analysis: {
                bestRank,
                minimumError,
            },
        } = analyzedAndStructuredHistories
        formattedAnalyzedAndStructuredHistories = [
            datumIndex,
            formatSymbol(extremeLevelLesserNeighborCommaSymbol),
            formatPosition(position),
            bestRank,
            typeof minimumError === "undefined" ? "n/a" : formatPosition(minimumError),
        ].join("\t")
    } else {
        formattedAnalyzedAndStructuredHistories = JSON.stringify(analyzedAndStructuredHistories, null, 4)
            .replace(/\\\\/g, "\\")
    }

    return formattedAnalyzedAndStructuredHistories
}

module.exports = {
    HEADER_ROW,
    formatAnalyzedAndStructuredHistories,
}
