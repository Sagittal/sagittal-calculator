import {
    BLANK,
    format23FreeClass,
    formatMonzo,
    formatNumber,
    ioSettings,
    isUndefined,
    Ranked,
    Row,
} from "../../../../general"
import { formatSymbolClass } from "../../../../sagittal"
import { ExactlyNotatingSymbolClassProperties } from "../../exactlyNotatingSymbolClass"
import { Popular23FreeClass } from "../../types"
import { BestNotatingCommaProperties } from "../types"

const computePopular23FreeClassWithBestNotatingCommaRow = (
    rankedPopular23FreeClassWithBestNotatingComma: Ranked<Popular23FreeClass & BestNotatingCommaProperties>,
): Row<{ of: Popular23FreeClass & ExactlyNotatingSymbolClassProperties, header: true }> => {
    const {
        rank: estimatedRank,
        bestNotatingCommaCents,
        bestNotatingCommaMonzo,
        bestNotatingCommaMaybeSymbolClassId,
    } = rankedPopular23FreeClassWithBestNotatingComma

    return [
        format23FreeClass(rankedPopular23FreeClassWithBestNotatingComma),
        // TODO: I'd like a better solution for ensuring these have to be formatted before asserting as Row
        estimatedRank, 
        formatNumber(bestNotatingCommaCents),
        formatMonzo(bestNotatingCommaMonzo),
        isUndefined(bestNotatingCommaMaybeSymbolClassId) ?
            BLANK :
            formatSymbolClass(bestNotatingCommaMaybeSymbolClassId, ioSettings),
    ] as Row<{ of: Popular23FreeClass & ExactlyNotatingSymbolClassProperties, header: true }>
}

export {
    computePopular23FreeClassWithBestNotatingCommaRow,
}
