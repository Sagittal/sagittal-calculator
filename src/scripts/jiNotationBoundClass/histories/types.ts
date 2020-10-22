import {Name, Scamon} from "../../../general"
import {BoundType, JiNotationBound, JiNotationLevel} from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<JiNotationBound>,
    pitch: Scamon,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

export {
    BoundEvent,
    BoundHistory,
}
