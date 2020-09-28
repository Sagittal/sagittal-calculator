import { Id, Index, Two3FreeClass } from "../../../general"
import { getSmallestSymbolSubset, SymbolClass, SymbolSubset, SYMBOL_SUBSETS } from "../../../sagittal"
import { computeExactlyNotatingSymbolClassIds } from "./exactlyNotatingSymbolClassIds"
import { ExactlyNotatingSymbolClassProperties } from "./types"

const computeExactlyNotatingSymbolClassProperties = (
    two3FreeClass: Two3FreeClass,
): ExactlyNotatingSymbolClassProperties => {
    const exactlyNotatingSymbolClassIds = computeExactlyNotatingSymbolClassIds(two3FreeClass)

    const smallestSymbolSubsetIndices = exactlyNotatingSymbolClassIds
        .map((symbolClassId: Id<SymbolClass>): Index<SymbolSubset> => {
            // This used to not include Trojan, and the tables that have been shared on the forum reflect that.
            // However I eventually decided the complexity wasn't justified in excluding it, once I got the code
            // More organized such that excluding it was work, and I was too embarrassed to pester Dave about why
            // He wanted symbol subset indices rather than precision level indices.
            return SYMBOL_SUBSETS.indexOf(getSmallestSymbolSubset(symbolClassId)) as Index<SymbolSubset>
        })

    return {
        exactlyNotatingSymbolClassIds,
        exactlyNotatingSymbolClassSmallestSymbolSubsetIndices: smallestSymbolSubsetIndices,
    }
}

export {
    computeExactlyNotatingSymbolClassProperties,
}
