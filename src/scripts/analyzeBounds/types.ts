import { Cents, Proportion } from "../../utilities/types"
import { Level } from "../../notations/ji/types"
import { Monzo } from "../../utilities/comma/types"

enum EventType {
    INA = "INA",
    MEAN = "MEAN",
    SIZE = "SIZE",
}

type EventRank = number & { _RankBrand: "EventRank" }
type Score = number & { _ScoreBrand: "Score" }

type EventName = string & { _EventNameBrand: "EventName"}

interface SnappablePosition {
    position: Cents,
    name: EventName,
    monzo: Monzo,
}

interface HistoricalEvent {
    position: Cents,
    type: EventType,
    level: Level,
    name: EventName,
}

interface AnalyzedEvent extends HistoricalEvent {
    distance: Cents,
    inaDistance: Proportion,
    rank: EventRank,
    exact: boolean,
}

interface ConsolidatedEvent extends HistoricalEvent {
    isPossibleHistoryMember: boolean,
    isBestPossibleHistoryMember: boolean,
    rankOfBestRankedMemberHistory: EventRank,
    rankOfBestRankedEventInAnyMemberHistory: EventRank,
    nextEvents: EventName[],
    exact: boolean,
}

type History = HistoricalEvent[]

interface AnalyzedHistory {
    events: AnalyzedEvent[],
    position: Cents,
    rank: EventRank,
    score: Score,
    distance: Cents,
    inaDistance: Proportion,
    exact: boolean,
    possible: boolean,
    tinaError: number,
    initialPositionTinaDifference: number,
}

type ConsolidatedHistories = { [key in Level]?: ConsolidatedEvent[] }

interface UpdateConsolidatedEventParameters {
    analyzedEvent: AnalyzedEvent
    nextAnalyzedEvent: AnalyzedEvent,
    analyzedHistory: AnalyzedHistory,
    bestPossibleHistory: AnalyzedHistory,
}

interface AnalyzedBound {
    initialPosition: Cents,
    possibleHistoryCount: number,
    bestPossibleHistory: AnalyzedHistory,
    bestRank: EventRank,
    bestPossibleHistoryDistance: Cents,
    bestPossibleHistoryInaDistance: number,
    initialPositionTinaDifference: number,
    consolidatedHistories: ConsolidatedHistories,
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
    EventName,
    UpdateConsolidatedEventParameters,
    ConsolidatedEvent,
    SnappablePosition,
}
