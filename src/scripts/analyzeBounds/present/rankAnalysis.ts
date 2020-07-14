import { rankBoundIndices } from "../ranks"
import { COLORS } from "./colors"
import { FORMATTED_RANK_NAMES } from "./rank"

const presentRankAnalysis = (rankCount: number, rankIndex: number) =>
    `${FORMATTED_RANK_NAMES[ rankIndex ].trim()} snap event was worst-ranked snap event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundIndices[ rankIndex ].join(", ")}`[ COLORS[ rankIndex ] ]

export {
    presentRankAnalysis,
}
