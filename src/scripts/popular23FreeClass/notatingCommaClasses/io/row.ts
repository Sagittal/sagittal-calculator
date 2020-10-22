import {format23FreeClass, formatDecimal, Formatted, Id, isUndefined, Ranked, Row, SPACE} from "../../../../general"
import {CommaClass, formatCommaClass, Glyph} from "../../../../sagittal"
import {Popular23FreeClass} from "../../types"
import {NotatingCommaClassesProperties} from "../types"

const computePopular23FreeClassWithNotatingCommaClassesRow = (
    popular23FreeClassWithNotatingCommaClasses: Ranked<Popular23FreeClass & NotatingCommaClassesProperties>,
): Row<{of: Popular23FreeClass, header: true}> => {
    const {
        two3FreeClass,
        n2d3p9,
        rank: estimatedRank,
        popularityRank: actualRank,
        notatingCommaClassSmallestFlaccoSubsetIndices,
        notatingCommaClassIds,
        votes,
    } = popular23FreeClassWithNotatingCommaClasses

    return [
        format23FreeClass(two3FreeClass),
        formatDecimal(n2d3p9, {align: true}),
        notatingCommaClassIds.map((notatingCommaClassId: Id<CommaClass>): Formatted<Glyph> => {
            return formatCommaClass(notatingCommaClassId)
        }).join(SPACE).replace(/\[pre] \[\/pre]/g, " "),
        notatingCommaClassSmallestFlaccoSubsetIndices.join(", "),
        estimatedRank.toString(),
        isUndefined(actualRank) ? "-" : actualRank.toString(),
        votes.toString(),
    ] as Row<{of: Popular23FreeClass & NotatingCommaClassesProperties, header: true}>
}

export {
    computePopular23FreeClassWithNotatingCommaClassesRow,
}
