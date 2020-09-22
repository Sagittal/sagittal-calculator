import {
    format23FreeClass,
    formatNumber,
    Formatted,
    Id,
    ioSettings,
    isUndefined,
    Ranked,
    Row,
    SPACE,
} from "../../../../general"
import { formatSymbolClass, SymbolClass, SymbolLongAscii, SymbolSmiley, SymbolUnicode } from "../../../../sagittal"
import { Popular23FreeClass } from "../../types"
import { ExactlyNotatingSymbolClassProperties } from "../types"

const computePopular23FreeClassWithExactlyNotatingSymbolClassRow = (
    popular23FreeClass: Ranked<Popular23FreeClass & ExactlyNotatingSymbolClassProperties>,
): Row<{ of: Popular23FreeClass, header: true }> => {
    const {
        n2d3p9,
        rank: estimatedRank,
        popularityRank: actualRank,
        exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices,
        exactlyNotatingSymbolClassIds,
        votes,
    } = popular23FreeClass

    return [
        format23FreeClass(popular23FreeClass),
        formatNumber(n2d3p9),
        exactlyNotatingSymbolClassIds.map((
            exactlyNotatingSymbolClassId: Id<SymbolClass>,
            // todo: now I feel like I've got to come up with a name for this union of three symbol visuals...
            //  and I don't think "glyph" is right for some reason... but maybe it is.
            ): Formatted<SymbolSmiley | SymbolLongAscii | SymbolUnicode> => {
                return formatSymbolClass(exactlyNotatingSymbolClassId, ioSettings)
            },
        ).join(SPACE),
        exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices.join(", "),
        estimatedRank,
        isUndefined(actualRank) ? "-" : actualRank,
        votes,
    ] as Row<{ of: Popular23FreeClass & ExactlyNotatingSymbolClassProperties, header: true }>
}

export {
    computePopular23FreeClassWithExactlyNotatingSymbolClassRow,
}
