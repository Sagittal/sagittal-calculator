import { rankCounts } from "../../ranks"
import { formatRankAnalysis } from "./rankAnalysis"

const formatRankAnalyses = (): string => {
    const formattedRankAnalyses: string[] = []

    rankCounts.forEach((rankCount, rankIndex) => {
        if (!rankCount || rankCount === 0) {
            return
        }

        formattedRankAnalyses.push(formatRankAnalysis(rankCount, rankIndex))
    })

    return "\n\n\n   ---   Rank Analyses   ---   \n\n\n" + formattedRankAnalyses.join("\n\n")
}

export {
    formatRankAnalyses,
}
