import { Integer, Name, Pitch, Rank } from "../../../general"
import { Level } from "../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../analyzeHistory"
import { HistoricalEvent } from "../histories"

interface EventConsolidation extends HistoricalEvent {
    exact: boolean,
    isBestPossibleHistoryMember: boolean,
    isPossibleHistoryMember: boolean,
    nextEvents: Name<Pitch>[],
    rankOfBestRankedEventInAnyMemberHistory: Integer & Rank<EventAnalysis>,
    rankOfBestRankedMemberHistory: Integer & Rank<EventAnalysis>,
}

type HistoryConsolidation = Partial<Record<Level, EventConsolidation[]>>

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
