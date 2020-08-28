import { Cents, Id, Name, Pitch, Proportion, Rank, Sum } from "../../../../../src/general"
import { Bound, Level, Tina } from "../../../../../src/sagittal/notations/ji"
import {
    AnalyzedEvent,
    AnalyzedHistory,
    ConsolidatedEvent,
    EventType,
    HistoricalEvent,
    Score,
} from "../../../../../src/scripts/analyzeBounds/types"

const eventFixture: HistoricalEvent = {
    cents: 0 as Cents,
    type: "" as EventType,
    level: "" as Level,
    name: "" as Name<Pitch>,
}

const analyzedEventFixture: AnalyzedEvent = {
    ...eventFixture,
    distance: 0 as Cents,
    inaDistance: 0 as Proportion,
    rank: 0 as Rank<AnalyzedEvent>,
    exact: false,
}

const analyzedHistoryFixture: AnalyzedHistory = {
    events: [],
    cents: 0 as Cents,
    rank: 0 as Rank<AnalyzedEvent>,
    score: 0 as Score,
    distance: 0 as Cents,
    exact: false,
    inaDistance: 0 as Sum<Proportion>,
    possible: false,
    tinaError: 0 as Proportion<Tina>,
    initialPositionTinaDifference: 0 as Proportion<Tina>,
}

const consolidatedEventFixture: ConsolidatedEvent = {
    ...eventFixture,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    rankOfBestRankedMemberHistory: 0 as Rank<AnalyzedEvent>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Rank<AnalyzedEvent>,
    nextEvents: [] as Name<Pitch>[],
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
