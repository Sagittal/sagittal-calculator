import { BLANK, format23FreeClass, formatCents, formatMonzo, isUndefined, Ranked, Row } from "../../../../general"
import { formatSymbolClass } from "../../../../sagittal"
import { Popular23FreeClass } from "../../types"
import { BestNotatingCommaProperties } from "../types"

const computePopular23FreeClassWithBestNotatingCommaRow = (
    rankedPopular23FreeClassWithBestNotatingComma: Ranked<Popular23FreeClass & BestNotatingCommaProperties>,
): Row<{ of: Popular23FreeClass & BestNotatingCommaProperties, header: true }> => {
    const {
        two3FreeClass,
        rank: estimatedRank,
        bestNotatingCommaCents,
        bestNotatingCommaMonzo,
        bestNotatingCommaMaybeSymbolClassId,
    } = rankedPopular23FreeClassWithBestNotatingComma

    return [
        format23FreeClass(two3FreeClass),
        estimatedRank.toString(),
        formatCents(bestNotatingCommaCents, { align: true }),
        formatMonzo(bestNotatingCommaMonzo),
        isUndefined(bestNotatingCommaMaybeSymbolClassId) ?
            BLANK :
            formatSymbolClass(bestNotatingCommaMaybeSymbolClassId),
    ] as Row<{ of: Popular23FreeClass & BestNotatingCommaProperties, header: true }>
}

export {
    computePopular23FreeClassWithBestNotatingCommaRow,
}
