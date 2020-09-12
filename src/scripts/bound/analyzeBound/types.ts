import { Cents, Count, Integer, Multiplier, Rank, Sum } from "../../../general"
import { Ina, Tina } from "../../../sagittal"
import { AnalyzedEvent, AnalyzedHistory } from "../analyzedHistory"
import { ConsolidatedHistories } from "../consolidatedHistories"

interface AnalyzedBound {
    bestPossibleHistory: AnalyzedHistory,
    bestPossibleHistoryTotalDistance: Cents,
    bestPossibleHistoryTotalInaDistance: Sum<Multiplier<Ina>>,
    // TODO: I think we should make this Rank one-indexed. there's some forum post where Dave was against zero ranks.
    bestRank: Integer & Rank<AnalyzedEvent>,
    consolidatedHistories: ConsolidatedHistories,
    initialPosition: Cents,
    initialPositionTinaDistance: Multiplier<Tina>,
    possibleHistoryCount: Count<AnalyzedHistory>,
}

export {
    AnalyzedBound,
}
