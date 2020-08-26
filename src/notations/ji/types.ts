import { Cents, Id, Max, Min, Proportion } from "../../general"
import { SagittalComma, SymbolLongAscii, SymbolUnicode } from "../types"

type Tina = Cents & { _TinaBrand: Tina }
type Mina = Cents & { _MinaBrand: "Mina" }
type Ultrina = Cents & { _MinaBrand: "Mina" }
type Highina = Cents & { _MinaBrand: "Mina" }
type Medina = Cents & { _MinaBrand: "Mina" }

enum Level {
    MEDIUM = "medium",          // corresponds closely with Athenian symbol set
    HIGH = "high",              // corresponds closely with Promethean symbol set
    ULTRA = "ultra",            // corresponds closely with Herculean symbol set
    EXTREME = "extreme",        // corresponds closely with Olympian symbol set
    INSANE = "insane",          // corresponds closely with Magrathean symbol set
}

enum SymbolSet {
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
}

interface JiSymbol {
    ascii: SymbolLongAscii,
    elements: SymbolLongAscii[],
    id: Id<JiSymbol>,
    introducingLevel: Level,
    lowestSymbolSet: SymbolSet,
    mina: Mina,
    primaryComma: SagittalComma,
    unicode: SymbolUnicode,
}

interface Bound {
    id: Id<Bound>,
    levels: Level[],
    cents: Cents,
}

type BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel =
    { id: Id<Bound> }
    & Partial<Record<Level, BoundedSymbolIdWithDistancesPair>>

interface BoundedSymbolIdWithDistances {
    id: Id<JiSymbol>,
    distance: Cents,
    inaDistance: Proportion,
}

type BoundedSymbolIdWithDistancesPair = [BoundedSymbolIdWithDistances | undefined, BoundedSymbolIdWithDistances | undefined]

type NeighborPositions = [Cents | undefined, Cents | undefined]
type BoundedSymbolPositions = NeighborPositions

type SecondaryCommaZone = [Min<Cents>, Max<Cents>]

export {
    JiSymbol,
    Tina,
    Mina,
    Ultrina,
    Highina,
    Medina,
    Level,
    Bound,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
    BoundedSymbolIdWithDistances,
    BoundedSymbolIdWithDistancesPair,
    SymbolSet,
    NeighborPositions,
    BoundedSymbolPositions,
    SecondaryCommaZone,
}
