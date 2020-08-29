import { SymbolSubset } from "../types"

// sorted by increasing size (count of symbols)
// because each next one includes the previous

const JI_SYMBOL_SUBSETS: SymbolSubset[] = [
    SymbolSubset.SPARTAN,
    SymbolSubset.ATHENIAN,
    SymbolSubset.PROMETHEAN,
    SymbolSubset.HERCULEAN,
    SymbolSubset.OLYMPIAN,
    SymbolSubset.MAGRATHEAN,
]

export {
    JI_SYMBOL_SUBSETS,
}
