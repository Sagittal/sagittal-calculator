import { Cents, Count, Id, Integer, Multiplier, Name, Pitch, Rank, Sum } from "../../../../../src/general"
import { Ina, JiNotationBound, JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { JiNotationBoundAnalysis } from "../../../../../src/scripts/jiNotationBound/bound"
import { EventConsolidation } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/types"
import { EventType, HistoricalEvent } from "../../../../../src/scripts/jiNotationBound/histories"
import { EventAnalysis, HistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"

const eventFixture: HistoricalEvent = {
    cents: 0 as Cents,
    type: "" as EventType,
    jiNotationLevel: "" as JiNotationLevel,
    name: "" as Name<Pitch>,
}

const eventAnalysisFixture: EventAnalysis = {
    ...eventFixture,
    distance: 0 as Cents,
    inaDistance: 0 as Multiplier<Ina>,
    rank: 0 as Integer & Rank<EventType>,
    exact: false,
}

const historyAnalysisFixture: HistoryAnalysis = {
    eventAnalyses: [],
    cents: 0 as Cents,
    rank: 0 as Integer & Rank<EventType>,
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
    rankOfBestRankedMemberHistory: 0 as Integer & Rank<EventType>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Integer & Rank<EventType>,
    nextEvents: [] as Name<Pitch>[],
    exact: false,
}

const jiNotationBoundFixture: JiNotationBound = {
    id: 0 as Id<JiNotationBound>,
    jiNotationLevels: [],
    cents: 0 as Cents,
}

const jiNotationBoundAnalysisFixture: JiNotationBoundAnalysis = {
    bestPossibleHistory: historyAnalysisFixture,
    bestRank: RANKS[ EventType.INA_MIDPOINT ],
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
    jiNotationBoundFixture,
    jiNotationBoundAnalysisFixture,
}
