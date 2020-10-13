import { Abs, Cents, Count, Decimal, Multiplier, Rank, Scamon, Sum } from "../../../general"
import { BoundType, Ina, Tina } from "../../../sagittal"
import { BoundClassHistoryConsolidation } from "../consolidateHistories"
import { BoundClassHistoryAnalysis } from "../history"

interface JiNotationBoundClassAnalysis {
    bestRank: Decimal<{ integer: true }> & Rank<BoundType>,
    initialPosition: Scamon,
    initialPositionTinaDistance: Multiplier<Tina>,
    possibleBoundClassHistoryCount: Count<BoundClassHistoryAnalysis>,
    bestPossibleBoundClassHistoryAnalysis: BoundClassHistoryAnalysis,
    bestPossibleBoundClassHistoryTotalDistance: Sum<Abs<Cents>>,
    bestPossibleBoundClassHistoryTotalInaDistance: Sum<Multiplier<Ina>>,
    boundClassHistoryConsolidation: BoundClassHistoryConsolidation,
}

export {
    JiNotationBoundClassAnalysis,
}
