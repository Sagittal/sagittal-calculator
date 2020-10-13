import { isEmpty, Maybe } from "../../../general"
import { BoundClassHistoryAnalysis, Score } from "../history"

const computeBestPossibleBoundClassHistoryAnalysis = (
    boundClassHistoryAnalyses: BoundClassHistoryAnalysis[],
): Maybe<BoundClassHistoryAnalysis> => {
    if (isEmpty(boundClassHistoryAnalyses)) return undefined

    let bestPossibleBoundClassHistoryAnalysis: BoundClassHistoryAnalysis =
        { score: Infinity as Score } as BoundClassHistoryAnalysis

    const atLeastOneExactBoundClassHistory = boundClassHistoryAnalyses
        .some((boundClassHistoryAnalysis: BoundClassHistoryAnalysis): boolean => !boundClassHistoryAnalysis.exact)
    if (atLeastOneExactBoundClassHistory) {
        const exactBoundClassHistoryAnalyses: BoundClassHistoryAnalysis[] = []
        boundClassHistoryAnalyses.forEach((boundClassHistoryAnalysis: BoundClassHistoryAnalysis): void => {
            if (boundClassHistoryAnalysis.exact) {
                exactBoundClassHistoryAnalyses.push(boundClassHistoryAnalysis)
            }
        })
        if (exactBoundClassHistoryAnalyses.length) {
            return computeBestPossibleBoundClassHistoryAnalysis(exactBoundClassHistoryAnalyses)
        }
    }

    boundClassHistoryAnalyses.forEach((boundClassHistoryAnalysis: BoundClassHistoryAnalysis): void => {
        if (
            boundClassHistoryAnalysis.score < bestPossibleBoundClassHistoryAnalysis.score ||
            (
                boundClassHistoryAnalysis.score === bestPossibleBoundClassHistoryAnalysis.score &&
                boundClassHistoryAnalysis.totalDistance < bestPossibleBoundClassHistoryAnalysis.totalDistance
            )
        ) {
            bestPossibleBoundClassHistoryAnalysis = boundClassHistoryAnalysis
        }
    })

    return bestPossibleBoundClassHistoryAnalysis
}

export {
    computeBestPossibleBoundClassHistoryAnalysis,
}
