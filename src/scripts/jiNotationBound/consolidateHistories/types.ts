import { Integer, Name, Pitch, Rank } from "../../../general"
import { JiNotationLevel } from "../../../sagittal"
import { EventType, HistoricalEvent } from "../histories"
import { EventAnalysis, HistoryAnalysis } from "../history"

interface EventConsolidation extends HistoricalEvent {
    exact: boolean,
    isBestPossibleHistoryMember: boolean,
    isPossibleHistoryMember: boolean,
    nextEvents: Name<Pitch>[],
    rankOfBestRankedEventInAnyMemberHistory: Integer & Rank<EventType>,
    rankOfBestRankedMemberHistory: Integer & Rank<EventType>,
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
