import { Name, Pitch } from "../../../general"
import { Bound, BoundType, JiNotationLevel } from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<Bound>,
    pitch: Pitch,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

export {
    BoundEvent,
    BoundHistory,
}
