import { Abs, Cents, Count, Decimal, Multiplier, Rank, Scamon, Sum } from "../../../general"
import { BoundType, Ina, Tina } from "../../../sagittal"
import { BoundHistoryConsolidation } from "../consolidateHistories"
import { BoundHistoryAnalysis } from "../history"

interface JiNotationBoundAnalysis {
    bestRank: Decimal<{ integer: true }> & Rank<BoundType>,
    initialPosition: Scamon,
    initialPositionTinaDistance: Multiplier<Tina>,
    possibleBoundHistoryCount: Count<BoundHistoryAnalysis>,
    bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis,
    bestPossibleBoundHistoryTotalDistance: Sum<Abs<Cents>>,
    bestPossibleBoundHistoryTotalInaDistance: Sum<Multiplier<Ina>>,
    boundHistoryConsolidation: BoundHistoryConsolidation,
}

export {
    JiNotationBoundAnalysis,
}
