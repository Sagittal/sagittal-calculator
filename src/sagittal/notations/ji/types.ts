import { Cents, Id } from "../../../general"
import { SymbolLongAscii, SymbolUnicode } from "../../io"
import { SagittalComma, SymbolSubset } from "../types"

type Tina = Cents & { _InaBrand: "Tina" }
type Mina = Cents & { _InaBrand: "Mina" }
type Ultrina = Cents & { _InaBrand: "Ultrina" }
type Highina = Cents & { _InaBrand: "Highina" }
type Medina = Cents & { _InaBrand: "Medina" }

type Ina = Cents & { _InaBrand: "Tina" | "Mina" | "Ultrina" | "Highina" | "Medina" }

enum Level {
    MEDIUM = "medium",          // corresponds closely with Athenian symbol subset
    HIGH = "high",              // corresponds closely with Promethean symbol subset
    ULTRA = "ultra",            // corresponds closely with Herculean symbol subset
    EXTREME = "extreme",        // corresponds closely with Olympian symbol subset
    INSANE = "insane",          // corresponds closely with Magrathean symbol subset
}

// TODO: eventually have an enum Notations which has JI, EDO, PRIME_FACTOR, etc. and then this should be Symbol<>
//  ... I wonder if that would prevent it from conflating Symbol with whatever other Symbol it tries to import sometimes
//  - well, except that of course symbols get used in a number of notations, so when you have an Id, it is of a Symbol
//  in general
//  ok well there's a need for a single-shaft up-version ... perhaps that's a SymbolClass?
//  and then another type would be more like a Symbol, and that would include all the down versions, and the multishafts
//  and something should include "apotome complement" on it
interface JiSymbol {
    ascii: SymbolLongAscii,
    elements: SymbolLongAscii[],    // should this be an array of references to other objects instead of hardcoded?
    unicode: SymbolUnicode,
    id: Id<JiSymbol>,
    primaryCommaId: Id<SagittalComma>,
    smallestJiSymbolSubset: SymbolSubset,   // why is this "ji" symbol subset? nothing "ji" about the symbol subsets...

    // JI only
    introducingLevel: Level,
    mina: Mina,
}

interface Bound {
    id: Id<Bound>,
    levels: Level[],
    cents: Cents,
}

export {
    JiSymbol,
    Tina,
    Mina,
    Ultrina,
    Highina,
    Medina,
    Level,
    Bound,
    Ina,
}
