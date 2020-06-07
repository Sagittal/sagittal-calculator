const {LEVELS} = require("../data/levels")
const {levelsBestHistoryRanks} = require("../analyzeHistories/levelSummary")
const {formatLevelSummary} = require("./formatLevelSummary")

const formatLevelSummaries = () => {
    const formattedLevelSummary = []

    LEVELS.slice().reverse().forEach(level => {
        const levelBestHistoryRanks = levelsBestHistoryRanks[level]
        formattedLevelSummary.push(formatLevelSummary(level, levelBestHistoryRanks))
    })

    return "\n\n   ---   Level Summaries   ---   \n\n\n" + formattedLevelSummary.join("\n\n")
}

module.exports = {
    formatLevelSummaries,
}
