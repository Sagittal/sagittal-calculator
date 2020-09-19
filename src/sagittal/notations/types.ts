import { Apotome, Comma, Count, Direction, Id, Monzo, Name } from "../../general"
import { SymbolLongAscii, SymbolUnicode } from "../io"
import { CommaAnalysis } from "../ji"
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
    //  note though that they are symbol CLASS elements, because they're irrespective of direction
    elements: SymbolLongAscii[],
    id: Id<SymbolClass>,
    primaryCommaId: Id<SagittalComma>,
}

type SymbolClassAnalysis = Omit<SymbolClass, "primaryCommaId"> & {
    primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> }
    ascii: SymbolLongAscii,
    unicode: SymbolUnicode,
    introducingJiNotationLevel: JiNotationLevel,
    minaName: Name<Mina>,
    smallestSymbolSubset: SymbolSubset,
    // TODO: this could contain an "apotome complement" on it, with a helper method to get it
    //  i.e. the symbol class ID of your apotome complement
    //  wait a second... no. an apotome complement is a property not of a symbol class, but of a SYMBOL
    //  (along with a fun test to prove that complements have the same slope)
    //  and you should have a test to prove their primary commas sum to an apotome
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
