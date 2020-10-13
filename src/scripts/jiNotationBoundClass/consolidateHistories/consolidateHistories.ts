import { Maybe } from "../../../general"
import { BoundClassEventAnalysis, BoundClassHistoryAnalysis } from "../history"
import { ensureOneBestPossibleEventPerJiNotationLevel } from "./ensureOneBestPossibleEventPerLevel"
import { computeInitialEventConsolidation } from "./initialEventConsolidation"
import { BoundClassEventConsolidation, BoundClassHistoryConsolidation } from "./types"
import { updateEventConsolidation } from "./updateEventConsolidation"

const consolidateBoundClassHistories = (
    boundClassHistoryAnalyses: BoundClassHistoryAnalysis[],
    bestPossibleBoundClassHistoryAnalysis: BoundClassHistoryAnalysis,
): BoundClassHistoryConsolidation => {
    const boundClassHistoryConsolidation: BoundClassHistoryConsolidation = {}

    boundClassHistoryAnalyses.forEach((boundClassHistoryAnalysis: BoundClassHistoryAnalysis): void => {
        boundClassHistoryAnalysis.boundClassEventAnalyses.forEach((
            boundClassEventAnalysis: BoundClassEventAnalysis, index: number,
        ): void => {
            boundClassHistoryConsolidation[ boundClassEventAnalysis.jiNotationLevel ] =
                boundClassHistoryConsolidation[ boundClassEventAnalysis.jiNotationLevel ] || []
            const boundClassEventConsolidations: Maybe<BoundClassEventConsolidation[]> =
                boundClassHistoryConsolidation[ boundClassEventAnalysis.jiNotationLevel ]

            const nextBoundClassEventAnalysis = boundClassHistoryAnalysis.boundClassEventAnalyses[ index + 1 ]

            const matchingEventConsolidation: Maybe<BoundClassEventConsolidation> = boundClassEventConsolidations &&
                boundClassEventConsolidations.find(
                    (existingEventConsolidation: BoundClassEventConsolidation): boolean => {
                        return existingEventConsolidation.name === boundClassEventAnalysis.name
                    },
                )

            const updateEventConsolidationOptions = {
                nextBoundClassEventAnalysis,
                boundClassHistoryAnalysis,
                boundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            }

            if (matchingEventConsolidation) {
                updateEventConsolidation(matchingEventConsolidation, updateEventConsolidationOptions)
            } else {
                const newEventConsolidation: BoundClassEventConsolidation =
                    computeInitialEventConsolidation(boundClassEventAnalysis)

                updateEventConsolidation(newEventConsolidation, updateEventConsolidationOptions)

                boundClassEventConsolidations && boundClassEventConsolidations.push(newEventConsolidation)
            }
        })
    })

    ensureOneBestPossibleEventPerJiNotationLevel(boundClassHistoryConsolidation)

    return boundClassHistoryConsolidation
}

export {
    consolidateBoundClassHistories,
}
