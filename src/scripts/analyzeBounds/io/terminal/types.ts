import { Cents, Id, Maybe, Proportion } from "../../../../general"
import { Bound, JiSymbol, Level, Mina, SagittalComma, SymbolLongAscii } from "../../../../sagittal"

interface BoundedJiSymbol extends JiSymbol {
    distance: Cents,
    inaDistance: Proportion,
}

interface BoundedJiSymbolWithPrimaryComma extends JiSymbolWithPrimaryComma {
    distance: Cents,
    inaDistance: Proportion,
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
    inaDistance: Proportion,
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
