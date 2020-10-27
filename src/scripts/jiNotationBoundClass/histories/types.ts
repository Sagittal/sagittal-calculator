import {Name, Scamon} from "../../../general"
import {BoundType, JiNotationBound, JiNotationLevelId} from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevelId,
    name: Name<JiNotationBound>,
    pitch: Scamon,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

export {
    BoundEvent,
    BoundHistory,
}
