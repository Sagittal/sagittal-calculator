import { Count, IO, Rank } from "../../../../../general"
import { rankBoundIndices } from "../../../ranks"
import { AnalyzedEvent } from "../../../types"
import { BOUND_COLORS } from "../boundColors"
import { FORMATTED_RANK_NAMES } from "../rankNames"

const formatRankAnalysis = (rankCount: Count<Rank<AnalyzedEvent>>, rankIndex: number): IO =>
    `${FORMATTED_RANK_NAMES[ rankIndex ].trim()} snap event was worst-ranked snap event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundIndices[ rankIndex ].join(", ")}`[ BOUND_COLORS[ rankIndex ] ] as IO

export {
    formatRankAnalysis,
}
