import {Count, Decimal, Id, Rank, RecordKey} from "../../general"
import {BoundClass, BoundType, JiNotationLevel} from "../../sagittal"
import {RANKS} from "./ranks"

// TODO: per the recent commit where Id<BoundClass> forced revisions in here, I'd like to audit the recent conversion
//  Of everything from bound over to bound class, because a lot of it is now just JI Notation bound instead.

const jiNotationLevelsBestHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>,
            Count<Decimal<{integer: true}> & Rank<BoundType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Decimal<{integer: true}> & Rank<BoundType>>>>
const jiNotationLevelsBestCumulativeHistoryRanks:
    Record<JiNotationLevel,
        Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>,
            Count<Decimal<{integer: true}> & Rank<BoundType>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Decimal<{integer: true}> & Rank<BoundType>>>>

// I would prefer these to live in a constants file but that caused a circular dependency problem
const INITIAL_RANK_COUNTS = {
    [RANKS[BoundType.INA_MIDPOINT]]: 0 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
    [RANKS[BoundType.COMMA_MEAN]]: 0 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
    [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 0 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
}

const INITIAL_RANK_BOUND_INDICES = {
    [RANKS[BoundType.INA_MIDPOINT]]: [],
    [RANKS[BoundType.COMMA_MEAN]]: [],
    [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: [],
}

const rankCounts: Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>,
    Count<Decimal<{integer: true}> & Rank<BoundType>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_COUNTS))

const rankBoundClassIndices:
    Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>, Array<Id<BoundClass>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_BOUND_INDICES))

export {
    jiNotationLevelsBestHistoryRanks,
    jiNotationLevelsBestCumulativeHistoryRanks,
    rankBoundClassIndices,
    rankCounts,
    INITIAL_RANK_COUNTS,
    INITIAL_RANK_BOUND_INDICES,
}
