import { Name, Scamon } from "../../../general"
import { BoundClass, BoundType, JiNotationLevel } from "../../../sagittal"

interface BoundClassEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<BoundClass>,
    pitch: Scamon,
    boundType: BoundType,
}

type BoundClassHistory = BoundClassEvent[]

export {
    BoundClassEvent,
    BoundClassHistory,
}
