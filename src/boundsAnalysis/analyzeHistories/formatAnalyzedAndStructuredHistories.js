const HEADER_ROW = [
    "index",
    "symbol",
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
            extremeLevelLesserNeighborCommaSymbol,
            position.toPrecision(5),
            bestRank,
            typeof minimumError === "undefined" ? "n/a" : minimumError.toPrecision(5),
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
