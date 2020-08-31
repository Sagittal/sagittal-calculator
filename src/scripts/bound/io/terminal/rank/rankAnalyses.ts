import { Io } from "../../../../../general"
import { rankCounts } from "../../../analyzeBound"
import { formatRankAnalysis } from "./rankAnalysis"

const formatRankAnalyses = (): Io => {
    const formattedRankAnalyses: Io[] = [] as Io[]

    rankCounts.forEach((rankCount, rankIndex) => {
        if (!rankCount || rankCount === 0) {
            return
        }

        formattedRankAnalyses.push(formatRankAnalysis(rankCount, rankIndex))
    })

    return "\n\n\n   ---   Rank Analyses   ---   \n\n\n" + formattedRankAnalyses.join("\n\n") as Io
}

export {
    formatRankAnalyses,
}
