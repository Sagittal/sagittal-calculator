import { format23FreeClass, formatDecimal, Formatted, Id, isUndefined, Ranked, Row, SPACE } from "../../../../general"
import { formatSymbolClass, SymbolClass, SymbolGlyph } from "../../../../sagittal"
import { Popular23FreeClass } from "../../types"
import { ExactlyNotatingSymbolClassProperties } from "../types"

const computePopular23FreeClassWithExactlyNotatingSymbolClassRow = (
    popular23FreeClassWithExactlyNotatingSymbolClass: Ranked<Popular23FreeClass & ExactlyNotatingSymbolClassProperties>,
): Row<{ of: Popular23FreeClass, header: true }> => {
    const {
        two3FreeClass,
        n2d3p9,
        rank: estimatedRank,
        popularityRank: actualRank,
        exactlyNotatingSymbolClassSmallestSymbolSubsetIndices,
        exactlyNotatingSymbolClassIds,
        votes,
    } = popular23FreeClassWithExactlyNotatingSymbolClass

    return [
        format23FreeClass(two3FreeClass),
        formatDecimal(n2d3p9, { align: true }),
        exactlyNotatingSymbolClassIds.map((exactlyNotatingSymbolClassId: Id<SymbolClass>): Formatted<SymbolGlyph> => {
            return formatSymbolClass(exactlyNotatingSymbolClassId)
        }).join(SPACE).replace(/\[pre] \[\/pre]/g, " "),
        exactlyNotatingSymbolClassSmallestSymbolSubsetIndices.join(", "),
        estimatedRank.toString(),
        isUndefined(actualRank) ? "-" : actualRank.toString(),
        votes.toString(),
    ] as Row<{ of: Popular23FreeClass & ExactlyNotatingSymbolClassProperties, header: true }>
}

export {
    computePopular23FreeClassWithExactlyNotatingSymbolClassRow,
}
