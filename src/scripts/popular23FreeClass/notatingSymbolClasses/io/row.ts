import {format23FreeClass, formatDecimal, Formatted, isUndefined, Ranked, Row, SPACE} from "@sagittal/general"
import {formatSymbolClass, SymbolClass, SymbolClassId} from "@sagittal/system"
import {Popular23FreeClass} from "../../types"
import {NotatingSymbolClassesProperties} from "../types"

const computePopular23FreeClassWithNotatingSymbolClassesRow = (
    popular23FreeClassWithNotatingSymbolClasses: Ranked<Popular23FreeClass & NotatingSymbolClassesProperties>,
): Row<{of: Popular23FreeClass, header: true}> => {
    const {
        two3FreeClass,
        n2d3p9,
        rank: estimatedRank,
        popularityRank: actualRank,
        notatingSymbolClassSmallestSymbolSubsetIndices,
        notatingSymbolClassIds,
        votes,
    } = popular23FreeClassWithNotatingSymbolClasses

    return [
        format23FreeClass(two3FreeClass),
        formatDecimal(n2d3p9, {align: true}),
        notatingSymbolClassIds.map((notatingSymbolClassId: SymbolClassId): Formatted<SymbolClass> => {
            return formatSymbolClass(notatingSymbolClassId)
        }).join(SPACE),
        notatingSymbolClassSmallestSymbolSubsetIndices.join(", "),
        estimatedRank.toString(),
        isUndefined(actualRank) ? "-" : actualRank.toString(),
        votes.toString(),
    ] as Row<{of: Popular23FreeClass & NotatingSymbolClassesProperties, header: true}>
}

export {
    computePopular23FreeClassWithNotatingSymbolClassesRow,
}
