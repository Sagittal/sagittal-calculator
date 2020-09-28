import { IntegerDecimal, Rank } from "../../general"
import { BoundType } from "../../sagittal"

const RANKS: Record<BoundType, IntegerDecimal & Rank<BoundType>> = {
    [ BoundType.INA_MIDPOINT ]: 1 as IntegerDecimal & Rank<BoundType>,
    [ BoundType.COMMA_MEAN ]: 2 as IntegerDecimal & Rank<BoundType>,
    [ BoundType.SIZE_CATEGORY_BOUND ]: 3 as IntegerDecimal & Rank<BoundType>,
}

export {
    RANKS,
}
