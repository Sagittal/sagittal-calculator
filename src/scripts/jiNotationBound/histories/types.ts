import { Cents, CentsPosition, Name } from "../../../general"
import { BoundType, JiNotationLevel, SizeCategoryBound } from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<BoundPosition>,
    cents: Cents,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

// TODO: ULTIMATELY MOVE FROM CENTS TO DECIMALS
//  fix both CommaMean and InaMidpoint below, per SizeCategoryBound too
type CommaMean = CentsPosition & {
    cents: Cents,
    name: Name<CommaMean>,
}

type InaMidpoint = CentsPosition & {
    cents: Cents,
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
