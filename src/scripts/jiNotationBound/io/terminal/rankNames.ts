import { Formatted, Integer, Rank, RecordKey } from "../../../../general"
import { EventType } from "../../histories"
import { RANKS } from "../../ranks"

const FORMATTED_RANKS: Record<RecordKey<Integer & Rank<EventType>>, Formatted<Integer & Rank<EventType>>> = {
    [ RANKS[ EventType.INA_MIDPOINT ] ]: "ina midpoint" as Formatted<Integer & Rank<EventType>>,
    [ RANKS[ EventType.COMMA_MEAN ] ]: "comma mean" as Formatted<Integer & Rank<EventType>>,
    [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: "size category bound" as Formatted<Integer & Rank<EventType>>,
}

export {
    FORMATTED_RANKS,
}
