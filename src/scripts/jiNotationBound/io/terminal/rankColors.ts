import { ColorMethod, Integer, Rank, RecordKey } from "../../../../general"
import { BoundType } from "../../../../sagittal"
import { RANKS } from "../../ranks"

const RANK_COLOR_METHODS: Record<RecordKey<Integer & Rank<BoundType>>, ColorMethod> = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: "blue",
    [ RANKS[ BoundType.COMMA_MEAN ] ]: "cyan",
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: "green",
}

export {
    RANK_COLOR_METHODS,
}
