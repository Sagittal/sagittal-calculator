import { Abs, Cents, IntegerDecimal, Multiplier, Rank } from "../../../../general"
import { BoundType, Ina } from "../../../../sagittal"
import { BoundEvent } from "../../histories"

interface BoundEventAnalysis extends BoundEvent {
    distance: Abs<Cents>,
    exact: boolean,
    inaDistance: Multiplier<Ina>,
    rank: IntegerDecimal & Rank<BoundType>,
}

export {
    BoundEventAnalysis,
}
