import { Cents, Count, Id, Integer, Maybe, Name, Pitch, Proportion, Rank, Sum } from "../../general"
import { Bound, JiSymbol, Level, Tina } from "../../sagittal"

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
    rank: Rank<AnalyzedEvent, Integer>,
}

interface ConsolidatedEvent extends HistoricalEvent {
    exact: boolean,
    isBestPossibleHistoryMember: boolean,
    isPossibleHistoryMember: boolean,
    nextEvents: Name<Pitch>[],
    rankOfBestRankedEventInAnyMemberHistory: Rank<AnalyzedEvent, Integer>,
    rankOfBestRankedMemberHistory: Rank<AnalyzedEvent, Integer>,
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
    rank: Rank<AnalyzedEvent, Integer>,
    score: Score,
    tinaError: Proportion<Tina>,
}

type ConsolidatedHistories = Partial<Record<Level, ConsolidatedEvent[]>>

interface UpdateConsolidatedEventOptions {
    analyzedEvent: AnalyzedEvent
    analyzedHistory: AnalyzedHistory,
    bestPossibleHistory: AnalyzedHistory,
    nextAnalyzedEvent?: AnalyzedEvent,
}

interface AnalyzedBound {
    bestPossibleHistory: AnalyzedHistory,
    bestPossibleHistoryDistance: Cents,
    bestPossibleHistoryInaDistance: Sum<Proportion>,
    bestRank: Rank<AnalyzedEvent, Integer>,
    consolidatedHistories: ConsolidatedHistories,
    initialPosition: Cents,
    initialPositionTinaDifference: Proportion<Tina>,
    possibleHistoryCount: Count<AnalyzedHistory>,
}

type NeighborPositions = [Maybe<Cents>, Maybe<Cents>]
type BoundedSymbolPositions = NeighborPositions

type BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel =
    { id: Id<Bound> }
    & Partial<Record<Level, BoundedSymbolIdWithDistancesPair>>

interface BoundedSymbolIdWithDistances {
    id: Id<JiSymbol>,
    distance: Cents,
    inaDistance: Proportion,
}

type BoundedSymbolIdWithDistancesPair = [Maybe<BoundedSymbolIdWithDistances>, Maybe<BoundedSymbolIdWithDistances>]

export {
    History,
    AnalyzedHistory,
    Score,
    HistoricalEvent,
    AnalyzedBound,
    ConsolidatedHistories,
    AnalyzedEvent,
    EventType,
    UpdateConsolidatedEventOptions,
    ConsolidatedEvent,
    NeighborPositions,
    BoundedSymbolPositions,
    BoundedSymbolIdWithDistancesPair,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
}
