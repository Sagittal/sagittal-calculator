import { Count, Id, Integer, Rank, RecordKey } from "../../general"
import { JiNotationBound, JiNotationLevel } from "../../sagittal"
import { EventType } from "./histories"
import { RANKS } from "./ranks"

const jiNotationLevelsBestHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<Integer & Rank<EventType>>,
            Count<Integer & Rank<EventType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Integer & Rank<EventType>>>>
const jiNotationLevelsBestCumulativeHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<Integer & Rank<EventType>>,
            Count<Integer & Rank<EventType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Integer & Rank<EventType>>>>

// I would prefer these to live in a constants file but that caused a circular dependency problem
const INITIAL_RANK_COUNTS = {
    [ RANKS[ EventType.INA_MIDPOINT ] ]: 0 as Count<Integer & Rank<EventType>>,
    [ RANKS[ EventType.COMMA_MEAN ] ]: 0 as Count<Integer & Rank<EventType>>,
    [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 0 as Count<Integer & Rank<EventType>>,
}

const INITIAL_RANK_BOUND_INDICES = {
    [ RANKS[ EventType.INA_MIDPOINT ] ]: [],
    [ RANKS[ EventType.COMMA_MEAN ] ]: [],
    [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: [],
}

const rankCounts: Record<RecordKey<Integer & Rank<EventType>>, Count<Integer & Rank<EventType>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_COUNTS))

const rankBoundIndices: Record<RecordKey<Integer & Rank<EventType>>, Array<Id<JiNotationBound>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_BOUND_INDICES))

export {
    jiNotationLevelsBestHistoryRanks,
    jiNotationLevelsBestCumulativeHistoryRanks,
    rankBoundIndices,
    rankCounts,
    INITIAL_RANK_COUNTS,
    INITIAL_RANK_BOUND_INDICES,
}
