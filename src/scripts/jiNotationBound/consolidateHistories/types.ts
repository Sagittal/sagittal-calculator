import { Integer, Name, Pitch, Rank } from "../../../general"
import { JiNotationLevel } from "../../../sagittal"
import { HistoricalEvent } from "../histories"
import { EventAnalysis, HistoryAnalysis } from "../history"

interface EventConsolidation extends HistoricalEvent {
    exact: boolean,
    isBestPossibleHistoryMember: boolean,
    isPossibleHistoryMember: boolean,
    nextEvents: Name<Pitch>[],
    rankOfBestRankedEventInAnyMemberHistory: Integer & Rank<EventAnalysis>,
    rankOfBestRankedMemberHistory: Integer & Rank<EventAnalysis>,
}

type HistoryConsolidation = Partial<Record<JiNotationLevel, EventConsolidation[]>>

interface UpdateEventConsolidationOptions {
    eventAnalysis: EventAnalysis
    historyAnalysis: HistoryAnalysis,
    bestPossibleHistory: HistoryAnalysis,
    nextEventAnalysis?: EventAnalysis,
}

export {
    EventConsolidation,
    HistoryConsolidation,
    UpdateEventConsolidationOptions,
}
