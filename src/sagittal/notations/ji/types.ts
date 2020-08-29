import { Cents, Extrema, Id } from "../../../general"
import { SymbolLongAscii, SymbolUnicode } from "../../io"
import { SagittalComma, SymbolSubset } from "../types"

type Tina = Cents & { _TinaBrand: "Tina" }
type Mina = Cents & { _MinaBrand: "Mina" }
type Ultrina = Cents & { _UltrinaBrand: "Ultrina" }
type Highina = Cents & { _HighinaBrand: "Highina" }
type Medina = Cents & { _MedinaBrand: "Medina" }

enum Level {
    MEDIUM = "medium",          // corresponds closely with Athenian symbol subset
    HIGH = "high",              // corresponds closely with Promethean symbol subset
    ULTRA = "ultra",            // corresponds closely with Herculean symbol subset
    EXTREME = "extreme",        // corresponds closely with Olympian symbol subset
    INSANE = "insane",          // corresponds closely with Magrathean symbol subset
}

interface JiSymbol {
    ascii: SymbolLongAscii,
    elements: SymbolLongAscii[],
    id: Id<JiSymbol>,
    introducingLevel: Level,
    smallestJiSymbolSubset: SymbolSubset,
    mina: Mina,
    primaryCommaId: Id<SagittalComma>,
    unicode: SymbolUnicode,
}

interface Bound {
    id: Id<Bound>,
    levels: Level[],
    cents: Cents,
}

type SecondaryCommaZone = Extrema<Cents>

export {
    JiSymbol,
    Tina,
    Mina,
    Ultrina,
    Highina,
    Medina,
    Level,
    Bound,
    SecondaryCommaZone,
}
