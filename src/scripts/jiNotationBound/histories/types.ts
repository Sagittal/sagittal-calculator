import { Name, Scamon } from "../../../general"
import { Bound, BoundType, JiNotationLevel } from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<Bound>,
    pitch: Scamon,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

export {
    BoundEvent,
    BoundHistory,
}
