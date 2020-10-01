import {
    BLANK,
    format23FreeClass,
    formatCents,
    formatMonzo,
    ioSettings,
    isUndefined,
    Ranked,
    Row,
} from "../../../../general"
import { formatSymbolClass } from "../../../../sagittal"
import { Popular23FreeClass } from "../../types"
import { BestNotatingCommaProperties } from "../types"

const computePopular23FreeClassWithBestNotatingCommaRow = (
    rankedPopular23FreeClassWithBestNotatingComma: Ranked<Popular23FreeClass & BestNotatingCommaProperties>,
): Row<{ of: Popular23FreeClass & BestNotatingCommaProperties, header: true }> => {
    const {
        rank: estimatedRank,
        bestNotatingCommaCents,
        bestNotatingCommaMonzo,
        bestNotatingCommaMaybeSymbolClassId,
    } = rankedPopular23FreeClassWithBestNotatingComma

    return [
        format23FreeClass(rankedPopular23FreeClassWithBestNotatingComma, ioSettings),
        estimatedRank.toString(),
        formatCents(bestNotatingCommaCents, { align: true }),
        formatMonzo(bestNotatingCommaMonzo),
        isUndefined(bestNotatingCommaMaybeSymbolClassId) ?
            BLANK :
            formatSymbolClass(bestNotatingCommaMaybeSymbolClassId, ioSettings),
    ] as Row<{ of: Popular23FreeClass & BestNotatingCommaProperties, header: true }>
}

export {
    computePopular23FreeClassWithBestNotatingCommaRow,
}
