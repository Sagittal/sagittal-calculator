import {COLORS} from "./colors"
import {FORMATTED_RANK_NAMES} from "./rank"
import {rankBoundIndices} from "../ranks"

const presentRankAnalysis = (rankCount, rankIndex) =>
    `${FORMATTED_RANK_NAMES[rankIndex].trim()} snap event was worst-ranked snap event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundIndices[rankIndex].join(", ")}`[COLORS[rankIndex]]

export {
    presentRankAnalysis,
}
