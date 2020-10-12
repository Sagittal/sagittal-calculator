import { Id, Index, Two3FreeClass } from "../../../general"
import { CommaClass, getSmallestSymbolSubset, SymbolSubset, SYMBOL_SUBSETS } from "../../../sagittal"
import { computeNotatingCommaClassIds } from "./notatingCommaClassIds"
import { NotatingCommaClassesProperties } from "./types"

const computeNotatingCommaClassesProperties = (
    two3FreeClass: Two3FreeClass,
): NotatingCommaClassesProperties => {
    const notatingCommaClassIds = computeNotatingCommaClassIds(two3FreeClass)

    const smallestSymbolSubsetIndices = notatingCommaClassIds
        .map((commaClassId: Id<CommaClass>): Index<SymbolSubset> => {
            // This used to not include Trojan, and the tables that have been shared on the forum reflect that.
            return SYMBOL_SUBSETS.indexOf(getSmallestSymbolSubset(commaClassId)) as Index<SymbolSubset>
        })

    return {
        notatingCommaClassIds,
        notatingCommaClassSmallestSymbolSubsetIndices: smallestSymbolSubsetIndices,
    }
}

export {
    computeNotatingCommaClassesProperties,
}
