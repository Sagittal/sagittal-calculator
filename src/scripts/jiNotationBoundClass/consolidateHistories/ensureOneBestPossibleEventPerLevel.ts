import { isEmpty } from "../../../general"
import { formatJiNotationLevel, JiNotationLevel } from "../../../sagittal"
import { BoundClassEventConsolidation, BoundClassHistoryConsolidation } from "./types"

const ensureOneBestPossibleEventPerJiNotationLevel = (
    boundClassHistoryConsolidation: BoundClassHistoryConsolidation,
): void => {
    const boundClassHistoryConsolidationEntries =
        Object.entries(boundClassHistoryConsolidation) as Array<[JiNotationLevel, BoundClassEventConsolidation[]]>

    boundClassHistoryConsolidationEntries.forEach(
        ([jiNotationLevel, boundClassEventConsolidations]: [JiNotationLevel, BoundClassEventConsolidation[]]): void => {
            const bestPossibleBoundClassHistoryBoundClassEvents =
                boundClassEventConsolidations.filter(
                    (boundClassEventConsolidation: BoundClassEventConsolidation): boolean => {
                        return boundClassEventConsolidation.isBestPossibleBoundClassHistoryMember
                    },
                )

            if (bestPossibleBoundClassHistoryBoundClassEvents.length > 1) {
                throw new Error(`Bound class history had at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level more than one event marked as member of the best possible bound class history.`)
            }
            if (isEmpty(bestPossibleBoundClassHistoryBoundClassEvents)) {
                throw new Error(`Bound class history had at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level no event marked as member of the best possible bound class history.`)
            }
        },
    )
}

export {
    ensureOneBestPossibleEventPerJiNotationLevel,
}
