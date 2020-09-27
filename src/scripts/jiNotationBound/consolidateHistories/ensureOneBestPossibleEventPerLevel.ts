import { isEmpty } from "../../../general"
import { formatJiNotationLevel, JiNotationLevel } from "../../../sagittal"
import { BoundEventConsolidation, BoundHistoryConsolidation } from "./types"

const ensureOneBestPossibleEventPerJiNotationLevel = (boundHistoryConsolidation: BoundHistoryConsolidation): void => {
    const boundHistoryConsolidationEntries =
        Object.entries(boundHistoryConsolidation) as Array<[JiNotationLevel, BoundEventConsolidation[]]>

    boundHistoryConsolidationEntries.forEach(
        ([jiNotationLevel, boundEventConsolidations]: [JiNotationLevel, BoundEventConsolidation[]]): void => {
            const bestPossibleBoundHistoryBoundEvents =
                boundEventConsolidations.filter((boundEventConsolidation: BoundEventConsolidation): boolean => {
                    return boundEventConsolidation.isBestPossibleBoundHistoryMember
                })

            if (bestPossibleBoundHistoryBoundEvents.length > 1) {
                throw new Error(`Bound history had at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level more than one event marked as member of the best possible bound history.`)
            }
            if (isEmpty(bestPossibleBoundHistoryBoundEvents)) {
                throw new Error(`Bound history had at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level no event marked as member of the best possible bound history.`)
            }
        },
    )
}

export {
    ensureOneBestPossibleEventPerJiNotationLevel,
}
