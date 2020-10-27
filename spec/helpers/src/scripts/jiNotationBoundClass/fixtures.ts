import {
    Abs,
    Cents,
    Count,
    Decimal,
    EMPTY_MONZO,
    HALF_SCALER,
    Multiplier,
    Name,
    Quotient,
    Rank,
    Scamon,
    Sum,
    UNISON,
} from "../../../../../src/general"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../src/general/math/irrational/scamon/constants"
import {
    BoundType,
    Ina,
    JiNotationBound,
    JiNotationBoundClass,
    JiNotationLevelId,
    Tina,
} from "../../../../../src/sagittal/notations"
import {JiNotationBoundClassAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/boundClass"
import {BoundEventConsolidation} from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/types"
import {BoundEvent} from "../../../../../src/scripts/jiNotationBoundClass/histories"
import {BoundEventAnalysis, BoundHistoryAnalysis, Score} from "../../../../../src/scripts/jiNotationBoundClass/history"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"

const boundEventFixture: BoundEvent = {
    pitch: {monzo: IRRATIONAL_SCAMON_BASE_MONZO, scaler: HALF_SCALER} as Scamon<{rational: false}>,
    boundType: "" as BoundType,
    jiNotationLevel: "" as JiNotationLevelId,
    name: "" as Name<JiNotationBound>,
}

const boundEventAnalysisFixture: BoundEventAnalysis = {
    ...boundEventFixture,
    distance: 0 as Abs<Cents>,
    inaDistance: 0 as Multiplier<Ina>,
    rank: 0 as Decimal<{integer: true}> & Rank<BoundType>,
    exact: false,
}

const boundHistoryAnalysisFixture: BoundHistoryAnalysis = {
    boundEventAnalyses: [],
    pitch: {monzo: IRRATIONAL_SCAMON_BASE_MONZO, scaler: HALF_SCALER} as Scamon<{rational: false}>,
    rank: 0 as Decimal<{integer: true}> & Rank<BoundType>,
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
    rankOfBestRankedMemberHistory: 0 as Decimal<{integer: true}> & Rank<BoundType>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Decimal<{integer: true}> & Rank<BoundType>,
    nextBoundEvents: [] as Array<Name<JiNotationBound>>,
    exact: false,
}

const jiNotationBoundClassFixture: JiNotationBoundClass = {
    jiNotationLevels: [],
    pitch: {
        monzo: EMPTY_MONZO,
        scaler: [1, 1] as Quotient,
    } as Scamon<{rational: false}>,
    boundType: BoundType.INA_MIDPOINT,
    name: "" as Name<JiNotationBound>,
}

const jiNotationBoundClassAnalysisFixture: JiNotationBoundClassAnalysis = {
    bestPossibleBoundHistoryAnalysis: boundHistoryAnalysisFixture,
    bestRank: RANKS[BoundType.INA_MIDPOINT],
    initialPosition: UNISON,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
    bestPossibleBoundHistoryTotalDistance: 0 as Sum<Abs<Cents>>,
    bestPossibleBoundHistoryTotalInaDistance: 0 as Sum<Multiplier<Ina>>,
    boundHistoryConsolidation: {},
    possibleBoundHistoryCount: 0 as Count<BoundHistoryAnalysis>,
}

export {
    boundEventFixture,
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
    boundEventConsolidationFixture,
    jiNotationBoundClassFixture,
    jiNotationBoundClassAnalysisFixture,
}
