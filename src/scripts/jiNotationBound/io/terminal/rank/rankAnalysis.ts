import { colorize, ColorMethod, Count, Integer, Io, Rank } from "../../../../../general"
import { BoundType } from "../../../../../sagittal"
import { rankBoundIndices } from "../../../globals"
import { RANK_COLOR_METHODS } from "../rankColors"
import { FORMATTED_RANKS } from "../rankNames"

const formatRankAnalysis = (rankCount: Count<Integer & Rank<BoundType>>, rank: number): Io => {
    const rankAnalysisIo: Io = `${FORMATTED_RANKS[ rank ].trim()} event was worst-ranked bound event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundIndices[ rank ].join(", ")}` as Io
    const color: ColorMethod = RANK_COLOR_METHODS[ rank ]

    return colorize(rankAnalysisIo, color)
}

export {
    formatRankAnalysis,
}
