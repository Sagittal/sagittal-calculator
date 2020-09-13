import { Cents, Count, Id, Integer, Multiplier, Name, Pitch, Rank, Sum } from "../../../../../src/general"
import { Bound, Ina, Level, Tina } from "../../../../../src/sagittal/notations/ji"
import { BoundAnalysis } from "../../../../../src/scripts/bound/analyzeBound"
import { EventAnalysis, HistoryAnalysis, Score } from "../../../../../src/scripts/bound/analyzeHistory"
import { EventConsolidation } from "../../../../../src/scripts/bound/consolidateHistories/types"
import { EventType, HistoricalEvent } from "../../../../../src/scripts/bound/histories"

const eventFixture: HistoricalEvent = {
    cents: 0 as Cents,
    type: "" as EventType,
    level: "" as Level,
    name: "" as Name<Pitch>,
}

const eventAnalysisFixture: EventAnalysis = {
    ...eventFixture,
    distance: 0 as Cents,
    inaDistance: 0 as Multiplier<Ina>,
    rank: 0 as Integer & Rank<EventAnalysis>,
    exact: false,
}

const historyAnalysisFixture: HistoryAnalysis = {
    eventAnalyses: [],
    cents: 0 as Cents,
    rank: 0 as Integer & Rank<EventAnalysis>,
    score: 0 as Score,
    totalDistance: 0 as Cents,
    exact: false,
    totalInaDistance: 0 as Sum<Multiplier<Ina>>,
    possible: false,
    tinaError: 0 as Multiplier<Tina>,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
}

const eventConsolidationFixture: EventConsolidation = {
    ...eventFixture,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    rankOfBestRankedMemberHistory: 0 as Integer & Rank<EventAnalysis>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Integer & Rank<EventAnalysis>,
    nextEvents: [] as Name<Pitch>[],
    exact: false,
}

const boundFixture: Bound = {
    id: 0 as Id<Bound>,
    levels: [],
    cents: 0 as Cents,
}

const boundAnalysisFixture: BoundAnalysis = {
    bestPossibleHistory: historyAnalysisFixture,
    bestRank: 0 as Integer & Rank<EventAnalysis>,
    initialPosition: 0 as Cents,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
    bestPossibleHistoryTotalDistance: 0 as Cents,
    bestPossibleHistoryTotalInaDistance: 0 as Sum<Multiplier<Ina>>,
    historyConsolidation: {},
    possibleHistoryCount: 0 as Count<HistoryAnalysis>,
}

export {
    eventFixture,
    eventAnalysisFixture,
    historyAnalysisFixture,
    eventConsolidationFixture,
    boundFixture,
    boundAnalysisFixture,
}
