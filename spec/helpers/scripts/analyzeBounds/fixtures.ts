import { Cents, Id, Name, Position, Proportion, Sum } from "../../../../src/general"
import { Bound, Level } from "../../../../src/notations/ji"
import {
    AnalyzedEvent,
    AnalyzedHistory,
    ConsolidatedEvent,
    EventRank,
    EventType,
    HistoricalEvent,
    Score,
} from "../../../../src/scripts/analyzeBounds/types"

const eventFixture: HistoricalEvent = {
    cents: 0 as Cents,
    type: "" as EventType,
    level: "" as Level,
    name: "" as Name<Position>,
}

const analyzedEventFixture: AnalyzedEvent = {
    ...eventFixture,
    distance: 0 as Cents,
    inaDistance: 0 as Proportion,
    rank: 0 as EventRank,
    exact: false,
}

const analyzedHistoryFixture: AnalyzedHistory = {
    events: [],
    cents: 0 as Cents,
    rank: 0 as EventRank,
    score: 0 as Score,
    distance: 0 as Cents,
    exact: false,
    inaDistance: 0 as Sum<Proportion>,
    possible: false,
    tinaError: 0 as Proportion<"Tina">,
    initialPositionTinaDifference: 0 as Proportion<"Tina">,
}

const consolidatedEventFixture: ConsolidatedEvent = {
    ...eventFixture,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    rankOfBestRankedMemberHistory: 0 as EventRank,
    rankOfBestRankedEventInAnyMemberHistory: 0 as EventRank,
    nextEvents: [] as Name<Position>[],
    exact: false,
}

const boundFixture: Bound = {
    id: 0 as Id<Bound>,
    levels: [],
    cents: 0 as Cents,
}

export {
    eventFixture,
    analyzedEventFixture,
    analyzedHistoryFixture,
    consolidatedEventFixture,
    boundFixture,
}
