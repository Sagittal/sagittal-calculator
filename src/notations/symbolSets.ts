import { SymbolSet } from "./types"

// TODO: Dave calls these "subsets"... should we do that here too?
//  there's not really a helpful notion within the code of the set as a whole...
//  though I do see the value for a human user of Sagittal

const SYMBOL_SETS: SymbolSet[] = [
    SymbolSet.SPARTAN,
    SymbolSet.ATHENIAN,
    SymbolSet.PROMETHEAN,
    SymbolSet.HERCULEAN,
    SymbolSet.OLYMPIAN,
    SymbolSet.MAGRATHEAN,
]

export {
    SYMBOL_SETS,
}
