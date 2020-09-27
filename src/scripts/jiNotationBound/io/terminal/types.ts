import { Abs, Cents, Id, Maybe, Multiplier, Name } from "../../../../general"
import {
    Ina,
    JiNotationBound,
    JiNotationLevel,
    Mina,
    SymbolClass,
    SymbolClassAnalysis,
    SymbolLongAscii,
} from "../../../../sagittal"

// Shared

interface BoundedProperties {
    distance: Abs<Cents>,
    inaDistance: Multiplier<Ina>,
}

// Only used temporarily within a method

interface BoundedSymbolClass extends SymbolClass, BoundedProperties {
}

// Building up to JiNotationBoundIdentifiers

interface BoundedSymbolClassAnalysis extends SymbolClassAnalysis, BoundedProperties {
}

type BoundedSymbolClassAnalysisPair =
    [Maybe<BoundedSymbolClassAnalysis>, Maybe<BoundedSymbolClassAnalysis>]

type BoundedSymbolClassAnalyses = { id: Id<JiNotationBound> }
    & Partial<Record<JiNotationLevel, BoundedSymbolClassAnalysisPair>>

interface JiNotationBoundIdentifiers {
    boundedSymbolClassAnalyses: BoundedSymbolClassAnalyses,
    extremeLevelGreaterBoundedSymbolClass: SymbolLongAscii,
    extremeLevelLesserBoundedSymbolClass: SymbolLongAscii,
    greaterBoundedMinaName?: Name<Mina>,
    lesserBoundedMinaName?: Name<Mina>,
    cents: Cents,
}

// Building up to JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel

interface BoundedSymbolClassIdWithDistances extends BoundedProperties {
    id: Id<SymbolClass>,
}

type BoundedSymbolClassIdWithDistancesPair = [
    Maybe<BoundedSymbolClassIdWithDistances>,
    Maybe<BoundedSymbolClassIdWithDistances>,
]

type JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel =
    { id: Id<JiNotationBound> }
    & Partial<Record<JiNotationLevel, BoundedSymbolClassIdWithDistancesPair>>

export {
    BoundedSymbolClass,
    SymbolClassAnalysis,
    BoundedSymbolClassAnalyses,
    JiNotationBoundIdentifiers,
    JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
    BoundedSymbolClassIdWithDistancesPair,
    BoundedSymbolClassIdWithDistances,
}
