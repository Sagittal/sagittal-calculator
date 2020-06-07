const {rankCounts} = require("../analyzeHistories/rankSummary")
const {formatRankSummary} = require("./formatRankSummary")

const formatRankSummaries = () => {
    const formattedRankSummaries = []

    rankCounts.forEach((rankCount, rankIndex) => {
        if (!rankCount || rankCount === 0) return

        formattedRankSummaries.push(formatRankSummary(rankCount, rankIndex))
    })

    return "\n\n   ---   Rank Summaries   ---   \n\n\n" + formattedRankSummaries.join("\n\n")
}

module.exports = {
    formatRankSummaries
}
