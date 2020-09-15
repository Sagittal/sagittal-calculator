import { SymbolSubset } from "../types"

// sorted by increasing size (count of symbols)
// because each next one includes the previous

const SYMBOL_SUBSETS_USED_IN_JI_NOTATION_SORTED_BY_ASCENDING_SYMBOL_COUNT: SymbolSubset[] = [
    SymbolSubset.SPARTAN,
    SymbolSubset.ATHENIAN,
    SymbolSubset.PROMETHEAN,
    SymbolSubset.HERCULEAN,
    SymbolSubset.OLYMPIAN,
    SymbolSubset.MAGRATHEAN,
]

export {
    SYMBOL_SUBSETS_USED_IN_JI_NOTATION_SORTED_BY_ASCENDING_SYMBOL_COUNT,
}
