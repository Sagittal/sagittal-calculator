import {SYMBOL_SUBSETS, SYMBOL_SUBSETS_SORTED_BY_SIZE} from "./symbolSubsets"
import {SymbolClassId, SymbolSubset} from "./types"

const getSmallestSymbolSubset = (symbolClassId: SymbolClassId): SymbolSubset => {
    for (const symbolSubset of SYMBOL_SUBSETS_SORTED_BY_SIZE) {
        if (SYMBOL_SUBSETS[symbolSubset].includes(symbolClassId)) {
            return symbolSubset
        }
    }

    throw new Error(`Symbol class ID ${symbolClassId} was not found in any symbol subset.`)
}

export {
    getSmallestSymbolSubset,
}
