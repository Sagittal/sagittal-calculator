import { IO } from "../../../../../general"
import { rankCounts } from "../../../analyzeBound"
import { formatRankAnalysis } from "./rankAnalysis"

const formatRankAnalyses = (): IO => {
    const formattedRankAnalyses: IO[] = [] as IO[]

    rankCounts.forEach((rankCount, rankIndex) => {
        if (!rankCount || rankCount === 0) {
            return
        }

        formattedRankAnalyses.push(formatRankAnalysis(rankCount, rankIndex))
    })

    return "\n\n\n   ---   Rank Analyses   ---   \n\n\n" + formattedRankAnalyses.join("\n\n") as IO
}

export {
    formatRankAnalyses,
}
