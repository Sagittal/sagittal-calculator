import { Abs, Cents, Id, Maybe, Multiplier, Name } from "../../../../general"
import {
    Ascii,
    CommaClass,
    CommaClassAnalysis,
    Ina,
    JiNotationBound,
    JiNotationLevel,
    Mina,
} from "../../../../sagittal"

// Shared

interface BoundedProperties {
    distance: Abs<Cents>,
    inaDistance: Multiplier<Ina>,
}

// Only used temporarily within a method

interface BoundedCommaClass extends CommaClass, BoundedProperties {
}

// Building up to JiNotationBoundIdentifiers

interface BoundedCommaClassAnalysis extends CommaClassAnalysis, BoundedProperties {
}

type BoundedCommaClassAnalysisPair =
    [Maybe<BoundedCommaClassAnalysis>, Maybe<BoundedCommaClassAnalysis>]

type BoundedCommaClassAnalyses = { id: Id<JiNotationBound> }
    & Partial<Record<JiNotationLevel, BoundedCommaClassAnalysisPair>>

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
    CommaClassAnalysis,
    BoundedCommaClassAnalyses,
    JiNotationBoundIdentifiers,
    JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
    BoundedCommaClassIdWithDistancesPair,
    BoundedCommaClassIdWithDistances,
}
