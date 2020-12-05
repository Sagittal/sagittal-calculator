import {Name, Scamon} from "@sagittal/general"
import {BoundType, JiNotationBound, JiNotationLevelId} from "@sagittal/system"

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
