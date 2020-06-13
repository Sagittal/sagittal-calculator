const {LEVELS} = require("../data/levels")
const {levelsBestHistoryRanks} = require("../analyze/levels")
const {presentLevelAnalysis} = require("./levelAnalysis")

const presentLevelAnalyses = () => {
    const presentedLevelAnalysis = []

    LEVELS.slice().reverse().forEach(level => {
        if (level === "INSANE") return
        const levelBestHistoryRanks = levelsBestHistoryRanks[level]
        presentedLevelAnalysis.push(presentLevelAnalysis(level, levelBestHistoryRanks))
    })

    return "\n\n   ---   Level Analyses   ---   \n\n\n" + presentedLevelAnalysis.join("\n\n")
}

module.exports = {
    presentLevelAnalyses,
}
