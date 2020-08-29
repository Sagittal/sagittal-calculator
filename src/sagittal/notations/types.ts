import { Id } from "../../general"
import { Comma } from "../types"

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
    SagittalComma,
    SymbolSubset,
}
