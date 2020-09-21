import { Cents, CentsPosition, Name } from "../../../general"
import { BoundType, JiNotationLevel, SizeCategoryBound } from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<BoundPosition>,
    cents: Cents,
    boundType: BoundType,
}

// TODO: just ... don't have this name? or just go head and make it an object which
//  contains boundEvents, so that BoundHistoryAnalysis can actually extend it?
type BoundHistory = BoundEvent[]

interface CommaMean extends CentsPosition {
    name: Name<CommaMean>,
}

interface InaMidpoint extends CentsPosition {
    name: Name<InaMidpoint>,
}

type BoundPosition = InaMidpoint | CommaMean | SizeCategoryBound

export {
    BoundEvent,
    BoundHistory,
    CommaMean,
    InaMidpoint,
    BoundPosition,
}
