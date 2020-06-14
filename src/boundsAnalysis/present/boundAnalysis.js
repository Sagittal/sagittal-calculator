const {COLORS} = require("./colors")
const {presentNumber} = require("./number")
const {presentSymbolAscii} = require("./symbolAscii")
const {alignFormattedNumber} = require("./alignFormattedNumber")
const {presentMina} = require("./mina")
const {extractLevelRanks} = require("./levelRanks")
const {extractLevelDistances} = require("./levelDistances")
const {extractBoundIdentifiers} = require("./bound")

const presentBoundAnalysis = (boundAnalysis, {bound, boundIndex, mode = "DETAILS"} = {}) => {
    let presentedBoundAnalysis
    const boundIdentifiers = extractBoundIdentifiers(bound, boundIndex)

    if (mode === "SUMMARY") {
        const {
            extremeLevelLesserBoundedCommaSymbol,
            extremeLevelGreaterBoundedCommaSymbol,
            position,
            lesserBoundedMina,
            greaterBoundedMina,
        } = boundIdentifiers
        const {
            bestRank,
            bestPossibleHistory,
            initialPosition,
            initialPositionTinaDifference,
            bestPossibleHistoryDistance,
        } = boundAnalysis

        const [
            mediumLevelRank,
            highLevelRank,
            veryHighLevelRank,
            extremeLevelRank,
        ] = extractLevelRanks(bestPossibleHistory)

        const [
            bestPossibleHistoryMediumDistance,
            bestPossibleHistoryHighDistance,
            bestPossibleHistoryUltraDistance,
            bestPossibleHistoryExtremeDistance,
        ] = extractLevelDistances(bestPossibleHistory)

        const color = COLORS[bestRank]
        presentedBoundAnalysis = [
            boundIndex,
            presentMina(lesserBoundedMina),
            presentMina(greaterBoundedMina),
            presentSymbolAscii(extremeLevelLesserBoundedCommaSymbol),
            presentSymbolAscii(extremeLevelGreaterBoundedCommaSymbol),
            mediumLevelRank,
            highLevelRank,
            veryHighLevelRank,
            extremeLevelRank,
            bestRank,
            bestPossibleHistoryMediumDistance,
            bestPossibleHistoryHighDistance,
            bestPossibleHistoryUltraDistance,
            bestPossibleHistoryExtremeDistance,
            alignFormattedNumber(presentNumber(bestPossibleHistoryDistance)),
            alignFormattedNumber(presentNumber(position)),
            alignFormattedNumber(presentNumber(initialPosition)),
            alignFormattedNumber(presentNumber(initialPositionTinaDifference)),
        ].join("\t")[color]
    } else if (mode === "DETAILS") {
        presentedBoundAnalysis =
            JSON.stringify(boundIdentifiers, null, 4)
                .replace(/\\\\/g, "\\") +
            "\n" +
            JSON.stringify(boundAnalysis, null, 4)
                .replace(/\\\\/g, "\\")
    }

    return presentedBoundAnalysis
}

module.exports = {
    presentBoundAnalysis,
}
