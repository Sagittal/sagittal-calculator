import { colorize, ColorMethod, Count, Integer, Io, Rank } from "../../../../../general"
import { rankBoundIndices } from "../../../globals"
import { EventType } from "../../../histories"
import { RANK_COLOR_METHODS } from "../rankColors"
import { FORMATTED_RANKS } from "../rankNames"

const formatRankAnalysis = (rankCount: Count<Integer & Rank<EventType>>, rank: number): Io => {
    const rankAnalysisText: Io = `${FORMATTED_RANKS[ rank ].trim()} snap event was worst-ranked snap event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundIndices[ rank ].join(", ")}` as Io
    const color: ColorMethod = RANK_COLOR_METHODS[ rank ]

    return colorize(rankAnalysisText, color)
}

export {
    formatRankAnalysis,
}
