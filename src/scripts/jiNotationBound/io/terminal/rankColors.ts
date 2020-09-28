import { ColorMethod, IntegerDecimal, Rank, RecordKey } from "../../../../general"
import { BoundType } from "../../../../sagittal"
import { RANKS } from "../../ranks"

const RANK_COLOR_METHODS: Record<RecordKey<IntegerDecimal & Rank<BoundType>>, ColorMethod> = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: "blue",
    [ RANKS[ BoundType.COMMA_MEAN ] ]: "cyan",
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: "green",
}

export {
    RANK_COLOR_METHODS,
}
