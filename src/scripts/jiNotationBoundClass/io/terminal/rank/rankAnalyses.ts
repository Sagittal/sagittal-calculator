import {Count, Decimal, Io, join, NEWLINE, Rank, sumTexts} from "@sagittal/general"
import {BoundType} from "@sagittal/system"
import {rankCounts} from "../../../globals"
import {RANK_ANALYSES_TITLE} from "../titles"
import {formatRankAnalysis} from "./rankAnalysis"

const formatRankAnalyses = (): Io => {
    const formattedRankAnalyses: Io[] = [] as Io[]

    const rankCountsEntries = Object.entries(rankCounts) as unknown[] as Array<[
            Decimal<{integer: true}> & Rank<BoundType>,
        Count<Decimal<{integer: true}> & Rank<BoundType>>
    ]>

    rankCountsEntries.forEach((
        [rank, rankCount]: [
                Decimal<{integer: true}> & Rank<BoundType>,
            Count<Decimal<{integer: true}> & Rank<BoundType>>
        ],
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
