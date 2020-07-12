import {
    AnalyzedEvent,
    AnalyzedHistory,
    ConsolidatedEvent,
    EventName,
    EventRank,
    EventType,
    HistoricalEvent,
    Score,
} from "../../../../src/scripts/analyzeBounds/types"
import { Cents, Proportion } from "../../../../src/utilities/types"
import { Bound, BoundId, Level } from "../../../../src/notations/ji/types"

const eventFixture: HistoricalEvent = {
    position: 0 as Cents,
    type: "" as EventType,
    level: "" as Level,
    name: "" as EventName,
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
    position: 0 as Cents,
    rank: 0 as EventRank,
    score: 0 as Score,
    distance: 0 as Cents,
    exact: false,
    inaDistance: 0 as Proportion,
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
    nextEvents: [] as EventName[],
    exact: false,
}

const boundFixture: Bound = {
    id: 0 as BoundId,
    levels: [],
    position: 0 as Cents,
}

export {
    eventFixture,
    analyzedEventFixture,
    analyzedHistoryFixture,
    consolidatedEventFixture,
    boundFixture,
}
