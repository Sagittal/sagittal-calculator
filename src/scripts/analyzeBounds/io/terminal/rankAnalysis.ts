import { Count, IO, Rank } from "../../../../general"
import { rankBoundIndices } from "../../ranks"
import { AnalyzedEvent } from "../../types"
import { COLORS } from "./colors"
import { FORMATTED_RANK_NAMES } from "./rank"

const formatRankAnalysis = (rankCount: Count<Rank<AnalyzedEvent>>, rankIndex: number): IO =>
    `${FORMATTED_RANK_NAMES[ rankIndex ].trim()} snap event was worst-ranked snap event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundIndices[ rankIndex ].join(", ")}`[ COLORS[ rankIndex ] ] as IO

export {
    formatRankAnalysis,
}
