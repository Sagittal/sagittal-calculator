import { Abs, Cents, Id, Maybe, Multiplier, Name } from "../../../../general"
import {
    Ascii,
    CommaClass,
    Ina,
    JiNotationBound,
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

type BoundedCommaClassAnalyses = { id: Id<JiNotationBound> }
    & Partial<Record<JiNotationLevel, BoundedCommaClassInfoPair>>

interface JiNotationBoundIdentifiers {
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

type JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel =
    { id: Id<JiNotationBound> }
    & Partial<Record<JiNotationLevel, BoundedCommaClassIdWithDistancesPair>>

export {
    BoundedCommaClass,
    CommaClassInfo,
    BoundedCommaClassAnalyses,
    JiNotationBoundIdentifiers,
    JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
    BoundedCommaClassIdWithDistancesPair,
    BoundedCommaClassIdWithDistances,
}
