import {Index, Two3FreeClass} from "../../../general"
import {
    CommaClassId,
    getCommaClass,
    getSmallestSymbolSubset,
    SymbolSubset,
    SYMBOL_SUBSETS_SORTED_BY_SIZE,
} from "../../../sagittal"
import {computeNotatingCommaClassIds} from "./notatingCommaClassIds"
import {NotatingCommaClassesProperties} from "./types"

const computeNotatingCommaClassesProperties = (
    two3FreeClass: Two3FreeClass,
): NotatingCommaClassesProperties => {
    const notatingCommaClassIds = computeNotatingCommaClassIds(two3FreeClass)

    const smallestSymbolSubsetIndices = notatingCommaClassIds
        .map((commaClassId: CommaClassId): Index<SymbolSubset> => {
            const flaccoId = getCommaClass(commaClassId).representativeSymbolClassId

            // This used to not include Trojan, and the tables that have been shared on the forum reflect that.
            return SYMBOL_SUBSETS_SORTED_BY_SIZE.indexOf(getSmallestSymbolSubset(flaccoId)) as Index<SymbolSubset>
        })

    return {
        notatingCommaClassIds,
        notatingCommaClassSmallestSymbolSubsetIndices: smallestSymbolSubsetIndices,
    }
}

export {
    computeNotatingCommaClassesProperties,
}
