import { Cents, Count, Integer, Proportion, Rank, Sum } from "../../../general"
import { Tina } from "../../../sagittal"
import { AnalyzedEvent, AnalyzedHistory } from "../analyzedHistory"
import { ConsolidatedHistories } from "../consolidatedHistories"

interface AnalyzedBound {
    bestPossibleHistory: AnalyzedHistory,
    bestPossibleHistoryDistance: Cents,
    bestPossibleHistoryInaDistance: Sum<Proportion>,
    bestRank: Rank<AnalyzedEvent, Integer>,
    consolidatedHistories: ConsolidatedHistories,
    initialPosition: Cents,
    initialPositionTinaDifference: Proportion<Tina>,
    possibleHistoryCount: Count<AnalyzedHistory>,
}

export {
    AnalyzedBound,
}
