import {isEmpty} from "@sagittal/general"
import {formatJiNotationLevel, JiNotationLevelId} from "@sagittal/system"
import {BoundEventConsolidation, BoundHistoryConsolidation} from "./types"

const ensureOneBestPossibleEventPerJiNotationLevel = (
    boundHistoryConsolidation: BoundHistoryConsolidation,
): void => {
    const boundHistoryConsolidationEntries =
        Object.entries(boundHistoryConsolidation) as Array<[JiNotationLevelId, BoundEventConsolidation[]]>

    boundHistoryConsolidationEntries.forEach(
        ([jiNotationLevel, boundEventConsolidations]: [JiNotationLevelId, BoundEventConsolidation[]]): void => {
            const bestPossibleBoundHistoryBoundEvents =
                boundEventConsolidations.filter(
                    (boundEventConsolidation: BoundEventConsolidation): boolean => {
                        return boundEventConsolidation.isBestPossibleBoundHistoryMember
                    },
                )

            if (bestPossibleBoundHistoryBoundEvents.length > 1) {
                throw new Error(`Bound class history had at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level more than one event marked as member of the best possible bound class history.`)
            }
            if (isEmpty(bestPossibleBoundHistoryBoundEvents)) {
                throw new Error(`Bound class history had at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level no event marked as member of the best possible bound class history.`)
            }
        },
    )
}

export {
    ensureOneBestPossibleEventPerJiNotationLevel,
}
