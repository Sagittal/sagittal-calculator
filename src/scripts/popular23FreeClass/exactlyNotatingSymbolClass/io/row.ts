import {
    format23FreeClass,
    formatDecimal,
    Formatted,
    Id,
    ioSettings,
    isUndefined,
    Ranked,
    Row,
    SPACE,
} from "../../../../general"
import { formatSymbolClass, SymbolClass, SymbolGlyph } from "../../../../sagittal"
import { Popular23FreeClass } from "../../types"
import { ExactlyNotatingSymbolClassProperties } from "../types"

const computePopular23FreeClassWithExactlyNotatingSymbolClassRow = (
    popular23FreeClass: Ranked<Popular23FreeClass & ExactlyNotatingSymbolClassProperties>,
): Row<{ of: Popular23FreeClass, header: true }> => {
    const {
        n2d3p9,
        rank: estimatedRank,
        popularityRank: actualRank,
        exactlyNotatingSymbolClassSmallestSymbolSubsetIndices,
        exactlyNotatingSymbolClassIds,
        votes,
    } = popular23FreeClass

    return [
        popular23FreeClass.name,
        formatDecimal(n2d3p9, { align: true }),
        exactlyNotatingSymbolClassIds.map((exactlyNotatingSymbolClassId: Id<SymbolClass>): Formatted<SymbolGlyph> => {
            return formatSymbolClass(exactlyNotatingSymbolClassId, ioSettings)
        }).join(SPACE),
        exactlyNotatingSymbolClassSmallestSymbolSubsetIndices.join(", "),
        estimatedRank.toString(),
        isUndefined(actualRank) ? "-" : actualRank.toString(),
        votes.toString(),
    ] as Row<{ of: Popular23FreeClass & ExactlyNotatingSymbolClassProperties, header: true }>
}

export {
    computePopular23FreeClassWithExactlyNotatingSymbolClassRow,
}
