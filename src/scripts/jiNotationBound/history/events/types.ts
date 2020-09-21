import { Abs, Cents, Integer, Multiplier, Rank } from "../../../../general"
import { BoundType, Ina } from "../../../../sagittal"
import { BoundEvent } from "../../histories"

interface BoundEventAnalysis extends BoundEvent {
    distance: Abs<Cents>,
    exact: boolean,
    inaDistance: Multiplier<Ina>,
    rank: Integer & Rank<BoundType>,
}

export {
    BoundEventAnalysis,
}
