import { Cents, Comma, EnumHash, Id, Proportion } from "../../general"
import { SymbolLongAscii, SymbolUnicode } from "../types"

type Mina = number & { _MinaBrand: "Mina" }

enum Level {
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    ULTRA = "ULTRA",
    EXTREME = "EXTREME",
    INSANE = "INSANE",
}

interface JiSymbol {
    ascii: SymbolLongAscii,
    elements: SymbolLongAscii[],
    id: Id<JiSymbol>,
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

type BoundedSymbols =
    { id: Id<Bound> }
    & Partial<EnumHash<Level, [BoundedSymbol | undefined, BoundedSymbol | undefined]>>

interface BoundedSymbol extends JiSymbol {
    distance: Cents,
    inaDistance: Proportion,
}

export {
    JiSymbol,
    Mina,
    Level,
    Bound,
    BoundedSymbols,
    BoundedSymbol,
}
