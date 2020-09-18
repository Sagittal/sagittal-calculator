import { Count, Integer, Io, join, NEWLINE, Rank, sumTexts } from "../../../../../general"
import { rankCounts } from "../../../globals"
import { EventType } from "../../../histories"
import { RANK_ANALYSES_TITLE } from "../titles"
import { formatRankAnalysis } from "./rankAnalysis"

const formatRankAnalyses = (): Io => {
    const formattedRankAnalyses: Io[] = [] as Io[]

    const rankCountsEntries = Object.entries(
        rankCounts,
    ) as unknown[] as Array<[Integer & Rank<EventType>, Count<Integer & Rank<EventType>>]>

    rankCountsEntries.forEach((
        [rank, rankCount]: [Integer & Rank<EventType>, Count<Integer & Rank<EventType>>],
    ): void => {
        if (!rankCount || rankCount === 0) {
            return
        }

        formattedRankAnalyses.push(formatRankAnalysis(rankCount, rank))
    })

    return sumTexts(RANK_ANALYSES_TITLE, join(formattedRankAnalyses, sumTexts(NEWLINE, NEWLINE)))
}

export {
    formatRankAnalyses,
}
