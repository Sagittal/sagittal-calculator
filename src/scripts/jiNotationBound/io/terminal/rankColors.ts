import { ColorMethod, Integer, Rank, RecordKey } from "../../../../general"
import { EventType } from "../../histories"
import { RANKS } from "../../ranks"

const RANK_COLOR_METHODS: Record<RecordKey<Integer & Rank<EventType>>, ColorMethod> = {
    [ RANKS[ EventType.INA_MIDPOINT ] ]: "blue",
    [ RANKS[ EventType.COMMA_MEAN ] ]: "cyan",
    [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: "green",
}

export {
    RANK_COLOR_METHODS,
}
