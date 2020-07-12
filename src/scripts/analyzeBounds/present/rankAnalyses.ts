import { rankCounts } from "../ranks"
import { presentRankAnalysis } from "./rankAnalysis"

const presentRankAnalyses = () => {
    const presentedRankAnalyses: string[] = []

    rankCounts.forEach((rankCount, rankIndex) => {
        if (!rankCount || rankCount === 0) return

        presentedRankAnalyses.push(presentRankAnalysis(rankCount, rankIndex))
    })

    return "\n\n\n   ---   Rank Analyses   ---   \n\n\n" + presentedRankAnalyses.join("\n\n")
}

export {
    presentRankAnalyses,
}
