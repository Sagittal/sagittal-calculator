import { Name, Scamon } from "../../../general"
import {BoundClass, BoundType, JiNotationBound, JiNotationLevel} from "../../../sagittal"

interface BoundClassEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<JiNotationBound>,
    pitch: Scamon,
    boundType: BoundType,
}

type BoundClassHistory = BoundClassEvent[]

export {
    BoundClassEvent,
    BoundClassHistory,
}
