import { Cents, Id, Maybe, Multiplier } from "../../../../general"
import {
    CommaAnalysis,
    Ina,
    JiNotationBound,
    JiNotationLevel,
    Mina,
    SagittalComma,
    SymbolClass,
    SymbolLongAscii,
    SymbolUnicode,
} from "../../../../sagittal"

// shared

interface BoundedProperties {
    distance: Cents,
    inaDistance: Multiplier<Ina>,
}

// only used temporarily within a method

interface BoundedSymbolClass extends SymbolClass, BoundedProperties {}

// building up to JiNotationBoundIdentifiers

type SymbolClassAnalysis = Omit<SymbolClass, "primaryCommaId"> & {
    primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> }
    ascii: SymbolLongAscii,
    unicode: SymbolUnicode,
    introducingJiNotationLevel: JiNotationLevel,
    mina: Mina,
}

interface BoundedSymbolClassAnalysis extends SymbolClassAnalysis, BoundedProperties {}

type BoundedSymbolClassAnalysisPair =
    [Maybe<BoundedSymbolClassAnalysis>, Maybe<BoundedSymbolClassAnalysis>]

type BoundedSymbolClassAnalyses = { id: Id<JiNotationBound> }
    & Partial<Record<JiNotationLevel, BoundedSymbolClassAnalysisPair>>

interface JiNotationBoundIdentifiers {
    boundedSymbolClassAnalyses: BoundedSymbolClassAnalyses,
    extremeLevelGreaterBoundedSymbolClass: SymbolLongAscii,
    extremeLevelLesserBoundedSymbolClass: SymbolLongAscii,
    greaterBoundedMina?: Mina,
    lesserBoundedMina?: Mina,
    cents: Cents,
}

// building up to JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel

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
