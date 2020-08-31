import { Cents, Count, Integer, Multiplier, Rank, Sum } from "../../../general"
import { Ina, Tina } from "../../../sagittal"
import { AnalyzedEvent, AnalyzedHistory } from "../analyzedHistory"
import { ConsolidatedHistories } from "../consolidatedHistories"

interface AnalyzedBound {
    bestPossibleHistory: AnalyzedHistory,
    bestPossibleHistoryTotalDistance: Cents,
    bestPossibleHistoryTotalInaDistance: Sum<Multiplier<Ina>>,
    bestRank: Rank<AnalyzedEvent, Integer>,
    consolidatedHistories: ConsolidatedHistories,
    initialPosition: Cents,
    initialPositionTinaDistance: Multiplier<Tina>,
    possibleHistoryCount: Count<AnalyzedHistory>,
}

export {
    AnalyzedBound,
}
