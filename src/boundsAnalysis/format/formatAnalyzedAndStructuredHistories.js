const colors = require("colors")
const {COLORS} = require("./colors")
const {formatNumber} = require("./formatNumber")
const {alignSymbol} = require("./alignSymbol")
const {alignFormattedNumber} = require("./alignFormattedNumber")
const {formatMina} = require("./formatMina")

const HEADER_ROWS = [
    [
        "      ",
        "      ",
        "      ",
        "      ",
        "     ",
        "   ",
        "  ",
        "initial",
        "a.b. vs",
    ].join("\t"),
    [
        "      ",
        "      ",
        "      ",
        "   lesser",
        "   greater",
        "best",
        " actual",
        "  comma",
        " i.c.m.",
    ].join("\t"),
    [
        "bound",
        "lesser",
        "greater",
        "   extreme",
        "   extreme",
        "history",
        "  bound",
        "   mean",
        "  error",
    ].join("\t"),
    [
        "index",
        "mina",
        "mina",
        "   symbol",
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

const formatAnalyzedAndStructuredHistories = (analyzedAndStructuredHistories, {boundIndex, summary = false} = {}) => {
    let formattedAnalyzedAndStructuredHistories
    if (summary) {
        const {
            bound: {
                extremeLevelLesserBoundedCommaSymbol,
                extremeLevelGreaterBoundedCommaSymbol,
                position,
                lesserBoundedMina,
                greaterBoundedMina,
            },
            analysis: {
                bestRank,
                initialPosition,
                initialPositionTinaDifference,
            },
        } = analyzedAndStructuredHistories
        const color = COLORS[bestRank]
        formattedAnalyzedAndStructuredHistories = colors[color]([
            boundIndex,
            formatMina(lesserBoundedMina),
            formatMina(greaterBoundedMina),
            alignSymbol(extremeLevelLesserBoundedCommaSymbol),
            alignSymbol(extremeLevelGreaterBoundedCommaSymbol),
            bestRank,
            alignFormattedNumber(formatNumber(position)),
            alignFormattedNumber(formatNumber(initialPosition)),
            alignFormattedNumber(formatNumber(initialPositionTinaDifference)),
        ].join("\t"))
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
