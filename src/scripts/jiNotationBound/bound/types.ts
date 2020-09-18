import { Cents, Count, Integer, Multiplier, Rank, Sum } from "../../../general"
import { Ina, Tina } from "../../../sagittal"
import { HistoryConsolidation } from "../consolidateHistories"
import { EventType } from "../histories"
import { HistoryAnalysis } from "../history"

interface JiNotationBoundAnalysis {
    bestPossibleHistory: HistoryAnalysis,
    bestPossibleHistoryTotalDistance: Cents,
    bestPossibleHistoryTotalInaDistance: Sum<Multiplier<Ina>>,
    bestRank: Integer & Rank<EventType>,
    historyConsolidation: HistoryConsolidation,
    initialPosition: Cents,
    initialPositionTinaDistance: Multiplier<Tina>,
    possibleHistoryCount: Count<HistoryAnalysis>,
}

export {
    JiNotationBoundAnalysis,
}
