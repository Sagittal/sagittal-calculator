import { Count, Id, IntegerDecimal, Rank, RecordKey } from "../../general"
import { BoundType, JiNotationBound, JiNotationLevel } from "../../sagittal"
import { RANKS } from "./ranks"

const jiNotationLevelsBestHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<IntegerDecimal & Rank<BoundType>>,
            Count<IntegerDecimal & Rank<BoundType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<IntegerDecimal & Rank<BoundType>>>>
const jiNotationLevelsBestCumulativeHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<IntegerDecimal & Rank<BoundType>>,
            Count<IntegerDecimal & Rank<BoundType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<IntegerDecimal & Rank<BoundType>>>>

// I would prefer these to live in a constants file but that caused a circular dependency problem
const INITIAL_RANK_COUNTS = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: 0 as Count<IntegerDecimal & Rank<BoundType>>,
    [ RANKS[ BoundType.COMMA_MEAN ] ]: 0 as Count<IntegerDecimal & Rank<BoundType>>,
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: 0 as Count<IntegerDecimal & Rank<BoundType>>,
}

const INITIAL_RANK_BOUND_INDICES = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: [],
    [ RANKS[ BoundType.COMMA_MEAN ] ]: [],
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: [],
}

const rankCounts: Record<RecordKey<IntegerDecimal & Rank<BoundType>>, Count<IntegerDecimal & Rank<BoundType>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_COUNTS))

const rankBoundIndices: Record<RecordKey<IntegerDecimal & Rank<BoundType>>, Array<Id<JiNotationBound>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_BOUND_INDICES))

export {
    jiNotationLevelsBestHistoryRanks,
    jiNotationLevelsBestCumulativeHistoryRanks,
    rankBoundIndices,
    rankCounts,
    INITIAL_RANK_COUNTS,
    INITIAL_RANK_BOUND_INDICES,
}
