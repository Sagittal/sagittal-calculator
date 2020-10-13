import { Id, Index, Two3FreeClass } from "../../../general"
import {
    CommaClass,
    FlaccoSubset,
    FLACCO_SUBSETS_SORTED_BY_SIZE,
    getCommaClass,
    getSmallestFlaccoSubset,
} from "../../../sagittal"
import { computeNotatingCommaClassIds } from "./notatingCommaClassIds"
import { NotatingCommaClassesProperties } from "./types"

const computeNotatingCommaClassesProperties = (
    two3FreeClass: Two3FreeClass,
): NotatingCommaClassesProperties => {
    const notatingCommaClassIds = computeNotatingCommaClassIds(two3FreeClass)

    const smallestFlaccoSubsetIndices = notatingCommaClassIds
        .map((commaClassId: Id<CommaClass>): Index<FlaccoSubset> => {
            const flaccoId = getCommaClass(commaClassId).representativeFlaccoId

            // This used to not include Trojan, and the tables that have been shared on the forum reflect that.
            return FLACCO_SUBSETS_SORTED_BY_SIZE.indexOf(getSmallestFlaccoSubset(flaccoId)) as Index<FlaccoSubset>
        })

    return {
        notatingCommaClassIds,
        notatingCommaClassSmallestFlaccoSubsetIndices: smallestFlaccoSubsetIndices,
    }
}

export {
    computeNotatingCommaClassesProperties,
}
