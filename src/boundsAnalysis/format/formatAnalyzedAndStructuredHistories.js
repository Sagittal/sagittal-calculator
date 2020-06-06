const {formatNumber} = require("./formatNumber")
const {formatSymbol} = require("./formatSymbol")

const HEADER_ROW = [
    "index",
    "   symbol",
    "bst rnk",
    "bound ¢",
    "in ps ¢", // initial position
    "min dst", // tinas // TODO: this really needs more rows
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
                initialPosition,
                minimumInitialPositionTinaDistance,
            },
        } = analyzedAndStructuredHistories
        formattedAnalyzedAndStructuredHistories = [
            datumIndex,
            formatSymbol(extremeLevelLesserNeighborCommaSymbol),
            bestRank,
            formatNumber(position),
            formatNumber(initialPosition),
            formatNumber(minimumInitialPositionTinaDistance),
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
