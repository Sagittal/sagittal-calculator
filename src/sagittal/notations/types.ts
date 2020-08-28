import { Id, IO } from "../../general"
import { Comma } from "../types"

type SymbolLongAscii = IO & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = IO & { _SymbolUnicodeBrand: "SymbolUnicode" }
type SymbolSmiley = IO & { _SymbolSmileyBrand: "SymbolSmiley" }

interface SagittalComma extends Comma {
    id: Id<SagittalComma>,
}

enum SymbolSet {
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
}

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
    SagittalComma,
    SymbolSet,
}
