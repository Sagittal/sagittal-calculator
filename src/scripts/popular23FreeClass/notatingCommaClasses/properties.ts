import {Index, Two3FreeClass} from "../../../general"
import {
    CommaClassId,
    getCommaClass,
    getSmallestSymbolSubsetId,
    SIZE_SORTED_SYMBOL_SUBSET_IDS,
    SymbolSubsetId,
} from "../../../sagittal"
import {computeNotatingCommaClassIds} from "./notatingCommaClassIds"
import {NotatingCommaClassesProperties} from "./types"

const computeNotatingCommaClassesProperties = (
    two3FreeClass: Two3FreeClass,
): NotatingCommaClassesProperties => {
    const notatingCommaClassIds = computeNotatingCommaClassIds(two3FreeClass)

    const smallestSymbolSubsetIndices = notatingCommaClassIds
        .map((commaClassId: CommaClassId): Index<SymbolSubsetId> => {
            const flaccoId = getCommaClass(commaClassId).representativeSymbolClassId

            // This used to not include Trojan, and the tables that have been shared on the forum reflect that.
            return SIZE_SORTED_SYMBOL_SUBSET_IDS.indexOf(getSmallestSymbolSubsetId(flaccoId)) as Index<SymbolSubsetId>
        })

    return {
        notatingCommaClassIds,
        notatingCommaClassSmallestSymbolSubsetIndices: smallestSymbolSubsetIndices,
    }
}

export {
    computeNotatingCommaClassesProperties,
}
