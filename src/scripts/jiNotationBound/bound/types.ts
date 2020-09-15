import { Cents, Count, Integer, Multiplier, Rank, Sum } from "../../../general"
import { Ina, Tina } from "../../../sagittal"
import { HistoryConsolidation } from "../consolidateHistories"
import { EventAnalysis, HistoryAnalysis } from "../history"

interface JiNotationBoundAnalysis {
    bestPossibleHistory: HistoryAnalysis,
    bestPossibleHistoryTotalDistance: Cents,
    bestPossibleHistoryTotalInaDistance: Sum<Multiplier<Ina>>,
    // TODO: I think we should make this Rank one-indexed. there's some forum post where Dave was against zero ranks.
    bestRank: Integer & Rank<EventAnalysis>,
    historyConsolidation: HistoryConsolidation,
    initialPosition: Cents,
    initialPositionTinaDistance: Multiplier<Tina>,
    possibleHistoryCount: Count<HistoryAnalysis>,
}

export {
    JiNotationBoundAnalysis,
}
