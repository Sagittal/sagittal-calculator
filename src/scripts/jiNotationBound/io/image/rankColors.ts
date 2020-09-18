import { HexColor, Integer, Rank, RecordKey } from "../../../../general"
import { EventType } from "../../histories"
import { RANKS } from "../../ranks"

const INA_MIDPOINT_HEX_COLOR: HexColor = "#6666ff" as HexColor
const COMMA_MEAN_HEX_COLOR: HexColor = "#88cccc" as HexColor
const SIZE_CATEGORY_BOUND_HEX_COLOR: HexColor = "#88ff88" as HexColor

const RANK_HEX_COLORS: Record<RecordKey<Integer & Rank<EventType>>, HexColor> = {
    [ RANKS[ EventType.INA_MIDPOINT ] ]: INA_MIDPOINT_HEX_COLOR,
    [ RANKS[ EventType.COMMA_MEAN ] ]: COMMA_MEAN_HEX_COLOR,
    [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: SIZE_CATEGORY_BOUND_HEX_COLOR,
}

export {
    RANK_HEX_COLORS,
    INA_MIDPOINT_HEX_COLOR,
    COMMA_MEAN_HEX_COLOR,
    SIZE_CATEGORY_BOUND_HEX_COLOR,
}
