import { Cents, Name, PotentiallyNonJiPitch } from "../../../general"
import { BoundType, JiNotationLevel, SizeCategoryBound } from "../../../sagittal"

interface BoundEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<BoundPosition>,
    // TODO: BOUNDS ANALYSIS DOES NOT BASE EVERYTHING ON CENTS INTERNALLY
    //  right, so you'll eventually want to wean yourself off this too
    //  eventually certainly you'll want to convert this script over to internally working in decimals,
    //  rather than cents. but for now we're just trying to make this refactor work.
    cents: Cents,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

type CommaMean = PotentiallyNonJiPitch & {
    name: Name<CommaMean>,
}

type InaMidpoint = PotentiallyNonJiPitch & {
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
