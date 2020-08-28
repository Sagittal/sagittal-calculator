import { Cents, Count, Name, Pitch, Proportion, Rank, Sum } from "../../general"
import { Level, Tina } from "../../sagittal"

enum EventType {
    INA = "ina",
    MEAN = "mean",
    SIZE = "size",
}

type Score = number & { _ScoreBrand: "Score" }

interface HistoricalEvent {
    level: Level,
    name: Name<Pitch>,
    cents: Cents,
    type: EventType,
}

interface AnalyzedEvent extends HistoricalEvent {
    distance: Cents,
    exact: boolean,
    inaDistance: Proportion,
    rank: Rank<AnalyzedEvent>,
}

interface ConsolidatedEvent extends HistoricalEvent {
    exact: boolean,
    isBestPossibleHistoryMember: boolean,
    isPossibleHistoryMember: boolean,
    nextEvents: Name<Pitch>[],
    rankOfBestRankedEventInAnyMemberHistory: Rank<AnalyzedEvent>,
    rankOfBestRankedMemberHistory: Rank<AnalyzedEvent>,
}

type History = HistoricalEvent[]

interface AnalyzedHistory {
    distance: Cents,
    events: AnalyzedEvent[],
    exact: boolean,
    inaDistance: Sum<Proportion>,
    initialPositionTinaDifference: Proportion<Tina>,
    cents: Cents,
    possible: boolean,
    rank: Rank<AnalyzedEvent>,
    score: Score,
    tinaError: Proportion<Tina>,
}

type ConsolidatedHistories = Partial<Record<Level, ConsolidatedEvent[]>>

interface UpdateConsolidatedEventParameters {
    analyzedEvent: AnalyzedEvent
    analyzedHistory: AnalyzedHistory,
    bestPossibleHistory: AnalyzedHistory,
    nextAnalyzedEvent?: AnalyzedEvent,
}

interface AnalyzedBound {
    bestPossibleHistory: AnalyzedHistory,
    bestPossibleHistoryDistance: Cents,
    bestPossibleHistoryInaDistance: Sum<Proportion>,
    bestRank: Rank<AnalyzedEvent>,
    consolidatedHistories: ConsolidatedHistories,
    initialPosition: Cents,
    initialPositionTinaDifference: Proportion<Tina>,
    possibleHistoryCount: Count<AnalyzedHistory>,
}

export {
    History,
    AnalyzedHistory,
    Score,
    HistoricalEvent,
    AnalyzedBound,
    ConsolidatedHistories,
    AnalyzedEvent,
    EventType,
    UpdateConsolidatedEventParameters,
    ConsolidatedEvent,
}
