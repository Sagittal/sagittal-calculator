import {ColorMethod, Decimal, Rank, RecordKey} from "@sagittal/general"
import {BoundType} from "@sagittal/system"
import {RANKS} from "../../ranks"

const RANK_COLOR_METHODS: Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>, ColorMethod> = {
    [RANKS[BoundType.INA_MIDPOINT]]: "blue",
    [RANKS[BoundType.COMMA_MEAN]]: "cyan",
    [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: "green",
}

export {
    RANK_COLOR_METHODS,
}
