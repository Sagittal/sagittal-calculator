import {Abs, Cents, Decimal, Multiplier, Rank} from "@sagittal/general"
import {BoundType, Ina} from "@sagittal/system"
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
