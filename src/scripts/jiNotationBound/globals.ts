import { Count, Id, Integer, Rank, RecordKey } from "../../general"
import { BoundType, JiNotationBound, JiNotationLevel } from "../../sagittal"
import { RANKS } from "./ranks"

const jiNotationLevelsBestHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<Integer & Rank<BoundType>>,
            Count<Integer & Rank<BoundType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Integer & Rank<BoundType>>>>
const jiNotationLevelsBestCumulativeHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<Integer & Rank<BoundType>>,
            Count<Integer & Rank<BoundType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Integer & Rank<BoundType>>>>

// I would prefer these to live in a constants file but that caused a circular dependency problem
const INITIAL_RANK_COUNTS = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: 0 as Count<Integer & Rank<BoundType>>,
    [ RANKS[ BoundType.COMMA_MEAN ] ]: 0 as Count<Integer & Rank<BoundType>>,
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: 0 as Count<Integer & Rank<BoundType>>,
}

const INITIAL_RANK_BOUND_INDICES = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: [],
    [ RANKS[ BoundType.COMMA_MEAN ] ]: [],
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: [],
}

const rankCounts: Record<RecordKey<Integer & Rank<BoundType>>, Count<Integer & Rank<BoundType>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_COUNTS))

const rankBoundIndices: Record<RecordKey<Integer & Rank<BoundType>>, Array<Id<JiNotationBound>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_BOUND_INDICES))

export {
    jiNotationLevelsBestHistoryRanks,
    jiNotationLevelsBestCumulativeHistoryRanks,
    rankBoundIndices,
    rankCounts,
    INITIAL_RANK_COUNTS,
    INITIAL_RANK_BOUND_INDICES,
}
