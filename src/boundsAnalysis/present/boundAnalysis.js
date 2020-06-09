const {COLORS} = require("./colors")
const {presentNumber} = require("./number")
const {presentSymbol} = require("./symbol")
const {alignFormattedNumber} = require("./alignFormattedNumber")
const {presentMina} = require("./mina")
const {extractLevelRanks} = require("./extractLevelRanks")

const presentBoundAnalysis = (boundAnalysis, presentedBound, {boundIndex, mode = "DETAILS"} = {}) => {
    let presentedBoundAnalysis
    if (mode === "SUMMARY") {
        const {
            extremeLevelLesserBoundedCommaSymbol,
            extremeLevelGreaterBoundedCommaSymbol,
            position,
            lesserBoundedMina,
            greaterBoundedMina,
        } = presentedBound
        const {
            bestRank,
            bestPossibleHistory,
            initialPosition,
            initialPositionTinaDifference,
        } = boundAnalysis

        const [
            mediumLevelRank,
            highLevelRank,
            veryHighLevelRank,
            extremeLevelRank,
            insaneLevelRank,
        ] = extractLevelRanks(bestPossibleHistory)

        const color = COLORS[bestRank]
        presentedBoundAnalysis = [
            boundIndex,
            presentMina(lesserBoundedMina),
            presentMina(greaterBoundedMina),
            presentSymbol(extremeLevelLesserBoundedCommaSymbol),
            presentSymbol(extremeLevelGreaterBoundedCommaSymbol),
            mediumLevelRank,
            highLevelRank,
            veryHighLevelRank,
            extremeLevelRank,
            insaneLevelRank,
            bestRank,
            alignFormattedNumber(presentNumber(position)),
            alignFormattedNumber(presentNumber(initialPosition)),
            alignFormattedNumber(presentNumber(initialPositionTinaDifference)),
        ].join("\t")[color]
    } else if (mode === "DETAILS") {
        presentedBoundAnalysis =
            JSON.stringify(presentedBound, null, 4)
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
