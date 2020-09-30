import { Cents, Name } from "../../../general"
import { Bound, BoundType, JiNotationLevel } from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<Bound>,
    // Todo: DEFER UNTIL AFTER SCALED MONZO
    //  BOUNDS ANALYSIS DOES NOT BASE EVERYTHING ON CENTS INTERNALLY
    //  Right, so you'll eventually want to wean yourself off this too
    //  Eventually certainly you'll want to convert this script over to internally working in decimals,
    //  Rather than cents. but for now we're just trying to make this refactor work.
    cents: Cents,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

export {
    BoundEvent,
    BoundHistory,
}
