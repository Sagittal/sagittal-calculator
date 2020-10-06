import { Count, Decimal, Id, Rank, RecordKey } from "../../general"
import { BoundType, JiNotationBound, JiNotationLevel } from "../../sagittal"
import { RANKS } from "./ranks"

const jiNotationLevelsBestHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<Decimal<{ integer: true }> & Rank<BoundType>>,
            Count<Decimal<{ integer: true }> & Rank<BoundType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Decimal<{ integer: true }> & Rank<BoundType>>>>
const jiNotationLevelsBestCumulativeHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<Decimal<{ integer: true }> & Rank<BoundType>>,
            Count<Decimal<{ integer: true }> & Rank<BoundType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Decimal<{ integer: true }> & Rank<BoundType>>>>

// I would prefer these to live in a constants file but that caused a circular dependency problem
const INITIAL_RANK_COUNTS = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: 0 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
    [ RANKS[ BoundType.COMMA_MEAN ] ]: 0 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: 0 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
}

const INITIAL_RANK_BOUND_INDICES = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: [],
    [ RANKS[ BoundType.COMMA_MEAN ] ]: [],
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: [],
}

const rankCounts: Record<RecordKey<Decimal<{ integer: true }> & Rank<BoundType>>,
    Count<Decimal<{ integer: true }> & Rank<BoundType>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_COUNTS))

const rankBoundIndices: Record<RecordKey<Decimal<{ integer: true }> & Rank<BoundType>>, Array<Id<JiNotationBound>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_BOUND_INDICES))

export {
    jiNotationLevelsBestHistoryRanks,
    jiNotationLevelsBestCumulativeHistoryRanks,
    rankBoundIndices,
    rankCounts,
    INITIAL_RANK_COUNTS,
    INITIAL_RANK_BOUND_INDICES,
}
