import { Integer, Name, Pitch, Rank } from "../../../general"
import { Level } from "../../../sagittal"
import { AnalyzedEvent, AnalyzedHistory } from "../analyzedHistory"
import { HistoricalEvent } from "../histories"

interface ConsolidatedEvent extends HistoricalEvent {
    exact: boolean,
    isBestPossibleHistoryMember: boolean,
    isPossibleHistoryMember: boolean,
    nextEvents: Name<Pitch>[],
    rankOfBestRankedEventInAnyMemberHistory: Integer & Rank<AnalyzedEvent>,
    rankOfBestRankedMemberHistory: Integer & Rank<AnalyzedEvent>,
}

type ConsolidatedHistories = Partial<Record<Level, ConsolidatedEvent[]>>

interface UpdateConsolidatedEventOptions {
    analyzedEvent: AnalyzedEvent
    analyzedHistory: AnalyzedHistory,
    bestPossibleHistory: AnalyzedHistory,
    nextAnalyzedEvent?: AnalyzedEvent,
}

export {
    ConsolidatedEvent,
    ConsolidatedHistories,
    UpdateConsolidatedEventOptions,
}
