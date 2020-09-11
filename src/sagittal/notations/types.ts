// Going to call these "subsets" because they aren't mutually exclusive
// they are concentric, containing lower sets
// and some like Trojan even cut across others

import { Comma, Id, Monzo } from "../../general"

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

export {
    SymbolSubset,
    SagittalComma,
}
