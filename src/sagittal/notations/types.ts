import { Apotome, Comma, Count, Direction, Id, Name, NumTypeParameters } from "../../general"
import { SymbolLongAscii, SymbolUnicode } from "../io"
import { CommaAnalysis } from "../ji"
import { JiNotationLevel, Mina } from "./ji"

enum SymbolSubset {
    SAGITTAL_COMPATIBLE = "sagittalCompatible",
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

type PrimaryComma<T extends NumTypeParameters = {}> =
    Comma<T>
    & { id: Id<PrimaryComma> }

type PrimaryCommaAnalysis<T extends NumTypeParameters = {}> =
    CommaAnalysis<T>
    & { id: Id<PrimaryComma> }

interface SymbolClass {
    // TODO: REALIZE ERD DIAGRAM FOR ELEMENTS AND SYMBOLS AND COMMAS
    //  Should this be an array of references to other objects instead of hardcoded?
    //  Probably, yes. but you should review how Dave thinks of symbols and elements before you do so
    //  Because all I can remember right now is that your intuitions were a bit off
    //  Note though that they are symbol CLASS elements, because they're irrespective of comma direction
    //  - whatever you find, then make it so that in symbols.ts what's there now becomes a test expectation
    //  And the implementation code is as calculated as possible (-2, -1, 0, +1, +2 apotomes, and SUPER/SUB)
    //  As well as how their unicode and ascii, evo/revo, is calculated from elements
    elements: SymbolLongAscii[],
    id: Id<SymbolClass>,
    primaryCommaId: Id<PrimaryComma>,
}

type SymbolClassAnalysis = Omit<SymbolClass, "primaryCommaId"> & {
    primaryCommaAnalysis: PrimaryCommaAnalysis,
    ascii: SymbolLongAscii,
    unicode: SymbolUnicode,
    introducingJiNotationLevel: JiNotationLevel,
    minaName: Name<Mina>,
    smallestSymbolSubset: SymbolSubset,
}

interface Symbol {
    id: Id<Symbol>,
    revoAscii: SymbolLongAscii,
    evoAscii: SymbolLongAscii<Flavor.EVO>,
    revoUnicode: SymbolUnicode,
    evoUnicode: SymbolUnicode<Flavor.EVO>,
    symbolClassId: Id<SymbolClass>,
    commaDirection: Direction,
    apotomeCount: Count<Apotome>,
}

enum Flavor {
    EVO = "evo",
    REVO = "revo",
}

export {
    SymbolSubset,
    PrimaryComma,
    SymbolClass,
    Symbol,
    SymbolClassAnalysis,
    PrimaryCommaAnalysis,
    Flavor,
}
