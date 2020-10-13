import { cleanObject } from "../../../../../src/general/code/cleanObject"
import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import {
    INITIAL_RANK_BOUND_INDICES,
    INITIAL_RANK_COUNTS,
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
    rankBoundClassIndices,
    rankCounts,
} from "../../../../../src/scripts/jiNotationBoundClass/globals"

afterEach((): void => {
    cleanObject(jiNotationLevelsBestHistoryRanks)
    cleanObject(jiNotationLevelsBestCumulativeHistoryRanks)

    setAllPropertiesOfObjectOnAnother({ objectToChange: rankCounts, objectWithProperties: INITIAL_RANK_COUNTS })
    setAllPropertiesOfObjectOnAnother({
        objectToChange: rankBoundClassIndices,
        objectWithProperties: INITIAL_RANK_BOUND_INDICES,
    })
})
