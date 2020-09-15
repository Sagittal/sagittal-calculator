// Going to call these "subsets" because they aren't mutually exclusive
// they are concentric, containing lower sets
// and some like Trojan even cut across others

import { Apotome, Comma, Count, Direction, Id, Monzo } from "../../general"
import { SymbolLongAscii, SymbolUnicode } from "../io"

enum SymbolSubset {
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

type SagittalComma<T extends "Maybe" | void = void> = Comma & { monzo: Monzo } & (
    T extends "Maybe" ?
        { id?: Id<SagittalComma> } :
        { id: Id<SagittalComma> }
    )

interface SymbolClass {
    elements: SymbolLongAscii[],    // should this be an array of references to other objects instead of hardcoded?
    id: Id<SymbolClass>,
    primaryCommaId: Id<SagittalComma>,
    smallestSymbolSubset: SymbolSubset,     // TODO: perhaps this should be stored outside of here, other way around
    // TODO: should anything contain an "apotome complement" on it? or just a helper method to get it
    //  (along with a fun test to prove that they have the same apotome slope)
}

interface RevoSymbol {
    id: Id<RevoSymbol>,
    ascii: SymbolLongAscii,
    unicode: SymbolUnicode,
    symbolClassId: Id<SymbolClass>,
    direction: Direction,
    apotomeCount: Count<Apotome>,   // so if apotome count is 1 but direction is sub, then it's a down symb + a sharp
}

export {
    SymbolSubset,
    SagittalComma,
    SymbolClass,
    RevoSymbol,
}
