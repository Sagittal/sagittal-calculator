const {presentRank} = require("./rank")
const {presentLevel} = require("./level")
const {COLORS} = require("./colors")

const presentLevelAnalysis = (level, levelsBestHistoryRanks) => {
    const presentedLevelAnalysis = [presentLevel(level)]

    Object.entries(levelsBestHistoryRanks).forEach(([rankIndex, count]) => {
        let presentedCount = count.toString()
        while (presentedCount.length < 3) {
            presentedCount = " " + presentedCount
        }

        presentedLevelAnalysis.push(`${presentedCount} ${presentRank(rankIndex)}`[COLORS[rankIndex]])
    })

    return presentedLevelAnalysis.join("\n")
}

module.exports = {
    presentLevelAnalysis,
}
