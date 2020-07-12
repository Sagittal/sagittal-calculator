import { Monzo } from "../../utilities/comma/types"
import { Cents, EnumHash, Id, Proportion } from "../../utilities/types"

type SymbolLongAscii = string & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = string & { _SymbolUnicodeBrand: "SymbolUnicode" }

type Mina = number & { _MinaBrand: "Mina" }
type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

enum Level {
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    ULTRA = "ULTRA",
    EXTREME = "EXTREME",
    INSANE = "INSANE",
}

interface SagittalSymbol {
    id: Id<SagittalSymbol>,
    ascii: SymbolLongAscii,
    unicode: SymbolUnicode,
    introducingLevel: Level,
    mina: Mina,
    primaryComma: {
        monzo: Monzo,
        position: Cents,
    },
    elements: SymbolLongAscii[],
}

interface Bound {
    id: Id<Bound>,
    position: Cents,
    levels: Level[],
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
    ApotomeSlope,
}
