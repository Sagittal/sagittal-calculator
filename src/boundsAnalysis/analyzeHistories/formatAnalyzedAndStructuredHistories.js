const HEADER_ROW = [
    "index",
    "symbol",
    "bound ¢",
    "bst rnk",
    "min err",
    "ttl hst", // TODO: not sure this and the next one are really that interesting
    "psbl hst",
].join("\t")

const formatAnalyzedAndStructuredHistories = (analyzedAndStructuredHistories, {datumIndex, summary = false} = {}) => {
    let formattedAnalyzedAndStructuredHistories
    if (summary) {
        const {
            bound: {
                extremeLevelLesserNeighborCommaSymbol,
                position,
            },
            analysis: { // TODO: now need to include rank
                bestRank,
                minimumError,
                totalHistories,
                possibleHistories,
            },
        } = analyzedAndStructuredHistories
        formattedAnalyzedAndStructuredHistories = [
            datumIndex,
            extremeLevelLesserNeighborCommaSymbol,
            position.toPrecision(5),
            bestRank,
            typeof minimumError === "undefined" ? "n/a" : minimumError.toPrecision(5),
            totalHistories,
            possibleHistories,
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
