import { Cents, Id, Maybe, Multiplier } from "../../../../general"
import { Bound, Ina, JiSymbol, Level, Mina, SagittalComma, SymbolLongAscii } from "../../../../sagittal"

interface BoundedJiSymbol extends JiSymbol {
    distance: Cents,
    inaDistance: Multiplier,
}

interface BoundedJiSymbolWithPrimaryComma extends JiSymbolWithPrimaryComma {
    distance: Cents,
    inaDistance: Multiplier,
}

type BoundedJiSymbolWithPrimaryCommaPair =
    [Maybe<BoundedJiSymbolWithPrimaryComma>, Maybe<BoundedJiSymbolWithPrimaryComma>]

type BoundedJiSymbolsWithPrimaryCommas = { id: Id<Bound> }
    & Partial<Record<Level, BoundedJiSymbolWithPrimaryCommaPair>>

interface BoundIdentifiers {
    boundedSymbols: BoundedJiSymbolsWithPrimaryCommas,
    extremeLevelGreaterBoundedSymbol: SymbolLongAscii,
    extremeLevelLesserBoundedSymbol: SymbolLongAscii,
    greaterBoundedMina?: Mina,
    lesserBoundedMina?: Mina,
    cents: Cents,
}

type JiSymbolWithPrimaryComma = Omit<JiSymbol, "primaryCommaId"> & {
    primaryComma: SagittalComma
}

type BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel =
    { id: Id<Bound> }
    & Partial<Record<Level, BoundedSymbolIdWithDistancesPair>>

interface BoundedSymbolIdWithDistances {
    id: Id<JiSymbol>,
    distance: Cents,
    inaDistance: Multiplier<Ina>,
}

type BoundedSymbolIdWithDistancesPair = [Maybe<BoundedSymbolIdWithDistances>, Maybe<BoundedSymbolIdWithDistances>]

export {
    BoundedJiSymbol,
    JiSymbolWithPrimaryComma,
    BoundedJiSymbolsWithPrimaryCommas,
    BoundIdentifiers,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
    BoundedSymbolIdWithDistancesPair,
}
