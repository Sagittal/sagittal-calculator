import { Cents, Count, Name, Position, Proportion, Rank, Sum } from "../../general"
import { Level, Tina } from "../../notations"

enum EventType {
    INA = "ina",
    MEAN = "mean",
    SIZE = "size",
}

type Score = number & { _ScoreBrand: "Score" }

interface HistoricalEvent {
    level: Level,
    name: Name<Position>,
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
    nextEvents: Name<Position>[],
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
