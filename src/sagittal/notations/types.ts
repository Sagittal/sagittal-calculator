// Going to call these "subsets" because they aren't mutually exclusive
// they are concentric, containing lower sets
// and some like Trojan even cut across others

import { Apotome, Comma, Count, Direction, Id, Monzo } from "../../general"
import { CommaAnalysis } from "../comma"
import { SymbolLongAscii, SymbolUnicode } from "../io"
import { JiNotationLevel, Mina } from "./ji"

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
    // TODO: should this be an array of references to other objects instead of hardcoded?
    //  probably, yes. but you should review how Dave thinks of symbols and elements before you do so
    //  because all I can remember right now is that your intuitions were a bit off
    elements: SymbolLongAscii[],
    id: Id<SymbolClass>,
    primaryCommaId: Id<SagittalComma>,
    // TODO: perhaps this should be stored outside of here, other way around
    //  but how exactly would that work (perhaps the same way as the ji notation levels work, concat'ing and sorting
    smallestSymbolSubset: SymbolSubset,
    // TODO: should anything contain an "apotome complement" on it? or just a helper method to get it
    //  (along with a fun test to prove that they have the same apotome slope)
    //  perhaps it should just be hardcoded as id reference
    //  and you should have a test to prove their primary commas sum to an apotome
}

type SymbolClassAnalysis = Omit<SymbolClass, "primaryCommaId"> & {
    primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> }
    ascii: SymbolLongAscii,
    unicode: SymbolUnicode,
    introducingJiNotationLevel: JiNotationLevel,
    mina: Mina,
}

interface RevoSymbol {
    id: Id<RevoSymbol>,
    ascii: SymbolLongAscii,
    unicode: SymbolUnicode,
    symbolClassId: Id<SymbolClass>,
    direction: Direction,
    // so if apotome count is 1 but direction is sub, then it's a down symbol + a sharp
    apotomeCount: Count<Apotome>,
}

export {
    SymbolSubset,
    SagittalComma,
    SymbolClass,
    RevoSymbol,
    SymbolClassAnalysis,
}
