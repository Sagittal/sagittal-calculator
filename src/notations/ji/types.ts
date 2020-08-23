import { Cents, Comma, Id, Proportion } from "../../general"
import { SymbolLongAscii, SymbolUnicode } from "../types"

type Mina = number & { _MinaBrand: "Mina" }

// TODO: for consistency, shouldn't these values be camelCase, not CONSTANT_CASE ?
enum Level {
    MEDIUM = "MEDIUM",          // corresponds closely with Athenian symbol set
    HIGH = "HIGH",              // corresponds closely with Promethean symbol set
    ULTRA = "ULTRA",            // corresponds closely with Herculean symbol set
    EXTREME = "EXTREME",        // corresponds closely with Olympian symbol set
    INSANE = "INSANE",          // corresponds closely with Magrathean symbol set
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
    primaryComma: Comma,
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

export {
    JiSymbol,
    Mina,
    Level,
    Bound,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
    BoundedSymbolIdWithDistances,
    BoundedSymbolIdWithDistancesPair,
    SymbolSet,
}
