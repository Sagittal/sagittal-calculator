// tslint:disable:max-line-length

import {Decimal, Formatted, Rank, RecordKey} from "@sagittal/general"
import {BoundType} from "@sagittal/system"
import {RANKS} from "../../ranks"

const FORMATTED_RANKS: Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>, Formatted<Decimal<{integer: true}> & Rank<BoundType>>> = {
    [RANKS[BoundType.INA_MIDPOINT]]: "ina midpoint" as Formatted<Decimal<{integer: true}> & Rank<BoundType>>,
    [RANKS[BoundType.COMMA_MEAN]]: "comma mean" as Formatted<Decimal<{integer: true}> & Rank<BoundType>>,
    [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: "size category bound" as Formatted<Decimal<{integer: true}> & Rank<BoundType>>,
}

export {
    FORMATTED_RANKS,
}
