import { Cents, Count, Decimal, Multiplier, Rank, Sum } from "../../../general"
import { BoundType, Ina, Tina } from "../../../sagittal"
import { BoundHistoryConsolidation } from "../consolidateHistories"
import { BoundHistoryAnalysis } from "../history"

interface JiNotationBoundAnalysis {
    bestRank: Decimal<{ integer: true }> & Rank<BoundType>,
    initialPosition: Cents,
    initialPositionTinaDistance: Multiplier<Tina>,
    possibleBoundHistoryCount: Count<BoundHistoryAnalysis>,
    bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis,
    bestPossibleBoundHistoryTotalDistance: Cents,
    bestPossibleBoundHistoryTotalInaDistance: Sum<Multiplier<Ina>>,
    boundHistoryConsolidation: BoundHistoryConsolidation,
}

export {
    JiNotationBoundAnalysis,
}
