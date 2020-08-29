import { Id, IO } from "../../general"
import { Comma } from "../types"

type SymbolLongAscii = IO & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = IO & { _SymbolUnicodeBrand: "SymbolUnicode" }
type SymbolSmiley = IO & { _SymbolSmileyBrand: "SymbolSmiley" }

interface SagittalComma extends Comma {
    id: Id<SagittalComma>,
}

// Going to call these "subsets" because they aren't mutually exclusive
// they are concentric, containing lower sets
// and some like Trojan even cut across others

enum SymbolSubset {
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
    SagittalComma,
    SymbolSubset,
}
