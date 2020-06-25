const {LEVELS} = require("../../../notations/ji/levels")
const {levelsBestHistoryRanks, levelsBestCumulativeHistoryRanks} = require("../levels")
const {presentLevelAnalysis} = require("./levelAnalysis")

const presentLevelAnalyses = () => {
    const presentedLevelAnalysis = []

    LEVELS.slice().reverse().forEach(level => {
        if (level === "INSANE") return

        const levelBestHistoryRanks = levelsBestHistoryRanks[level]
        const levelBestCumulativeHistoryRanks = levelsBestCumulativeHistoryRanks[level]

        presentedLevelAnalysis.push(presentLevelAnalysis(level, levelBestHistoryRanks, levelBestCumulativeHistoryRanks))
    })

    return "\n\n   ---   Level Analyses   ---   \n\n\n" + presentedLevelAnalysis.join("\n\n")
}

module.exports = {
    presentLevelAnalyses,
}
