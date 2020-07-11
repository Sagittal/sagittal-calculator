import { Cents } from "../../utilities/types"
import { Level } from "../../notations/ji/types"
import { Monzo } from "../../utilities/comma/types"

enum EventType {
    INA = "INA",
    MEAN = "MEAN",
    SIZE = "SIZE",
}

interface HistoricalEvent {
    position: Cents,
    type: EventType,
    level: Level,
    name: EventName,
}

type EventRank = number & { _RankBrand: "EventRank" }
type Score = number & { _ScoreBrand: "Score" }

type EventName = string & { _EventNameBrand: "EventName"}

interface AnalyzedHistory {
    events: AnalyzedEvent[],
    position: Cents,
    rank: EventRank,
    score: Score,
    distance: Cents,
    inaDistance: number, // todo: Proportion?
    exact: boolean,
    possible: boolean,
    tinaError: number,
    initialPositionTinaDifference: number,
}

type History = HistoricalEvent[]

type ConsolidatedHistories = { [key in Level]?: ConsolidatedEvent[] }

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

interface AnalyzedOrConsolidatedEvent extends HistoricalEvent { // todo: maybe we don't need this??
    exact: boolean,
}

interface AnalyzedEvent extends AnalyzedOrConsolidatedEvent {
    distance: Cents,
    inaDistance: number,
    rank: EventRank,
}

interface ConsolidatedEvent extends AnalyzedOrConsolidatedEvent {
    isPossibleHistoryMember: boolean,
    isBestPossibleHistoryMember: boolean,
    rankOfBestRankedMemberHistory: EventRank,
    rankOfBestRankedEventInAnyMemberHistory: EventRank,
    nextEvents: EventName[],
}

interface UpdateConsolidatedEventParameters {
    analyzedEvent: AnalyzedEvent
    nextAnalyzedEvent: AnalyzedEvent,
    analyzedHistory: AnalyzedHistory,
    bestPossibleHistory: AnalyzedHistory,
}

interface SnappablePosition {
    position: Cents,
    name: EventName,
    monzo: Monzo,
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
    AnalyzedOrConsolidatedEvent, // todo: don't want to export
    SnappablePosition,
}
