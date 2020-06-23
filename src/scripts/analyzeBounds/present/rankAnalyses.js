const {rankCounts} = require("../ranks")
const {presentRankAnalysis} = require("./rankAnalysis")

const presentRankAnalyses = () => {
    const presentedRankAnalyses = []

    rankCounts.forEach((rankCount, rankIndex) => {
        if (!rankCount || rankCount === 0) return

        presentedRankAnalyses.push(presentRankAnalysis(rankCount, rankIndex))
    })

    return "\n\n   ---   Rank Analyses   ---   \n\n\n" + presentedRankAnalyses.join("\n\n")
}

module.exports = {
    presentRankAnalyses,
}
