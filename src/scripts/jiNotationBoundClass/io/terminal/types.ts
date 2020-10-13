import { Abs, Cents, Id, Maybe, Multiplier, Name } from "../../../../general"
import {
    Ascii,
    CommaClass,
    Ina,
    JiNotationBoundClass,
    JiNotationLevel,
    Mina,
} from "../../../../sagittal"
import { CommaClassInfo } from "../types"

// Shared

interface BoundedProperties {
    distance: Abs<Cents>,
    inaDistance: Multiplier<Ina>,
}

// Only used temporarily within a method

interface BoundedCommaClass extends CommaClass, BoundedProperties {
}

// Building up to JiNotationBoundIdentifiers

interface BoundedCommaClassInfo extends CommaClassInfo, BoundedProperties {
}

type BoundedCommaClassInfoPair =
    [Maybe<BoundedCommaClassInfo>, Maybe<BoundedCommaClassInfo>]

type BoundedCommaClassAnalyses = { id: Id<JiNotationBoundClass> }
    & Partial<Record<JiNotationLevel, BoundedCommaClassInfoPair>>

interface JiNotationBoundClassIdentifiers {
    boundedCommaClassAnalyses: BoundedCommaClassAnalyses,
    extremeLevelGreaterBoundedCommaClass: Ascii,
    extremeLevelLesserBoundedCommaClass: Ascii,
    greaterBoundedMinaName?: Name<Mina>,
    lesserBoundedMinaName?: Name<Mina>,
    cents: Cents,
}

// Building up to JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel

interface BoundedCommaClassIdWithDistances extends BoundedProperties {
    id: Id<CommaClass>,
}

type BoundedCommaClassIdWithDistancesPair = [
    Maybe<BoundedCommaClassIdWithDistances>,
    Maybe<BoundedCommaClassIdWithDistances>,
]

type JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel =
    { id: Id<JiNotationBoundClass> }
    & Partial<Record<JiNotationLevel, BoundedCommaClassIdWithDistancesPair>>

export {
    BoundedCommaClass,
    CommaClassInfo,
    BoundedCommaClassAnalyses,
    JiNotationBoundClassIdentifiers,
    JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
    BoundedCommaClassIdWithDistancesPair,
    BoundedCommaClassIdWithDistances,
}
