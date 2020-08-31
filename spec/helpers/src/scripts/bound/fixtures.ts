import { Cents, Count, Id, Integer, Multiplier, Name, Pitch, Rank, Sum } from "../../../../../src/general"
import { Bound, Ina, Level, Tina } from "../../../../../src/sagittal/notations/ji"
import { AnalyzedBound } from "../../../../../src/scripts/bound/analyzeBound"
import { AnalyzedEvent, AnalyzedHistory, Score } from "../../../../../src/scripts/bound/analyzedHistory"
import { ConsolidatedEvent } from "../../../../../src/scripts/bound/consolidatedHistories/types"
import { EventType, HistoricalEvent } from "../../../../../src/scripts/bound/histories"

const eventFixture: HistoricalEvent = {
    cents: 0 as Cents,
    type: "" as EventType,
    level: "" as Level,
    name: "" as Name<Pitch>,
}

const analyzedEventFixture: AnalyzedEvent = {
    ...eventFixture,
    distance: 0 as Cents,
    inaDistance: 0 as Multiplier<Ina>,
    rank: 0 as Rank<AnalyzedEvent, Integer>,
    exact: false,
}

const analyzedHistoryFixture: AnalyzedHistory = {
    events: [],
    cents: 0 as Cents,
    rank: 0 as Rank<AnalyzedEvent, Integer>,
    score: 0 as Score,
    totalDistance: 0 as Cents,
    exact: false,
    totalInaDistance: 0 as Sum<Multiplier<Ina>>,
    possible: false,
    tinaError: 0 as Multiplier<Tina>,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
}

const consolidatedEventFixture: ConsolidatedEvent = {
    ...eventFixture,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    rankOfBestRankedMemberHistory: 0 as Rank<AnalyzedEvent, Integer>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Rank<AnalyzedEvent, Integer>,
    nextEvents: [] as Name<Pitch>[],
    exact: false,
}

const boundFixture: Bound = {
    id: 0 as Id<Bound>,
    levels: [],
    cents: 0 as Cents,
}

const analyzedBoundFixture: AnalyzedBound = {
    bestPossibleHistory: analyzedHistoryFixture,
    bestRank: 0 as Rank<AnalyzedEvent, Integer>,
    initialPosition: 0 as Cents,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
    bestPossibleHistoryTotalDistance: 0 as Cents,
    bestPossibleHistoryTotalInaDistance: 0 as Sum<Multiplier<Ina>>,
    consolidatedHistories: {},
    possibleHistoryCount: 0 as Count<AnalyzedHistory>,
}

export {
    eventFixture,
    analyzedEventFixture,
    analyzedHistoryFixture,
    consolidatedEventFixture,
    boundFixture,
    analyzedBoundFixture,
}
