import {Abs, Cents, Decimal, Multiplier, Rank} from "../../../../general"
import {BoundType, Ina} from "../../../../sagittal"
import {BoundEvent} from "../../histories"

interface BoundEventAnalysis extends BoundEvent {
    distance: Abs<Cents>,
    exact: boolean,
    inaDistance: Multiplier<Ina>,
    rank: Decimal<{integer: true}> & Rank<BoundType>,
}

export {
    BoundEventAnalysis,
}
