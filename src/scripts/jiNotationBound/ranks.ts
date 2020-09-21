import { Integer, Rank } from "../../general"
import { BoundType } from "../../sagittal"

const RANKS: Record<BoundType, Integer & Rank<BoundType>> = {
    [ BoundType.INA_MIDPOINT ]: 1 as Integer & Rank<BoundType>,
    [ BoundType.COMMA_MEAN ]: 2 as Integer & Rank<BoundType>,
    [ BoundType.SIZE_CATEGORY_BOUND ]: 3 as Integer & Rank<BoundType>,
}

export {
    RANKS,
}
