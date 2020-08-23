import { Cents, Count, Name, Position, Proportion, Sum } from "../../general"
import { Level } from "../../notations"

enum EventType {
    INA = "INA",
    MEAN = "MEAN",
    SIZE = "SIZE",
}

type EventRank = number & { _EventRankBrand: "EventRank" }
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
    rank: EventRank,
}

interface ConsolidatedEvent extends HistoricalEvent {
    exact: boolean,
    isBestPossibleHistoryMember: boolean,
    isPossibleHistoryMember: boolean,
    nextEvents: Name<Position>[],
    rankOfBestRankedEventInAnyMemberHistory: EventRank,
    rankOfBestRankedMemberHistory: EventRank,
}

type History = HistoricalEvent[]

interface AnalyzedHistory {
    distance: Cents,
    events: AnalyzedEvent[],
    exact: boolean,
    inaDistance: Sum<Proportion>,
    initialPositionTinaDifference: Proportion<"Tina">,
    cents: Cents,
    possible: boolean,
    rank: EventRank,
    score: Score,
    tinaError: Proportion<"Tina">,
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
    bestRank: EventRank,
    consolidatedHistories: ConsolidatedHistories,
    initialPosition: Cents,
    initialPositionTinaDifference: Proportion<"Tina">,
    possibleHistoryCount: Count<AnalyzedHistory>,
}

export {
    History,
    AnalyzedHistory,
    Score,
    EventRank,
    HistoricalEvent,
    AnalyzedBound,
    ConsolidatedHistories,
    AnalyzedEvent,
    EventType,
    UpdateConsolidatedEventParameters,
    ConsolidatedEvent,
}
