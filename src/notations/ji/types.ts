import { Monzo } from "../../utilities/comma/types"
import { Cents, Proportion } from "../../utilities/types"

type SymbolLongAscii = string & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = string & { _SymbolUnicodeBrand: "SymbolUnicode" }

type SymbolId = number & { _SymbolIdBrand: "SymbolId" }
type BoundId = number & { _BoundIdBrand: "BoundId" }
type Mina = number & { _MinaIndexBrand: "Mina" }
type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

enum Level {
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    ULTRA = "ULTRA",
    EXTREME = "EXTREME",
    INSANE = "INSANE",
}

interface SagittalSymbol {
    id: SymbolId,
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
    id: BoundId,
    position: Cents,
    levels: Level[],
}

type BoundedSymbols = { id: BoundId } & { [key in Level]?: [BoundedSymbol | undefined, BoundedSymbol | undefined] }

interface BoundedSymbol extends SagittalSymbol {
    distance: Cents,
    inaDistance: Proportion,
}

export {
    SymbolLongAscii,
    SymbolUnicode,
    SagittalSymbol,
    SymbolId,
    Mina,
    Level,
    Bound,
    BoundId,
    BoundedSymbols,
    BoundedSymbol,
    ApotomeSlope,
}
