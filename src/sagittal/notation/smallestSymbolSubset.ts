import {SIZE_SORTED_SYMBOL_SUBSET_IDS, SYMBOL_SUBSETS} from "./symbolSubsets"
import {SymbolClassId, SymbolSubsetId} from "./types"

const getSmallestSymbolSubsetId = (symbolClassId: SymbolClassId): SymbolSubsetId => {
    for (const symbolSubset of SIZE_SORTED_SYMBOL_SUBSET_IDS) {
        if (SYMBOL_SUBSETS[symbolSubset].includes(symbolClassId)) {
            return symbolSubset
        }
    }

    throw new Error(`Symbol class ID ${symbolClassId} was not found in any symbol subset.`)
}

export {
    getSmallestSymbolSubsetId,
}
