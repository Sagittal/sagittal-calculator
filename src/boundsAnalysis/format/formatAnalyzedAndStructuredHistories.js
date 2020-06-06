const {formatNumber} = require("./formatNumber")
const {alignSymbol} = require("./alignSymbol")
const {alignFormattedNumber} = require("./alignFormattedNumber")

const HEADER_ROWS = [
    [
        "      ",
        " immediately",
        "   ",
        "  ",
        "initial",
        "a.b. vs",
    ].join("\t"),
    [
        "      ",
        "   lesser",
        "best",
        " actual",
        "  comma",
        " i.c.m.",
    ].join("\t"),
    [
        "  bound",
        "   extreme",
        "history",
        "  bound",
        "   mean",
        "  error",
    ].join("\t"),
    [
        "  index",
        "   symbol",
        "rank",
        "pos (¢)",
        "pos (¢)",
        "(tinas)",
    ].join("\t"),
    [
        "   ",
        "   ",
        "   ",
        "   ",
        "   ",
        "   ",
    ].join("\t"),
].join("\n")

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
                initialPositionTinaDifference,
            },
        } = analyzedAndStructuredHistories
        formattedAnalyzedAndStructuredHistories = [
            datumIndex,
            alignSymbol(extremeLevelLesserNeighborCommaSymbol),
            bestRank,
            alignFormattedNumber(formatNumber(position)),
            alignFormattedNumber(formatNumber(initialPosition)),
            alignFormattedNumber(formatNumber(initialPositionTinaDifference)),
        ].join("\t")
    } else {
        formattedAnalyzedAndStructuredHistories = JSON.stringify(analyzedAndStructuredHistories, null, 4)
            .replace(/\\\\/g, "\\")
    }

    return formattedAnalyzedAndStructuredHistories
}

module.exports = {
    HEADER_ROWS,
    formatAnalyzedAndStructuredHistories,
}
