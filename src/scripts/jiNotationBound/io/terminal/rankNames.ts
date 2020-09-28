import { Formatted, IntegerDecimal, Rank, RecordKey } from "../../../../general"
import { BoundType } from "../../../../sagittal"
import { RANKS } from "../../ranks"

const FORMATTED_RANKS:
    Record<RecordKey<IntegerDecimal & Rank<BoundType>>, Formatted<IntegerDecimal & Rank<BoundType>>> = {
    [ RANKS[ BoundType.INA_MIDPOINT ] ]: "ina midpoint" as Formatted<IntegerDecimal & Rank<BoundType>>,
    [ RANKS[ BoundType.COMMA_MEAN ] ]: "comma mean" as Formatted<IntegerDecimal & Rank<BoundType>>,
    [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: "size category bound" as Formatted<IntegerDecimal & Rank<BoundType>>,
}

export {
    FORMATTED_RANKS,
}
