import { Count, Io, join, NEWLINE, Rank, sumTexts } from "../../../../../general"
import { rankCounts } from "../../../bound"
import { EventAnalysis } from "../../../history"
import { RANK_ANALYSES_TITLE } from "../titles"
import { formatRankAnalysis } from "./rankAnalysis"

const formatRankAnalyses = (): Io => {
    const formattedRankAnalyses: Io[] = [] as Io[]

    rankCounts.forEach((rankCount: Count<Rank<EventAnalysis>>, rankIndex: number): void => {
        if (!rankCount || rankCount === 0) {
            return
        }

        formattedRankAnalyses.push(formatRankAnalysis(rankCount, rankIndex))
    })

    return sumTexts(RANK_ANALYSES_TITLE, join(formattedRankAnalyses, sumTexts(NEWLINE, NEWLINE)))
}

export {
    formatRankAnalyses,
}
