import { Cents, Comma, EnumHash, Id, Proportion } from "../../general"

type SymbolLongAscii = string & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = string & { _SymbolUnicodeBrand: "SymbolUnicode" }

type Mina = number & { _MinaBrand: "Mina" }

enum Level {
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    ULTRA = "ULTRA",
    EXTREME = "EXTREME",
    INSANE = "INSANE",
}

interface SagittalSymbol {
    ascii: SymbolLongAscii,
    elements: SymbolLongAscii[],
    id: Id<SagittalSymbol>,
    introducingLevel: Level,
    mina: Mina,
    primaryComma: Comma,
    unicode: SymbolUnicode,
}

interface Bound {
    id: Id<Bound>,
    levels: Level[],
    cents: Cents,
}

type BoundedSymbols = { id: Id<Bound> } & Partial<EnumHash<Level, [BoundedSymbol | undefined, BoundedSymbol | undefined]>>

interface BoundedSymbol extends SagittalSymbol {
    distance: Cents,
    inaDistance: Proportion,
}

export {
    SymbolLongAscii,
    SymbolUnicode,
    SagittalSymbol,
    Mina,
    Level,
    Bound,
    BoundedSymbols,
    BoundedSymbol,
}
