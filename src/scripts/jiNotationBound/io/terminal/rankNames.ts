import { Formatted, Integer, Rank, RecordKey } from "../../../../general"
import { BoundType } from "../../../../sagittal"
import { RANKS } from "../../ranks"

const FORMATTED_RANKS: Record<RecordKey<Integer & Rank<BoundType>>, Formatted<Integer & Rank<BoundType>>> = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: "ina midpoint" as Formatted<Integer & Rank<BoundType>>,
    [ RANKS[ BoundType.COMMA_MEAN ] ]: "comma mean" as Formatted<Integer & Rank<BoundType>>,
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: "size category bound" as Formatted<Integer & Rank<BoundType>>,
}

export {
    FORMATTED_RANKS,
}
