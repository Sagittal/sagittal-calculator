const {COLORS} = require("./colors")
const {formatNumber} = require("./formatNumber")
const {alignSymbol} = require("./alignSymbol")
const {alignFormattedNumber} = require("./alignFormattedNumber")
const {formatMina} = require("./formatMina")
const {extractLevelRanks} = require("./extractLevelRanks")

const formatAnalyzedAndStructuredHistories = (analyzedAndStructuredHistories, {boundIndex, mode = "DETAILS"} = {}) => {
    let formattedAnalyzedAndStructuredHistories
    if (mode === "SUMMARY") {
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
                bestPossibleHistory,
                initialPosition,
                initialPositionTinaDifference,
            },
        } = analyzedAndStructuredHistories

        const [
            mediumLevelRank,
            highLevelRank,
            veryHighLevelRank,
            extremeLevelRank,
            insaneLevelRank,
        ] = extractLevelRanks(bestPossibleHistory)

        const color = COLORS[bestRank]
        formattedAnalyzedAndStructuredHistories = [
            boundIndex,
            formatMina(lesserBoundedMina),
            formatMina(greaterBoundedMina),
            alignSymbol(extremeLevelLesserBoundedCommaSymbol),
            alignSymbol(extremeLevelGreaterBoundedCommaSymbol),
            mediumLevelRank,
            highLevelRank,
            veryHighLevelRank,
            extremeLevelRank,
            insaneLevelRank,
            bestRank,
            alignFormattedNumber(formatNumber(position)),
            alignFormattedNumber(formatNumber(initialPosition)),
            alignFormattedNumber(formatNumber(initialPositionTinaDifference)),
        ].join("\t")[color]
    } else if (mode === "DETAILS") {
        formattedAnalyzedAndStructuredHistories = JSON.stringify(analyzedAndStructuredHistories, null, 4)
            .replace(/\\\\/g, "\\")
    }

    return formattedAnalyzedAndStructuredHistories
}

module.exports = {
    formatAnalyzedAndStructuredHistories,
}
