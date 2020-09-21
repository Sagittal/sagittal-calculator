import { Abs, Cents, Count, Id, Integer, Multiplier, Name, Rank, Sum } from "../../../../../src/general"
import { BoundType, Ina, JiNotationBound, JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { JiNotationBoundAnalysis } from "../../../../../src/scripts/jiNotationBound/bound"
import { BoundEventConsolidation } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/types"
import { BoundEvent, BoundPosition } from "../../../../../src/scripts/jiNotationBound/histories"
import { BoundEventAnalysis, BoundHistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"

const boundEventFixture: BoundEvent = {
    cents: 0 as Cents,
    boundType: "" as BoundType,
    jiNotationLevel: "" as JiNotationLevel,
    name: "" as Name<BoundPosition>,
}

const boundEventAnalysisFixture: BoundEventAnalysis = {
    ...boundEventFixture,
    distance: 0 as Abs<Cents>,
    inaDistance: 0 as Multiplier<Ina>,
    rank: 0 as Integer & Rank<BoundType>,
    exact: false,
}

const boundHistoryAnalysisFixture: BoundHistoryAnalysis = {
    boundEventAnalyses: [],
    cents: 0 as Cents,
    rank: 0 as Integer & Rank<BoundType>,
    score: 0 as Score,
    totalDistance: 0 as Sum<Abs<Cents>>,
    exact: false,
    totalInaDistance: 0 as Sum<Multiplier<Ina>>,
    possible: false,
    tinaError: 0 as Multiplier<Tina>,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
}

const boundEventConsolidationFixture: BoundEventConsolidation = {
    ...boundEventFixture,
    isPossibleBoundHistoryMember: false,
    isBestPossibleBoundHistoryMember: false,
    rankOfBestRankedMemberHistory: 0 as Integer & Rank<BoundType>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Integer & Rank<BoundType>,
    nextBoundEvents: [] as Name<BoundPosition>[],
    exact: false,
}

const jiNotationBoundFixture: JiNotationBound = {
    id: 0 as Id<JiNotationBound>,
    jiNotationLevels: [],
    cents: 0 as Cents,
    boundType: BoundType.INA_MIDPOINT,
}

const jiNotationBoundAnalysisFixture: JiNotationBoundAnalysis = {
    bestPossibleBoundHistoryAnalysis: boundHistoryAnalysisFixture,
    bestRank: RANKS[ BoundType.INA_MIDPOINT ],
    initialPosition: 0 as Cents,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
    bestPossibleBoundHistoryTotalDistance: 0 as Cents,
    bestPossibleBoundHistoryTotalInaDistance: 0 as Sum<Multiplier<Ina>>,
    boundHistoryConsolidation: {},
    possibleBoundHistoryCount: 0 as Count<BoundHistoryAnalysis>,
}

export {
    boundEventFixture,
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
    boundEventConsolidationFixture,
    jiNotationBoundFixture,
    jiNotationBoundAnalysisFixture,
}
