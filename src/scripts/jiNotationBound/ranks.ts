import { Integer, Rank } from "../../general"
import { EventType } from "./histories"

const RANKS: Record<EventType, Integer & Rank<EventType>> = {
    [ EventType.INA_MIDPOINT ]: 1 as Integer & Rank<EventType>,
    [ EventType.COMMA_MEAN ]: 2 as Integer & Rank<EventType>,
    [ EventType.SIZE_CATEGORY_BOUND ]: 3 as Integer & Rank<EventType>,
}

export {
    RANKS,
}
