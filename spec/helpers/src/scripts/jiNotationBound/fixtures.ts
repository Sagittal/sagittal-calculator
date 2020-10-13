import {
    Abs,
    Cents,
    Count,
    Decimal,
    EMPTY_MONZO,
    Id,
    Multiplier,
    Name,
    Quotient,
    Rank,
    Scamon,
    SQRT_SCALER,
    Sum,
    UNISON,
} from "../../../../../src/general"
import { IRRATIONAL_SCAMON_BASE_MONZO } from "../../../../../src/general/math/irrational/scamon/constants"
import {
    BoundClass,
    BoundType,
    Ina,
    JiNotationBoundClass,
    JiNotationLevel,
    Tina,
} from "../../../../../src/sagittal/notations/ji"
import { JiNotationBoundClassAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/boundClass"
import { BoundClassEventConsolidation } from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/types"
import { BoundClassEvent } from "../../../../../src/scripts/jiNotationBoundClass/histories"
import { BoundClassEventAnalysis, BoundClassHistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"

const boundClassEventFixture: BoundClassEvent = {
    pitch: { monzo: IRRATIONAL_SCAMON_BASE_MONZO, scaler: SQRT_SCALER } as Scamon<{ rational: false }>,
    boundType: "" as BoundType,
    jiNotationLevel: "" as JiNotationLevel,
    name: "" as Name<BoundClass>,
}

const boundClassEventAnalysisFixture: BoundClassEventAnalysis = {
    ...boundClassEventFixture,
    distance: 0 as Abs<Cents>,
    inaDistance: 0 as Multiplier<Ina>,
    rank: 0 as Decimal<{ integer: true }> & Rank<BoundType>,
    exact: false,
}

const boundClassHistoryAnalysisFixture: BoundClassHistoryAnalysis = {
    boundClassEventAnalyses: [],
    pitch: { monzo: IRRATIONAL_SCAMON_BASE_MONZO, scaler: SQRT_SCALER } as Scamon<{ rational: false }>,
    rank: 0 as Decimal<{ integer: true }> & Rank<BoundType>,
    score: 0 as Score,
    totalDistance: 0 as Sum<Abs<Cents>>,
    exact: false,
    totalInaDistance: 0 as Sum<Multiplier<Ina>>,
    possible: false,
    tinaError: 0 as Multiplier<Tina>,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
}

const boundClassEventConsolidationFixture: BoundClassEventConsolidation = {
    ...boundClassEventFixture,
    isPossibleBoundClassHistoryMember: false,
    isBestPossibleBoundClassHistoryMember: false,
    rankOfBestRankedMemberHistory: 0 as Decimal<{ integer: true }> & Rank<BoundType>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Decimal<{ integer: true }> & Rank<BoundType>,
    nextBoundClassEvents: [] as Array<Name<BoundClass>>,
    exact: false,
}

const jiNotationBoundClassFixture: JiNotationBoundClass = {
    id: 0 as Id<JiNotationBoundClass>,
    jiNotationLevels: [],
    pitch: {
        monzo: EMPTY_MONZO,
        scaler: [1, 1] as Quotient,
    } as Scamon<{ rational: false }>,
    boundType: BoundType.INA_MIDPOINT,
    name: "" as Name<BoundClass>,
}

const jiNotationBoundClassAnalysisFixture: JiNotationBoundClassAnalysis = {
    bestPossibleBoundClassHistoryAnalysis: boundClassHistoryAnalysisFixture,
    bestRank: RANKS[ BoundType.INA_MIDPOINT ],
    initialPosition: UNISON,
    initialPositionTinaDistance: 0 as Multiplier<Tina>,
    bestPossibleBoundClassHistoryTotalDistance: 0 as Sum<Abs<Cents>>,
    bestPossibleBoundClassHistoryTotalInaDistance: 0 as Sum<Multiplier<Ina>>,
    boundClassHistoryConsolidation: {},
    possibleBoundClassHistoryCount: 0 as Count<BoundClassHistoryAnalysis>,
}

export {
    boundClassEventFixture,
    boundClassEventAnalysisFixture,
    boundClassHistoryAnalysisFixture,
    boundClassEventConsolidationFixture,
    jiNotationBoundClassFixture,
    jiNotationBoundClassAnalysisFixture,
}
