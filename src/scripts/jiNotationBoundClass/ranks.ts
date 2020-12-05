import {Decimal, Rank} from "@sagittal/general"
import {BoundType} from "@sagittal/system"

const RANKS: Record<BoundType, Decimal<{integer: true}> & Rank<BoundType>> = {
    [BoundType.INA_MIDPOINT]: 1 as Decimal<{integer: true}> & Rank<BoundType>,
    [BoundType.COMMA_MEAN]: 2 as Decimal<{integer: true}> & Rank<BoundType>,
    [BoundType.SIZE_CATEGORY_BOUND]: 3 as Decimal<{integer: true}> & Rank<BoundType>,
}

export {
    RANKS,
}
