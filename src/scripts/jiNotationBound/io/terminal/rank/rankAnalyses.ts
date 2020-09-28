import { Count, IntegerDecimal, Io, join, NEWLINE, Rank, sumTexts } from "../../../../../general"
import { BoundType } from "../../../../../sagittal"
import { rankCounts } from "../../../globals"
import { RANK_ANALYSES_TITLE } from "../titles"
import { formatRankAnalysis } from "./rankAnalysis"

const formatRankAnalyses = (): Io => {
    const formattedRankAnalyses: Io[] = [] as Io[]

    const rankCountsEntries = Object.entries(
        rankCounts,
    ) as unknown[] as Array<[IntegerDecimal & Rank<BoundType>, Count<IntegerDecimal & Rank<BoundType>>]>

    rankCountsEntries.forEach((
        [rank, rankCount]: [IntegerDecimal & Rank<BoundType>, Count<IntegerDecimal & Rank<BoundType>>],
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
