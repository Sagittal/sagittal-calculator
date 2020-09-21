import { BoundHistoryAnalysis, Score } from "../history"

const computeBestPossibleBoundHistoryAnalysis = (
    boundHistoryAnalyses: BoundHistoryAnalysis[],
): BoundHistoryAnalysis => {
    let bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis = { score: Infinity as Score } as BoundHistoryAnalysis

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
