import { Id } from "../../general"
import { SYMBOL_SUBSETS } from "./symbolSubsets"
import { SYMBOL_SUBSET_SYMBOL_CLASS_IDS } from "./symbolSubsetSymbolClassIds"
import { SymbolClass, SymbolSubset } from "./types"

const getSmallestSymbolSubset = (symbolClassId: Id<SymbolClass>): SymbolSubset => {
    for (const symbolSubset of SYMBOL_SUBSETS) {
        if (SYMBOL_SUBSET_SYMBOL_CLASS_IDS[ symbolSubset ].includes(symbolClassId)) {
            return symbolSubset
        }
    }

    throw new Error(`Symbol class ID ${symbolClassId} was not found in any symbol subset.`)
}

export {
    getSmallestSymbolSubset,
}
