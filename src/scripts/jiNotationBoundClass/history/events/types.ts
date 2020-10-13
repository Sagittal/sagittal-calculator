import { Abs, Cents, Decimal, Multiplier, Rank } from "../../../../general"
import { BoundType, Ina } from "../../../../sagittal"
import { BoundClassEvent } from "../../histories"

interface BoundClassEventAnalysis extends BoundClassEvent {
    distance: Abs<Cents>,
    exact: boolean,
    inaDistance: Multiplier<Ina>,
    rank: Decimal<{ integer: true }> & Rank<BoundType>,
}

export {
    BoundClassEventAnalysis,
}
