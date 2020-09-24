import { Cents, CentsPosition, Name } from "../../../general"
import { BoundType, JiNotationLevel, SizeCategoryBound } from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<BoundPosition>,
    cents: Cents,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

type CommaMean = CentsPosition & {
    name: Name<CommaMean>,
}

type InaMidpoint = CentsPosition & {
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
