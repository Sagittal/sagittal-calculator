import {isEmpty, Maybe, Score} from "../../../general"
import {BoundHistory} from "../histories"
import {BoundHistoryAnalysis} from "../history"

const computeBestPossibleBoundHistoryAnalysis = (
    boundHistoryAnalyses: BoundHistoryAnalysis[],
): Maybe<BoundHistoryAnalysis> => {
    if (isEmpty(boundHistoryAnalyses)) return undefined

    let bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis =
        {score: Infinity as Score<BoundHistory>} as BoundHistoryAnalysis

    const atLeastOneExactBoundHistory = boundHistoryAnalyses
        .some((boundHistoryAnalysis: BoundHistoryAnalysis): boolean => !boundHistoryAnalysis.exact)
    if (atLeastOneExactBoundHistory) {
        const exactBoundHistoryAnalyses: BoundHistoryAnalysis[] = []
        boundHistoryAnalyses.forEach((boundHistoryAnalysis: BoundHistoryAnalysis): void => {
            if (boundHistoryAnalysis.exact) {
                exactBoundHistoryAnalyses.push(boundHistoryAnalysis)
            }
        })
        if (exactBoundHistoryAnalyses.length) {
            return computeBestPossibleBoundHistoryAnalysis(exactBoundHistoryAnalyses)
        }
    }

    boundHistoryAnalyses.forEach((boundHistoryAnalysis: BoundHistoryAnalysis): void => {
        if (
            boundHistoryAnalysis.score < bestPossibleBoundHistoryAnalysis.score ||
            (
                boundHistoryAnalysis.score === bestPossibleBoundHistoryAnalysis.score &&
                boundHistoryAnalysis.totalDistance < bestPossibleBoundHistoryAnalysis.totalDistance
            )
        ) {
            bestPossibleBoundHistoryAnalysis = boundHistoryAnalysis
        }
    })

    return bestPossibleBoundHistoryAnalysis
}

export {
    computeBestPossibleBoundHistoryAnalysis,
}
