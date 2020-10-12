import { Id } from "../../general"
import { SYMBOL_SUBSET_COMMA_CLASS_IDS } from "./symbolSubsetCommaClassIds"
import { SYMBOL_SUBSETS } from "./symbolSubsets"
import { CommaClass, SymbolSubset } from "./types"

const getSmallestSymbolSubset = (commaClassId: Id<CommaClass>): SymbolSubset => {
    for (const symbolSubset of SYMBOL_SUBSETS) {
        if (SYMBOL_SUBSET_COMMA_CLASS_IDS[ symbolSubset ].includes(commaClassId)) {
            return symbolSubset
        }
    }

    throw new Error(`Comma class ID ${commaClassId} was not found in any symbol subset.`)
}

export {
    getSmallestSymbolSubset,
}
