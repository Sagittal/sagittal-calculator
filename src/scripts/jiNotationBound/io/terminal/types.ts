import { Cents, Id, Maybe, Multiplier } from "../../../../general"
import {
    CommaAnalysis,
    Ina,
    JiNotationBound,
    JiNotationLevel,
    JiNotationSymbolClass,
    Mina,
    SagittalComma,
    SymbolClass,
    SymbolLongAscii,
    SymbolUnicode,
} from "../../../../sagittal"

interface BoundedSymbolClass extends JiNotationSymbolClass {
    distance: Cents,
    inaDistance: Multiplier,
}

interface BoundedSymbolClassWithPrimaryComma extends JiNotationSymbolClassWithPrimaryCommaAndExtras {
    distance: Cents,
    inaDistance: Multiplier,
}

type BoundedSymbolClassWithPrimaryCommaPair =
    [Maybe<BoundedSymbolClassWithPrimaryComma>, Maybe<BoundedSymbolClassWithPrimaryComma>]

type BoundedSymbolClassesWithPrimaryCommas = { id: Id<JiNotationBound> }
    & Partial<Record<JiNotationLevel, BoundedSymbolClassWithPrimaryCommaPair>>

interface JiNotationBoundIdentifiers {
    boundedSymbolClasses: BoundedSymbolClassesWithPrimaryCommas,
    extremeLevelGreaterBoundedSymbolClass: SymbolLongAscii,
    extremeLevelLesserBoundedSymbolClass: SymbolLongAscii,
    greaterBoundedMina?: Mina,
    lesserBoundedMina?: Mina,
    cents: Cents,
}

type JiNotationSymbolClassWithPrimaryCommaAndExtras = Omit<JiNotationSymbolClass, "primaryCommaId"> & {
    primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> }
    ascii: SymbolLongAscii,
    unicode: SymbolUnicode,
    introducingJiNotationLevel: JiNotationLevel,
}

type JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel =
    { id: Id<JiNotationBound> }
    & Partial<Record<JiNotationLevel, BoundedSymbolClassIdWithDistancesPair>>

interface BoundedSymbolClassIdWithDistances {
    id: Id<SymbolClass>,
    distance: Cents,
    inaDistance: Multiplier<Ina>,
}

type BoundedSymbolClassIdWithDistancesPair = [
    Maybe<BoundedSymbolClassIdWithDistances>,
    Maybe<BoundedSymbolClassIdWithDistances>,
]

export {
    BoundedSymbolClass,
    JiNotationSymbolClassWithPrimaryCommaAndExtras,
    BoundedSymbolClassesWithPrimaryCommas,
    JiNotationBoundIdentifiers,
    JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
    BoundedSymbolClassIdWithDistancesPair,
    BoundedSymbolClassIdWithDistances,
}
