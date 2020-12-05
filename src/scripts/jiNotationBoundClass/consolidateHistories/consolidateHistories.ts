import {Maybe} from "@sagittal/general"
import {BoundEventAnalysis, BoundHistoryAnalysis} from "../history"
import {ensureOneBestPossibleEventPerJiNotationLevel} from "./ensureOneBestPossibleEventPerLevel"
import {computeInitialEventConsolidation} from "./initialEventConsolidation"
import {BoundEventConsolidation, BoundHistoryConsolidation} from "./types"
import {updateEventConsolidation} from "./updateEventConsolidation"

const consolidateBoundHistories = (
    boundHistoryAnalyses: BoundHistoryAnalysis[],
    bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis,
): BoundHistoryConsolidation => {
    const boundHistoryConsolidation: BoundHistoryConsolidation = {}

    boundHistoryAnalyses.forEach((boundHistoryAnalysis: BoundHistoryAnalysis): void => {
        boundHistoryAnalysis.boundEventAnalyses.forEach((
            boundEventAnalysis: BoundEventAnalysis, index: number,
        ): void => {
            boundHistoryConsolidation[boundEventAnalysis.jiNotationLevel] =
                boundHistoryConsolidation[boundEventAnalysis.jiNotationLevel] || []
            const boundEventConsolidations: Maybe<BoundEventConsolidation[]> =
                boundHistoryConsolidation[boundEventAnalysis.jiNotationLevel]

            const nextBoundEventAnalysis = boundHistoryAnalysis.boundEventAnalyses[index + 1]

            const matchingEventConsolidation: Maybe<BoundEventConsolidation> = boundEventConsolidations &&
                boundEventConsolidations.find(
                    (existingEventConsolidation: BoundEventConsolidation): boolean => {
                        return existingEventConsolidation.name === boundEventAnalysis.name
                    },
                )

            const updateEventConsolidationOptions = {
                nextBoundEventAnalysis,
                boundHistoryAnalysis,
                boundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            }

            if (matchingEventConsolidation) {
                updateEventConsolidation(matchingEventConsolidation, updateEventConsolidationOptions)
            } else {
                const newEventConsolidation: BoundEventConsolidation =
                    computeInitialEventConsolidation(boundEventAnalysis)

                updateEventConsolidation(newEventConsolidation, updateEventConsolidationOptions)

                boundEventConsolidations && boundEventConsolidations.push(newEventConsolidation)
            }
        })
    })

    ensureOneBestPossibleEventPerJiNotationLevel(boundHistoryConsolidation)

    return boundHistoryConsolidation
}

export {
    consolidateBoundHistories,
}
